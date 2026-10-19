'use client';

import React, { useMemo, useState } from 'react';
import { Search, ClipboardCheck, Headset } from 'lucide-react';

const widths = ['175 mm', '195 mm', '205 mm', '215 mm', '225 mm', '265 mm', '315 mm'];
const ratios = ['45 Series (Performance)', '55 Series (Touring/Sedan)', '65 Series (SUV/4x4)', '70 Series (All-Terrain)', '80 Series (Truck/Bus)'];
const rims = ['15" Compact', '16" Utility', '17" SUV', '18" Premium', '22.5" Commercial'];
const classes = ['PCR (Passenger Radials)', 'SUV / 4x4 All-Terrain', 'TBR (Truck & Bus Radials)', 'OTR (Industrial & Heavy)'];

// Deterministic mock stock lookup — replace with real inventory API.
const BASE_STOCK = 3420;
function lookupStock(w: number, r: number, d: number, c: number) {
  const offset = (w - 3) * 310 + (r - 1) * 240 + (d - 1) * 180 + c * 520;
  const units = BASE_STOCK - Math.abs(offset);
  return Math.max(0, units);
}

const labelCls = 'block text-[10px] font-semibold tracking-[0.08em] text-slate-700 uppercase mb-1.5';
const fieldCls =
  'w-full bg-white border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#9B6E3B] focus:ring-2 focus:ring-[#9B6E3B]/15 transition';

interface InventoryLocatorProps {
  onReserve?: () => void;
}

export default function InventoryLocator({ onReserve }: InventoryLocatorProps) {
  const [width, setWidth] = useState(3);
  const [ratio, setRatio] = useState(1);
  const [rim, setRim] = useState(1);
  const [cls, setCls] = useState(0);

  const units = useMemo(() => lookupStock(width, ratio, rim, cls), [width, ratio, rim, cls]);
  const inStock = units > 0;

  const selects = [
    { id: 'width', label: 'Tyre Width (mm)', options: widths, value: width, set: setWidth },
    { id: 'ratio', label: 'Aspect Ratio / Profile', options: ratios, value: ratio, set: setRatio },
    { id: 'rim', label: 'Rim Diameter (Inches)', options: rims, value: rim, set: setRim },
    { id: 'class', label: 'Application Class', options: classes, value: cls, set: setCls },
  ];

  return (
    <section id="inventory-locator" className="py-12 sm:py-16 bg-[#F1F1FB] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-md shadow-sm p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div className="space-y-2">
              <span className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-[0.12em] text-[#9B6E3B] uppercase">
                <Search className="w-3 h-3" />
                Rapid Wholesale Inventory Locator
              </span>
              <h2 className="font-bold text-2xl sm:text-3xl text-[#0F172A] tracking-tight">
                Interactive Fitment &amp; Casing Search
              </h2>
            </div>
            <p className="text-xs text-[#6B4A26] leading-relaxed max-w-xs">
              Query real-time pallet allocations across our Enugu depot and bonded coastal terminals.
            </p>
          </div>

          {/* Selects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-slate-100">
            {selects.map((s) => (
              <div key={s.id}>
                <label htmlFor={`locator-${s.id}`} className={labelCls}>{s.label}</label>
                <select
                  id={`locator-${s.id}`}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  className={fieldCls}
                >
                  {s.options.map((o, i) => <option key={o} value={i}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>

          {/* Result row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-5">
            <p className="flex items-center gap-2.5 text-sm text-slate-600" aria-live="polite">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${inStock ? 'bg-[#7B5229] animate-pulse' : 'bg-slate-300'}`} />
              {inStock ? (
                <span>
                  Matched In-Stock: <strong className="text-[#0F172A]">{units.toLocaleString('en-US')} units</strong> ready for
                  immediate consignment
                </span>
              ) : (
                <span>No pallet match at present. Our desk can source this size within 14 days.</span>
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                id="locator-reserve"
                type="button"
                onClick={onReserve}
                className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-sm font-semibold px-5 py-3 rounded-sm transition-colors"
              >
                <ClipboardCheck className="w-4 h-4" />
                Reserve Stock Batch
              </button>
              <a
                id="locator-consult"
                href="tel:+2348109544821"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-300/90 text-slate-800 text-sm font-semibold px-5 py-3 rounded-sm transition-colors"
              >
                <Headset className="w-4 h-4 text-[#9B6E3B]" />
                Consult Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
