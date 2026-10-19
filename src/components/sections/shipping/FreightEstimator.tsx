'use client';

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

type Mode = 'lcl' | 'fcl' | 'air';

const origins = [
  { id: 'zrh', label: 'Zurich Cargo Hub (ZRH)', factor: 1 },
  { id: 'bsl', label: 'Basel Rhine Terminal', factor: 0.95 },
  { id: 'gva', label: 'Geneva Cargo Hub (GVA)', factor: 1.05 },
];

const destinations = [
  { id: 'enugu', label: 'Enugu (Jedidiah Bonded Inland Terminal)', terminal: 1600 },
  { id: 'apapa', label: 'Lagos Apapa Port', terminal: 950 },
  { id: 'tincan', label: 'Lagos Tin Can Island Port', terminal: 950 },
];

const modes: { id: Mode; label: string; transit: string }[] = [
  { id: 'lcl', label: 'Ocean LCL (m³)', transit: '12 - 16 Calendar Days (Multimodal)' },
  { id: 'fcl', label: 'Ocean 20/40ft FCL', transit: '18 - 22 Calendar Days (Ocean)' },
  { id: 'air', label: 'Air Express (kg)', transit: '2 - 4 Business Days (Air Express)' },
];

const CHF_TO_NGN = 1730;

interface Inputs {
  origin: string;
  destination: string;
  mode: Mode;
  weight: number;
  volume: number;
  value: number;
}

function computeQuote(i: Inputs) {
  const origin = origins.find((o) => o.id === i.origin) ?? origins[0];
  const dest = destinations.find((d) => d.id === i.destination) ?? destinations[0];

  let lineHaul: number;
  if (i.mode === 'lcl') {
    lineHaul = 1850 + 1500 * Math.max(i.volume, i.weight / 1000);
  } else if (i.mode === 'fcl') {
    lineHaul = i.volume > 33 ? 13200 : 7800; // 40ft above 33 m³
  } else {
    const chargeable = Math.max(i.weight, i.volume * 167);
    lineHaul = 600 + 9.5 * chargeable;
  }
  lineHaul = Math.round(lineHaul * origin.factor);

  const docs = Math.round(1050 + 0.02 * i.value);
  const terminal = dest.terminal;
  const total = lineHaul + docs + terminal;
  const ngn = Math.round((total * CHF_TO_NGN) / 10000) * 10000;
  const transit = modes.find((m) => m.id === i.mode)!.transit;

  return { lineHaul, docs, terminal, total, ngn, transit };
}

const chf = (n: number) => `${n.toLocaleString('en-US')} CHF`;

const labelCls = 'block text-[10px] font-semibold tracking-[0.08em] text-slate-700 uppercase mb-1.5';
const fieldCls =
  'w-full bg-[#F7F8FD] border border-slate-200 rounded-sm px-3 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#9B6E3B] focus:ring-2 focus:ring-[#9B6E3B]/15 transition';

interface FreightEstimatorProps {
  onLockRate?: () => void;
}

