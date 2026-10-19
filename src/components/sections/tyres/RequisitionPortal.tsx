'use client';

import React, { useState } from 'react';
import { Lock, CheckCircle2 } from 'lucide-react';

export default function RequisitionPortal() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    tier: 'tier2',
    sizes: '',
    notes: '',
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
          deskSource: 'Tyre Wholesale Requisition Portal',
          fullName: formData.fullName,
          company: formData.companyName,
          phone: formData.phone,
          email: formData.email,
          details: {
            'Procurement Tier': formData.tier,
            'Tyre Sizes & Fleet Requirements': formData.sizes,
          },
          message: formData.notes,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit requisition.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred while submitting.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote-section" className="py-20 bg-[#F2F4FB] border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-lg border border-slate-200/90 p-8 sm:p-12 shadow-md">
          
          {/* Header */}
          <div className="text-center mb-10">
            <span className="block text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] text-[#8C5324] uppercase mb-2">
              OFFICIAL REQUISITION PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-[#0F172A] tracking-tight leading-tight">
              Request Wholesale Price Sheet or Dealer Accreditation
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
              Connect directly with Vinci &amp; Vee Group tyre management. Direct lines are monitored by regional
              distribution directors.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-md bg-emerald-50 border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <h3 className="font-bold text-lg text-emerald-950">Requisition Successfully Logged</h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                Thank you. Your requisition has been logged at the Enugu Central Depot desk. A distribution
                executive will contact you via <strong>0810 954 4821 / 0907 416 8502</strong> within two operational hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-3 inline-block px-5 py-2 text-xs font-semibold bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition"
              >
                Submit Another Requisition
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 text-xs bg-red-50 border border-red-300 text-red-700 rounded-md">
                  {errorMsg}
                </div>
              )}
              
              {/* Row 1: Full Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="full-name" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                    FULL NAME / APPLICANT NAME *
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Chief Emeka Okonkwo"
                    className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="company-name" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                    COMPANY / ENTERPRISE NAME *
                  </label>
                  <input
                    id="company-name"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Southlink Haulage Ltd"
                    className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="phone-number" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                    CORPORATE PHONE / WHATSAPP *
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g.  0810 954 4821"
                    className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email-address" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                    BUSINESS EMAIL ADDRESS *
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@company.com"
                    className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                  />
                </div>
              </div>

              {/* Row 3: Engagement Tier & Tyre Sizes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="interest-tier" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                    INTENDED ENGAGEMENT TIER
                  </label>
                  <div className="relative">
                    <select
                      id="interest-tier"
                      value={formData.tier}
                      onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                      className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition appearance-none cursor-pointer pr-10"
                    >
                      <option value="tier1">Tier 1: Bronze Dealer (50 - 200 Units)</option>
                      <option value="tier2">Tier 2: Silver Fleet (201 - 1,000 Units)</option>
                      <option value="tier3">Tier 3: Gold Distributor (Container Lots)</option>
                      <option value="retail">Institutional Retail Purchasing</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="preferred-sizes" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                    PRIMARY TYRE SIZES REQUIRED
                  </label>
                  <input
                    id="preferred-sizes"
                    type="text"
                    value={formData.sizes}
                    onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                    placeholder="e.g. 315/80R22.5, 12R22.5, 215/55R16"
                    className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition"
                  />
                </div>
              </div>

              {/* Row 4: Additional Notes */}
              <div className="space-y-1.5">
                <label htmlFor="message-notes" className="block text-[10.5px] font-mono font-bold tracking-wider text-slate-700 uppercase">
                  ADDITIONAL SPECIFICATIONS OR INVOICING NOTES
                </label>
                <textarea
                  id="message-notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Detail delivery destination, current monthly consumption, or accreditation credentials..."
                  className="w-full bg-white border border-slate-200/90 rounded-md px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition resize-y"
                ></textarea>
              </div>

              {/* Row 5: Footer Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Lock className="w-4 h-4 text-[#8C5324] shrink-0" />
                  <span>Direct Group HQ encrypted communication.</span>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 bg-[#7B4F27] hover:bg-[#68411F] text-white text-xs sm:text-sm font-semibold rounded-md transition-all duration-200 shadow-sm disabled:opacity-75"
                >
                  {loading ? 'Submitting Requisition...' : 'Submit Requisition to HQ'}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
