'use client';

import React, { useState } from 'react';
import {
  Radio,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2
} from 'lucide-react';

export default function ArchitectureConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: 'Tyre Distribution & Automotive Retail',
    scale: 'Small Business (1 - 15 Staff)',
    bottlenecks: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deskSource: 'SaaS Enterprise Architecture Desk',
          fullName: formData.name,
          email: formData.email,
          details: {
            'Target Sector': formData.sector,
            'Staff & Workload Scale': formData.scale,
          },
          message: formData.bottlenecks,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to dispatch request.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-demo" className="py-16 sm:py-24 bg-[#F2F3FF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Contact Desk Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 mb-2 font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.16em] text-[#8C5324] uppercase">
                <Radio className="w-3.5 h-3.5" />
                <span>CONSULTATIVE ARCHITECTURE DESK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#0F172A] tracking-tight leading-tight">
                Schedule an Executive System Walkthrough
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Engage directly with our senior cloud infrastructure engineers. We assess your legacy
                workflows, data migration timelines, and team access topology.
              </p>
            </div>

            {/* Contact Points */}
            <div className="space-y-4 pt-4 border-t border-slate-200/80">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-[#EAEDFF] border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                    Regional Headquarters
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Plot 80, Jedidiah Gardens Centenary City, Enugu 400706
                  </p>
                </div>
              </div>

              {/* Telephony */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-[#EAEDFF] border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                    Direct Corporate Telephony
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    0810 954 4821 / 0907 416 8502 (24-Hour Dispatch)
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-md bg-[#EAEDFF] border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                    Briefing Windows
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Monday – Friday: 08:00 – 18:00 WAT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-lg border border-slate-200/90 shadow-md">
            {submitted ? (
              <div className="p-8 rounded-md bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg text-emerald-950">Walkthrough Briefing Requested</h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Briefing request lodged with Vinci &amp; Vee Group HQ. An Enterprise Architect will contact
                  your office within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 inline-block px-5 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="exec-name"
                      className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase"
                    >
                      EXECUTIVE FULL NAME
                    </label>
                    <input
                      id="exec-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chief Victor Obi"
                      className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="exec-email"
                      className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase"
                    >
                      CORPORATE WORK EMAIL
                    </label>
                    <input
                      id="exec-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="v.obi@company.ng"
                      className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                    />
                  </div>
                </div>

                {/* Row 2: Sector and Scale */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="industry-sector"
                      className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase"
                    >
                      INDUSTRY SECTOR
                    </label>
                    <div className="relative">
                      <select
                        id="industry-sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition appearance-none cursor-pointer pr-10"
                      >
                        <option value="Tyre Distribution & Automotive Retail">
                          Tyre Distribution &amp; Automotive Retail
                        </option>
                        <option value="Telecom & Fibre Networks">
                          Telecom &amp; Fibre Networks
                        </option>
                        <option value="Cross-Border Shipping & Logistics">
                          Cross-Border Shipping &amp; Logistics
                        </option>
                        <option value="Construction, Civil & Interiors">
                          Construction, Civil &amp; Interiors
                        </option>
                        <option value="Financial Services & Conglomerate">
                          Financial Services &amp; Conglomerate
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="org-scale"
                      className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase"
                    >
                      ORGANIZATIONAL SCALE
                    </label>
                    <div className="relative">
                      <select
                        id="org-scale"
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition appearance-none cursor-pointer pr-10"
                      >
                        <option value="Small Business (1 - 15 Staff)">
                          Small Business (1 - 15 Staff)
                        </option>
                        <option value="Mid-Sized Operation (16 - 60 Staff)">
                          Mid-Sized Operation (16 - 60 Staff)
                        </option>
                        <option value="Large Commercial Outfit (61 - 250 Staff)">
                          Large Commercial Outfit (61 - 250 Staff)
                        </option>
                        <option value="Multinational / Conglomerate (250+ Staff)">
                          Multinational / Conglomerate (250+ Staff)
                        </option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Row 3: Bottlenecks */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="bottlenecks"
                    className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase"
                  >
                    CORE OPERATIONAL BOTTLENECKS
                  </label>
                  <textarea
                    id="bottlenecks"
                    rows={3}
                    value={formData.bottlenecks}
                    onChange={(e) => setFormData({ ...formData, bottlenecks: e.target.value })}
                    placeholder="Describe current ERP/CRM challenges, warehouse sync delays, or POS reconciliation needs..."
                    className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition resize-y"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-[#0D1C32] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm rounded-md shadow-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Submitting Request...' : 'Submit Architecture Consultation Request'}</span>
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-3 leading-relaxed">
                    Protected by NDA protocols and SOC2 data sovereignty safeguards.
                  </p>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
