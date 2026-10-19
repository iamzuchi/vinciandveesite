import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend if key is available
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Target email address where all inquiries should land
const DESTINATION_EMAIL = process.env.CENTRAL_COMPANY_EMAIL || 'info@vinciandvee.com';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'notifications@vinciandvee.com';

interface ContactPayload {
  deskSource: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  details?: Record<string, string | number | undefined | null>;
  website_trap?: string; // Honeypot
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Honeypot check (anti-bot trap field)
    if (body.website_trap) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    const { deskSource, fullName, email, phone, company, message, details } = body;

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Please provide at least an email address or phone number.' },
        { status: 400 }
      );
    }

    const categoryTitle = deskSource || 'General Inquiry';
    const emailSubject = `[${categoryTitle}] Inquiry from ${fullName || 'Prospective Client'}`;

    // Format custom detail rows
    const detailRows = details
      ? Object.entries(details)
          .filter(([, val]) => val !== undefined && val !== null && val !== '')
          .map(
            ([key, val]) => `
              <tr>
                <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; width: 35%; font-size: 13px;">${key}</td>
                <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">${String(val)}</td>
              </tr>
            `
          )
          .join('')
      : '';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <title>${emailSubject}</title>
        </head>
        <body style="margin: 0; padding: 24px; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <div style="max-width: 620px; margin: 0 auto; background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.06); border: 1px solid #E2E8F0;">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 24px 28px; border-bottom: 3px solid #8C5324;">
              <p style="margin: 0 0 6px 0; color: #E8A56E; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase;">VINCI AND VEE GROUP &bull; DISPATCH DESK</p>
              <h1 style="margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 700;">${categoryTitle}</h1>
            </div>

            <!-- Body Content -->
            <div style="padding: 24px 28px;">
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #334155;">
                A new inquiry was submitted via the online portal. Details are provided below:
              </p>

              <!-- Main Contact Specs -->
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; border: 1px solid #E2E8F0; border-radius: 6px; overflow: hidden;">
                <tbody>
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; width: 35%; font-size: 13px;">Full Name / Contact:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px; font-weight: 600;">${fullName || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 13px;">Email Address:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">
                      ${email ? `<a href="mailto:${email}" style="color: #8C5324; text-decoration: underline;">${email}</a>` : 'Not provided'}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 13px;">Phone / WhatsApp:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">
                      ${phone ? `<a href="tel:${phone}" style="color: #0F172A; text-decoration: none; font-weight: 500;">${phone}</a>` : 'Not provided'}
                    </td>
                  </tr>
                  ${
                    company
                      ? `
                  <tr>
                    <td style="padding: 9px 12px; font-weight: 600; color: #475569; background: #F8FAFC; border-bottom: 1px solid #E2E8F0; font-size: 13px;">Organization / Company:</td>
                    <td style="padding: 9px 12px; color: #0F172A; border-bottom: 1px solid #E2E8F0; font-size: 13px;">${company}</td>
                  </tr>
                  `
                      : ''
                  }
                  ${detailRows}
                </tbody>
              </table>

              <!-- Message / Brief -->
              ${
                message
                  ? `
                <div style="margin-top: 16px;">
                  <p style="margin: 0 0 6px 0; font-size: 12px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.05em;">Inquiry Notes / Scope Description:</p>
                  <div style="padding: 14px 16px; background-color: #F8FAFC; border-left: 4px solid #8C5324; border-radius: 4px; font-size: 13px; color: #1E293B; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                </div>
              `
                  : ''
              }

              <!-- Footer notice -->
              <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #94A3B8; text-align: center;">
                Automated dispatch from Vinci and Vee Group Web Infrastructure.<br/>
                Replies sent to this email can directly address <strong>${email || 'the sender'}</strong>.
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // If Resend API key is configured, send the actual email
    if (resend) {
      const emailResult = await resend.emails.send({
        from: `Vinci & Vee Portal <${SENDER_EMAIL}>`,
        to: DESTINATION_EMAIL,
        replyTo: email || undefined,
        subject: emailSubject,
        html: htmlContent,
      });

      if (emailResult.error) {
        console.error('Resend delivery failed:', emailResult.error);
        return NextResponse.json(
          { error: emailResult.error.message || 'Failed to dispatch email' },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true, messageId: emailResult.data?.id });
    } else {
      // In development / before API key is placed: Log cleanly and return simulated success
      console.warn(
        `[CONTACT INQUIRY RECEIVED - RESEND_API_KEY NOT SET IN ENV]\nDestination: ${DESTINATION_EMAIL}\nDesk: ${deskSource}\nSender: ${fullName} (${email} / ${phone})\nCompany: ${company}\nMessage: ${message}`
      );
      return NextResponse.json({
        success: true,
        mock: true,
        message: 'Inquiry received. Configure RESEND_API_KEY in .env.local to activate live delivery.',
      });
    }
  } catch (error: any) {
    console.error('Error handling contact submission:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error processing contact request.' },
      { status: 500 }
    );
  }
}
