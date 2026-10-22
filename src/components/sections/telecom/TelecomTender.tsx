'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Shield, CheckCircle2, Loader2 } from 'lucide-react';

const solutionOptions = [
  'FTTH Turnkey (Gated Estate)',
  'Enterprise Dedicated (DIA)',
  'Carrier Dark Fibre Lease',
  'Long-Haul / Metro Trenching',
  'Emergency Splicing & Restoration',
];

const contacts = [
  {
    id: 'hq',
    icon: MapPin,
    title: 'Operational Headquarters',
    lines: ['Plot 80, Jedidiah Gardens Centenary City, Enugu 400706, Nigeria.'],
  },
  {
    id: 'ops-line',
    icon: Phone,
    title: 'Direct Technical Operations Line',
    lines: ['0810 954 4821 / 0907 416 8502'],
    note: 'Available 24 Hours for Critical Fiber Cuts',
    href: 'tel:+2348109544821',
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Corporate Engineering Inquiries',
    lines: ['telecom@vinciandvee.com'],
    href: 'mailto:telecom@vinciandvee.com',
  },
];

const labelCls =
  'block text-[10px] font-semibold tracking-[0.08em] text-slate-700 uppercase mb-1.5';
const inputCls =
  'w-full bg-white border border-slate-200 rounded-sm px-3 py-2.5 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#9B6E3B] focus:ring-2 focus:ring-[#9B6E3B]/15 transition';

export default function TelecomTender() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const formEl = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deskSource: 'Telecom Feasibility & Infrastructure Tender',
          fullName: ((formEl.get('name') as string) || '').trim(),
          company: ((formEl.get('organization') as string) || '').trim(),
          email: ((formEl.get('email') as string) || '').trim(),
          phone: ((formEl.get('phone') as string) || '').trim(),
          details: {
            'Solution Category': formEl.get('solution') as string,
            'Target Survey Date': formEl.get('surveyDate') as string,
            'Project Address / Route': ((formEl.get('address') as string) || '').trim(),
          },
          message: ((formEl.get('scope') as string) || '').trim(),
          website_trap: (formEl.get('website_trap') as string) || '',
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to dispatch tender.');
      }

      setStatus('done');
      form.reset();
    } catch (err: any) {
      setErrorMsg(err.message || 'Error submitting tender. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section id="telecom-tender" className="py-16 sm:py-20 lg:py-24 bg-[#F7F7FC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Left column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9B6E3B] uppercase block">
              DISPATCH &amp; TENDER
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[2.6rem] text-[#0F172A] tracking-tight leading-tight">
              Initiate Route Survey or Network Tender
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Chief engineers, estate general managers, and ISP technical directors can book an official
              sub-surface feasibility survey or request carrier dark strand allocations.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-md shadow-xs divide-y divide-slate-100">
            {contacts.map(({ id, icon: Icon, title, lines, note, href }) => (
              <div key={id} className="flex gap-4 p-5 group">
                <Icon className="w-4 h-4 mt-0.5 text-[#9B6E3B] shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[#0F172A]">{title}</h3>
                  {lines.map((l) =>
                    href ? (
                      <a key={l} href={href} className="block text-xs text-slate-600 mt-1 hover:text-[#9B6E3B] transition-colors">
                        {l}
                      </a>
                    ) : (
                      <p key={l} className="text-xs text-slate-600 mt-1 leading-relaxed">{l}</p>
                    )
                  )}
                  {note && <p className="text-[10px] text-slate-500 mt-1">{note}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 items-start bg-[#EEF0FB] border border-[#DDE2F6] rounded-sm p-4">
            <Shield className="w-4 h-4 text-[#9B6E3B] mt-0.5 shrink-0" />
            <p className="text-xs text-slate-600 leading-relaxed">
              Surveys include comprehensive GPS elevation profiling, civil RoW authorization checks, and
              optical budget calculations.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <form
            id="telecom-tender-form"
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200/90 rounded-md shadow-sm p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5"
          >
            {/* Honeypot Trap Field */}
            <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
              <input type="text" name="website_trap" tabIndex={-1} autoComplete="off" />
            </div>

            {errorMsg && (
              <div className="sm:col-span-2 p-3 text-xs bg-red-50 border border-red-300 text-red-700 rounded-md">
                {errorMsg}
              </div>
            )}
            <div>
              <label htmlFor="tender-name" className={labelCls}>Lead Representative Name *</label>
              <input id="tender-name" name="name" required minLength={2} maxLength={120} placeholder="Engr. Chukwuma Obi" className={inputCls} />
            </div>
            <div>
              <label htmlFor="tender-org" className={labelCls}>Organization / Estate / ISP *</label>
              <input id="tender-org" name="organization" required minLength={2} maxLength={120} placeholder="e.g. Centenary Estates Development" className={inputCls} />
            </div>
            <div>
              <label htmlFor="tender-email" className={labelCls}>Official Corporate Email *</label>
              <input id="tender-email" name="email" type="email" required maxLength={254} placeholder="name@organization.com" className={inputCls} />
            </div>
            <div>
              <label htmlFor="tender-phone" className={labelCls}>Phone Contact *</label>
              <input id="tender-phone" name="phone" type="tel" required minLength={7} maxLength={25} pattern="[0-9+()\- ]{7,25}" title="Please enter a valid phone number (7-25 digits/symbols)" placeholder="0810 954 4821" className={inputCls} />
            </div>
            <div>
              <label htmlFor="tender-solution" className={labelCls}>Required Solution Category</label>
              <select id="tender-solution" name="solution" className={inputCls} defaultValue={solutionOptions[0]}>
                {solutionOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="tender-date" className={labelCls}>Target Site Survey Date</label>
              <input id="tender-date" name="surveyDate" type="date" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="tender-address" className={labelCls}>Route Coordinates / Project Address</label>
              <input id="tender-address" name="address" placeholder="e.g. Centenary City Sector 4 to Independence Layout" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="tender-scope" className={labelCls}>Engineering Scope &amp; Target Capacity (Gbps / Cores)</label>
              <textarea
                id="tender-scope"
                name="scope"
                rows={4}
                placeholder="Provide details regarding estimated core count, required redundancy levels, and distance specifications..."
                className={`${inputCls} resize-y`}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                id="tender-submit"
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-70 text-white text-sm font-semibold py-3.5 rounded-sm transition-colors"
              >
                {status === 'submitting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-4 h-4" />
                )}
                {status === 'submitting' ? 'Submitting Tender…' : 'Submit Technical Feasibility Tender'}
              </button>
              {status === 'done' && (
                <p className="mt-3 text-xs text-emerald-700 text-center">
                  Tender received. Our engineering desk will contact you within one business day.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
