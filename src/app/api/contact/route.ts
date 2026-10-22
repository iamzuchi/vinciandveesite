import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend if key is available
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Target email address where all inquiries should land
const DESTINATION_EMAIL = process.env.CENTRAL_COMPANY_EMAIL || 'osuagwuizuchukwu@vinciandvee.com';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'notifications@vinciandvee.com';

// In-memory sliding-window rate limiter (prevents bot flood attacks)
// Allows up to 5 submissions per IP every 10 minutes
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

// Clean up stale rate limit entries every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 15 * 60 * 1000);

// Strict email regex (RFC 5322 compliant subset)
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

// Phone number regex (allows international + prefix, digits, spaces, hyphens, parentheses, 7-25 chars)
const PHONE_REGEX = /^[+0-9()\- ]{7,25}$/;

// HTML sanitization helper to neutralize XSS in email clients
function escapeHtml(text: unknown): string {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface ContactPayload {
  deskSource?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  details?: Record<string, string | number | undefined | null>;
  website_trap?: string; // Honeypot field
  hp_title?: string;     // Secondary honeypot
}

export async function POST(req: Request) {
  try {
    // 1. IP Detection for Rate Limiting
    const forwardedFor = req.headers.get('x-forwarded-for');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    const now = Date.now();
    const rateData = rateLimitMap.get(clientIp);

    if (rateData) {
      if (now < rateData.resetTime) {
        if (rateData.count >= RATE_LIMIT_MAX_REQUESTS) {
          return NextResponse.json(
            {
              error:
                'Too many inquiries submitted from this connection. Please wait a few minutes before trying again.',
            },
            { status: 429 }
          );
        }
        rateData.count += 1;
      } else {
        rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      }
    } else {
      rateLimitMap.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    const body: ContactPayload = await req.json();

    // 2. Anti-Bot Honeypot Defense
    // If any honeypot trap field is populated, silently drop the request with 200 OK
    // (Bots receive a success status and move on without discovering they were trapped)
    if (body.website_trap || body.hp_title) {
      console.warn(`[SPAM BOT TRAPPED] Dropped submission from IP: ${clientIp}`);
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    // 3. Backend Sanitization & Validation
    const fullName = (body.fullName || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const phone = (body.phone || '').trim();
    const company = (body.company || '').trim();
    const message = (body.message || '').trim();
    const deskSource = (body.deskSource || 'Corporate Inquiry').trim();
    const details = body.details || {};

    // Validate full name
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }
    if (fullName.length > 120) {
      return NextResponse.json(
        { error: 'Full name exceeds allowable limit (maximum 120 characters).' },
        { status: 400 }
      );
    }

    // Prevent header injection in name or subject
    if (/[\r\n]/.test(fullName) || /[\r\n]/.test(deskSource)) {
      return NextResponse.json(
        { error: 'Invalid characters detected in form inputs.' },
        { status: 400 }
      );
    }

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Corporate email address is required.' },
        { status: 400 }
      );
    }
    if (!EMAIL_REGEX.test(email) || email.length > 254) {
      return NextResponse.json(
        { error: 'Please provide a valid corporate email address (e.g. name@company.com).' },
        { status: 400 }
      );
    }

    // Validate phone if provided
    if (phone && !PHONE_REGEX.test(phone)) {
      return NextResponse.json(
        {
          error:
            'Please provide a valid telephone number containing only digits, spaces, +, or hyphens.',
        },
        { status: 400 }
      );
    }

    // Validate message length
    if (message && message.length > 4000) {
      return NextResponse.json(
        { error: 'Project description exceeds allowable length (maximum 4000 characters).' },
        { status: 400 }
      );
    }

    // 4. Construct Email Notification
    const safeCategory = escapeHtml(deskSource);
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeMessage = escapeHtml(message);

    const emailSubject = `[${deskSource}] Inquiry from ${fullName}`;

    // Format detail rows with safe escaping
    const detailRows = Object.entries(details)
      .filter(([, val]) => val !== undefined && val !== null && val !== '')
      .map(
        ([key, val]) => `
          <tr>
            <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; width: 35%; font-size: 13px;">${escapeHtml(
              key
            )}</td>
            <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">${escapeHtml(
              String(val)
            )}</td>
          </tr>
        `
      )
      .join('');

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${escapeHtml(emailSubject)}</title>
        </head>
        <body style="margin: 0; padding: 24px; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 620px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 24px 28px; border-bottom: 3px solid #8C5324;">
              <p style="margin: 0 0 6px 0; color: #E8A56E; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;">VINCI AND VEE GROUP &bull; DISPATCH DESK</p>
              <h1 style="margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 700;">${safeCategory}</h1>
            </div>

            <!-- Body Content -->
            <div style="padding: 24px 28px;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155;">
                A verified inquiry was submitted via the online portal. Client specifications are detailed below:
              </p>

              <!-- Main Contact Specs -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #E2E8F0; border-radius: 6px; overflow: hidden;">
                <tbody>
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; width: 35%; font-size: 13px;">Full Legal Name:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px; font-weight: 600;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 13px;">Corporate Email:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">
                      <a href="mailto:${safeEmail}" style="color: #8C5324; text-decoration: underline;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 13px;">Direct Phone / Tel:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">
                      ${safePhone ? `<a href="tel:${safePhone}" style="color: #0F172A; text-decoration: none; font-weight: 500;">${safePhone}</a>` : 'Not provided'}
                    </td>
                  </tr>
                  ${
                    safeCompany
                      ? `
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 13px;">Organization / Company:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">${safeCompany}</td>
                  </tr>
                  `
                      : ''
                  }
                  ${detailRows}
                </tbody>
              </table>

              <!-- Message / Brief -->
              ${
                safeMessage
                  ? `
                <div style="margin-top: 16px;">
                  <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em;">Project Brief / Scope Specifications:</p>
                  <div style="padding: 14px 16px; background-color: #F8FAFC; border-left: 4px solid #8C5324; border-radius: 4px; font-size: 13px; color: #1E293B; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
                </div>
              `
                  : ''
              }

              <!-- Security Metadata Footer -->
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #94A3B8; text-align: center;">
                Security verified &bull; Client Origin IP: ${escapeHtml(clientIp)}<br/>
                Automated dispatch from Vinci and Vee Group Web Infrastructure.<br/>
                Replies sent to this email directly address <strong>${safeEmail}</strong>.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // 5. Send via Resend if API key is present
    if (resend) {
      const emailResult = await resend.emails.send({
        from: `Vinci & Vee Portal <${SENDER_EMAIL}>`,
        to: DESTINATION_EMAIL,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
      });

      if (emailResult.error) {
        console.error('Resend delivery error:', emailResult.error);
        return NextResponse.json(
          { error: emailResult.error.message || 'Failed to dispatch email.' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, messageId: emailResult.data?.id });
    } else {
      // In development when RESEND_API_KEY is not set: log cleanly and return simulated success
      console.warn(
        `[CONTACT INQUIRY RECEIVED - RESEND_API_KEY NOT SET]\nDestination: ${DESTINATION_EMAIL}\nDesk: ${deskSource}\nSender: ${fullName} (${email} / ${phone})\nCompany: ${company}\nMessage: ${message}`
      );
      return NextResponse.json({
        success: true,
        mock: true,
        message: 'Inquiry validated and received. Configure RESEND_API_KEY in .env.local to activate live delivery.',
      });
    }
  } catch (error: any) {
    console.error('Server error processing contact request:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}