export default function FreightEstimator({ onLockRate }: FreightEstimatorProps) {
  const [inputs, setInputs] = useState<Inputs>({
    origin: 'zrh',
    destination: 'enugu',
    mode: 'lcl',
    weight: 450,
    volume: 2.5,
    value: 35000,
  });
  const [quote, setQuote] = useState(() => computeQuote(inputs));
  const [loading, setLoading] = useState(false);

  const set = <K extends keyof Inputs>(k: K, v: Inputs[K]) => setInputs((p) => ({ ...p, [k]: v }));

  const recalc = () => {
    setLoading(true);
    setTimeout(() => {
      setQuote(computeQuote(inputs));
      setLoading(false);
    }, 600);
  };

  const breakdown = [
    { label: 'Swiss Air/Multimodal Line-Haul:', value: quote.lineHaul },
    { label: 'Documentation, EUR.1 & Security:', value: quote.docs },
    { label: 'Terminal Handling & Bonded Drayage:', value: quote.terminal },
  ];

  return (
    <section id="freight-estimator" className="py-16 sm:py-20 lg:py-24 bg-[#F7F7FC] border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9B6E3B] uppercase block">
            DYNAMIC FREIGHT PRICING
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Instant Tariff &amp; Freight Estimator
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Calculate accurate landed port or door estimates including freight, maritime insurance, terminal
            handling charges, and Nigerian Customs tariffs.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-md shadow-sm p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fe-origin" className={labelCls}>Origin Port (Switzerland)</label>
                <select id="fe-origin" value={inputs.origin} onChange={(e) => set('origin', e.target.value)} className={fieldCls}>
                  {origins.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="fe-destination" className={labelCls}>Destination Terminal (Nigeria)</label>
                <select id="fe-destination" value={inputs.destination} onChange={(e) => set('destination', e.target.value)} className={fieldCls}>
                  {destinations.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
                </select>
              </div>
            </div>

            <div>
              <span className={labelCls}>Shipping Mode</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="radiogroup">
                {modes.map((m) => {
                  const active = inputs.mode === m.id;
                  return (
                    <button
                      key={m.id}
                      id={`fe-mode-${m.id}`}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => set('mode', m.id)}
                      className={`py-2.5 px-3 text-sm rounded-sm border transition-colors ${
                        active
                          ? 'bg-[#F3EEE8] border-[#9B6E3B] text-[#0F172A] font-medium'
                          : 'bg-[#F7F8FD] border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="fe-weight" className={labelCls}>Cargo Weight (kg)</label>
                <input id="fe-weight" type="number" min={0} value={inputs.weight} onChange={(e) => set('weight', Number(e.target.value))} className={fieldCls} />
              </div>
              <div>
                <label htmlFor="fe-volume" className={labelCls}>Volume (CBM / m³)</label>
                <input id="fe-volume" type="number" min={0} step={0.1} value={inputs.volume} onChange={(e) => set('volume', Number(e.target.value))} className={fieldCls} />
              </div>
              <div>
                <label htmlFor="fe-value" className={labelCls}>Declared Value (CHF)</label>
                <input id="fe-value" type="number" min={0} value={inputs.value} onChange={(e) => set('value', Number(e.target.value))} className={fieldCls} />
              </div>
            </div>

            <button
              id="fe-recalculate"
              type="button"
              onClick={recalc}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-80 text-white text-sm font-semibold py-3.5 rounded-sm transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Recalculate Tariffs &amp; Routing Costs
            </button>
          </div>

          {/* Quote panel */}
          <div className="lg:col-span-5">
            <div className={`h-full bg-[#F1F2FB] border border-[#E2E6F6] rounded-sm p-5 flex flex-col transition-opacity ${loading ? 'opacity-60' : ''}`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold tracking-[0.08em] text-slate-700 uppercase">Estimated All-Inclusive Quote</span>
                <span className="text-[9px] font-semibold tracking-wider uppercase bg-[#E8E1D9] text-[#6B4A26] px-2 py-0.5 rounded-xs">Live Rate</span>
              </div>

              <div className="pt-6 pb-4 border-b border-slate-200/80">
                <p className="font-bold text-3xl text-[#0F172A] tracking-tight">{chf(quote.total)}</p>
                <p className="text-base font-semibold text-[#9B6E3B] mt-1">≈ ₦{quote.ngn.toLocaleString('en-US')} NGN</p>
                <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
                  *Subject to standard customs clearance inspection fees &amp; statutory duties.
                </p>
              </div>

              <dl className="py-3 space-y-2.5 border-b border-slate-200/80">
                {breakdown.map((b) => (
                  <div key={b.label} className="flex justify-between text-xs">
                    <dt className="text-slate-600">{b.label}</dt>
                    <dd className="font-semibold text-[#0F172A]">{chf(b.value)}</dd>
                  </div>
                ))}
              </dl>

              <div className="py-3 grid grid-cols-2 gap-4 text-xs border-b border-slate-200/80">
                <span className="font-semibold text-slate-700">Guaranteed Transit Window:</span>
                <span className="font-semibold text-[#9B6E3B]">{quote.transit}</span>
              </div>

              <button
                id="fe-lock-rate"
                type="button"
                onClick={onLockRate}
                className="mt-auto w-full bg-[#7B5229] hover:bg-[#6B4A26] text-white text-sm font-semibold py-3 rounded-sm transition-colors mt-4"
              >
                Lock In This Rate &amp; Reserve Space
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
