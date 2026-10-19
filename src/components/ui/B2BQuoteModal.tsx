'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Building2, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function B2BQuoteModal({ 
  isOpen, 
  onClose,
  defaultSector = 'Vinci Telecom'
}: { 
  isOpen: boolean; 
  onClose: () => void;
  defaultSector?: string;
}) {
  const [sector, setSector] = useState(defaultSector);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    quantityDetails: '',
    website_trap: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deskSource: `Enterprise RFQ - ${sector}`,
          fullName: formData.contactName,
          email: formData.email,
          phone: formData.phone,
          company: formData.companyName,
          details: {
            'Selected Sector': sector,
            'Specifications / Volume': formData.quantityDetails,
          },
          message: formData.quantityDetails,
          website_trap: formData.website_trap,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to submit quote request.');
      }

      setSubmitted(true);
      setTimeout(() => {
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      }, 500);
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-[#0F172A] border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden text-slate-200"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#1E293B]">
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-sky-400" />
                <h2 className="font-display font-bold text-lg text-white">
                  Enterprise Procurement & Quote Request (RFQ)
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                  <h3 className="font-display text-2xl font-bold text-white">
                    RFQ Request Dispatched Successfully
                  </h3>
                  <p className="text-slate-400 max-w-md mx-auto text-sm">
                    Thank you for contacting <strong className="text-sky-400">Vinci & Vee Group</strong>. Our commercial procurement division for <span className="text-amber-400">{sector}</span> will contact your team within 24 operational hours.
                  </p>
                  <div className="text-xs font-mono text-slate-500 pt-4">
                    Target Dispatch: info@vinciandvee.com &bull; Ref ID: RFQ-VV-2026
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field hidden from users */}
                  <input
                    type="text"
                    name="website_trap"
                    value={formData.website_trap}
                    onChange={(e) => setFormData({ ...formData, website_trap: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMsg && (
                    <div className="p-3 text-xs bg-red-950/50 border border-red-500/50 text-red-200 rounded-md">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Target Business Vertical
                    </label>
                    <select 
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="Vinci Telecom">Vinci Telecom (Dark Fibre & Optical Cables)</option>
                      <option value="Vinci Tyres">Vinci Tyres (Wholesale Radial & Truck Depot)</option>
                      <option value="Vinci Logistics">Vinci Logistics (Gothenburg-Lagos Shipping)</option>
                      <option value="Vinci SaaS">Vinci SaaS Enterprise (Cloud Platform)</option>
                      <option value="Construction & Design">Vinci & Vee Construction (Real Estate & Civil)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        Company / Organization Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Apex Telecom Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                        className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        Contact Person Name *
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Engr. David Okafor"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        Corporate Email *
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                        Phone / WhatsApp Number
                      </label>
                      <input 
                        type="tel"
                        placeholder="0810 954 4821"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Required Volume / Specifications / Delivery Location
                    </label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Requesting wholesale quote for 200 units of 315/80R22.5 Commercial Truck Tyres delivered to Enugu Depot..."
                      value={formData.quantityDetails}
                      onChange={(e) => setFormData({...formData, quantityDetails: e.target.value})}
                      className="w-full bg-[#1E293B] border border-slate-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex justify-end space-x-3">
                    <button
                      type="button"
                      disabled={loading}
                      onClick={onClose}
                      className="px-4 py-2 rounded-md text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2 rounded-md text-sm font-semibold bg-[#8C5324] hover:bg-[#A3642F] text-white flex items-center space-x-2 transition-colors shadow-lg disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Enterprise RFQ</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
