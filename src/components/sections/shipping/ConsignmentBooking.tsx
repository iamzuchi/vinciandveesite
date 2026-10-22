'use client';

import React, { useState } from 'react';
import { MapPin, CheckCircle2, Loader2, Phone } from 'lucide-react';

const freightClasses = [
  'Precision Machinery & Industrial Equipment',
  'Pharmaceuticals (Temperature Controlled)',
  'Luxury Goods & Watches',
  'Automotive Parts',
  'General Consolidated Cargo',
];

const depots = [
  {
    id: 'zrh',
    label: 'Switzerland Receiving Depot',
    name: 'Freight West, Zurich Airport Cargo Center 8058, Switzerland',
    detail: 'Freight West Terminal Gate 12, ZRH Cargo Complex',
    note: 'Air Waybill & Escrow Acceptance Dock',
    mono: true,
  },
  {
    id: 'basel',
    label: 'Basel Rhine Consolidation Depot',
    name: 'Hochbergerstrasse, 4057 Basel, Switzerland',
    detail: 'Rhine Port Multimodal Terminal 3A',
    note: 'Barge & Intermodal Loading Hub',
  },
  {
    id: 'hq',
    label: 'Group HQ & Inland Bonded Hub',
    name: 'Vinci & Vee Group Complex',
    detail: 'Plot 80, Jedidiah Gardens Centenary City, Enugu 400706, Nigeria',
    note: 'Direct Telephone: 0810 954 4821 / 0907 416 8502',
  },
  {
    id: 'apapa',
    label: 'Maritime Clearance Office',
    name: 'Apapa Port Complex Liaison',
    detail: 'Commercial Wharf Road, Apapa Ports Corridor, Lagos, Nigeria',
  },
];

const labelCls = 'block text-[10px] font-semibold tracking-[0.08em] text-slate-700 uppercase mb-1.5';
const fieldCls =
  'w-full bg-[#F7F8FD] border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#9B6E3B] focus:ring-2 focus:ring-[#9B6E3B]/15 transition';

export default function ConsignmentBooking() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formEl = new FormData(form);
    setStatus('submitting');
    setErrorMsg('');

    const shipperContact = (formEl.get('shipperContact') as string) || '';
    const isEmail = shipperContact.includes('@');

    const shipper = ((formEl.get('shipper') as string) || '').trim();
    const consignee = ((formEl.get('consignee') as string) || '').trim();
    const address = ((formEl.get('address') as string) || '').trim();
    const manifest = ((formEl.get('manifest') as string) || '').trim();
    const websiteTrap = (formEl.get('website_trap') as string) || '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deskSource: 'Cargo Consignment & Maritime Booking',
          fullName: shipper,
          company: `${shipper} -> ${consignee}`,
          email: isEmail ? shipperContact : 'booking@vinciandvee.com',
          phone: !isEmail ? shipperContact : '',
          details: {
            'Consignee Entity': consignee,
            'Delivery Destination': address,
            'Freight Classification': formEl.get('classification') as string,
            'Estimated Weight (kg)': formEl.get('weight') as string,
            'Total CBM (m³)': formEl.get('cbm') as string,
            'Regional Pickup Requested': formEl.get('pickup') ? 'Yes' : 'No',
          },
          message: manifest,
          website_trap: websiteTrap,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Failed to dispatch booking dossier.');
      }

      setStatus('done');
      form.reset();
    } catch (err: any) {
      setErrorMsg(err.message || 'Error transmitting booking. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section id="consignment-booking" className="py-16 sm:py-20 lg:py-24 bg-[#F7F7FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Booking form */}
        <form
          id="consignment-form"
          onSubmit={handleSubmit}
          className="lg:col-span-8 bg-white border border-slate-200/90 rounded-md shadow-sm p-6 sm:p-8 space-y-5"
        >
          {/* Honeypot Trap Field */}
          <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
            <input type="text" name="website_trap" tabIndex={-1} autoComplete="off" />
          </div>

          {errorMsg && (
            <div className="p-3 text-xs bg-red-50 border border-red-300 text-red-700 rounded-sm">
              {errorMsg}
            </div>
          )}

          <div className="space-y-2 pb-2">
            <span className="text-[10px] font-semibold tracking-[0.12em] text-slate-600 uppercase block">
              Immediate Slot Reservation
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">Cargo Consignment Booking</h2>
            <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Initiate your booking dossier. Our Zurich logistics desk and Lagos customs liaison coordinate
              directly within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="cb-shipper" className={labelCls}>Shipper Name / Entity (Switzerland) *</label>
              <input id="cb-shipper" name="shipper" required minLength={2} maxLength={120} placeholder="e.g. Novartis AG / ABB Switzerland Ltd" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="cb-shipper-contact" className={labelCls}>Shipper Email / Phone *</label>
              <input id="cb-shipper-contact" name="shipperContact" required maxLength={254} placeholder="contact@swisslogistics.ch" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="cb-consignee" className={labelCls}>Consignee Name / Company (Nigeria) *</label>
              <input id="cb-consignee" name="consignee" required minLength={2} maxLength={120} placeholder="e.g. Pinnacle Industrial Ventures Ltd" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="cb-address" className={labelCls}>Consignee Delivery Address *</label>
              <input id="cb-address" name="address" required minLength={3} maxLength={200} placeholder="e.g. Centenary City, Enugu or Apapa Depot" className={fieldCls} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="cb-class" className={labelCls}>Freight Classification</label>
              <select id="cb-class" name="classification" className={fieldCls} defaultValue={freightClasses[0]}>
                {freightClasses.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="cb-weight" className={labelCls}>Estimated Weight (kg)</label>
              <input id="cb-weight" name="weight" type="number" min={0} placeholder="850" className={fieldCls} />
            </div>
            <div>
              <label htmlFor="cb-cbm" className={labelCls}>Total CBM (m³)</label>
              <input id="cb-cbm" name="cbm" type="number" min={0} step={0.1} placeholder="4.2" className={fieldCls} />
            </div>
          </div>

          <div>
            <label htmlFor="cb-manifest" className={labelCls}>Cargo Manifest &amp; Description of Goods</label>
            <textarea
              id="cb-manifest"
              name="manifest"
              rows={4}
              placeholder="Please list package count, dimensions, whether items require temperature control or special crating..."
              className={`${fieldCls} resize-y`}
            />
          </div>

          <label htmlFor="cb-pickup" className="flex items-center gap-2.5 text-xs text-slate-600 cursor-pointer select-none">
            <input id="cb-pickup" name="pickup" type="checkbox" className="w-3.5 h-3.5 accent-[#9B6E3B]" />
            Request commercial truck pickup anywhere within Greater Zurich / Basel / Geneva region.
          </label>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
            <button
              id="cb-submit"
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-70 text-white text-sm font-semibold px-6 py-3.5 rounded-sm transition-colors"
            >
              {status === 'submitting' ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
              {status === 'submitting' ? 'Transmitting Dossier…' : 'Transmit Consignment Dossier & Lock Space'}
            </button>
            {status === 'done' && (
              <p className="text-xs text-emerald-700">Dossier received. Our Zurich desk will contact you within 2 hours.</p>
            )}
          </div>
        </form>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-5">
          <div className="bg-white border border-slate-200/90 rounded-md shadow-sm p-5">
            <h3 className="flex items-center gap-2 font-bold text-lg text-[#0F172A] mb-3">
              <MapPin className="w-4 h-4 text-[#9B6E3B]" />
              Depots &amp; Terminals
            </h3>
            <div className="divide-y divide-slate-100">
              {depots.map((d) => (
                <div key={d.id} className="py-4 first:pt-1 last:pb-1">
                  <span className="block text-[9px] font-semibold tracking-[0.08em] uppercase text-[#9B6E3B]">{d.label}</span>
                  <p className="text-sm font-semibold text-[#0F172A] mt-1 leading-snug">{d.name}</p>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{d.detail}</p>
                  {d.note && (
                    <p className={`text-[10px] mt-1 text-[#0F172A] ${d.mono ? 'font-mono' : 'font-semibold'}`}>{d.note}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0F172A] rounded-md shadow-lg p-5 text-white">
            <span className="block text-[9px] font-semibold tracking-[0.12em] uppercase text-[#C59B6A]">Executive Direct Helpline</span>
            <a
              id="cb-helpline"
              href="tel:+2348109544821"
              className="mt-2 inline-flex items-center gap-2 text-2xl font-bold tracking-tight hover:text-[#D4A373] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C59B6A]" />
              0810 954 4821 / 0907 416 8502
            </a>
            <p className="text-[11px] text-slate-300 mt-2 leading-relaxed">
              Direct route controller line for Swiss customs documentation, commercial bills of lading, and
              diplomatic freight dispatch.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
