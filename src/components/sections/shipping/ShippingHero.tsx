'use client';

import React from 'react';
import Image from 'next/image';
import { Plane, Calculator, CalendarClock, ShieldCheck } from 'lucide-react';

interface ShippingHeroProps {
  onCalculateTariff?: () => void;
  onViewSchedule?: () => void;
}

const stats = [
  { value: '18–22', label: 'Days Sea Transit' },
  { value: '100%', label: 'Clearance Pass', gold: true },
  { value: '2x / Mo', label: 'Scheduled FCL/LCL' },
  { value: 'Zero', label: 'Demurrage Guarantee', gold: true },
];

const routeDetails = [
  { label: 'Swiss Terminal Hubs', value: 'Zurich Cargo Center (ZRH) & Basel Rhine Terminal' },
  { label: 'West Africa Entry Ports', value: 'Apapa & Tin Can Island, Lagos' },
  { label: 'Bonded Inland Hub', value: 'Jedidiah Gardens, Centenary City, Enugu', gold: true },
];

export default function ShippingHero({ onCalculateTariff, onViewSchedule }: ShippingHeroProps) {
  return (
    <section className="relative bg-[#F7F7FC] text-slate-900 overflow-hidden py-12 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F3EEE8] border border-[#E2D6C7] rounded-sm px-3 py-1">
              <Plane className="w-3.5 h-3.5 text-[#9B6E3B] shrink-0" />
              <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-wide uppercase text-[#6B4A26]">
                SWISS–AFRICA TRADE CORRIDOR // DIRECT AIR FREIGHT &amp; MULTIMODAL CONSOLIDATION
              </span>
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-[#0F172A] tracking-tight leading-[1.12]">
              Direct Swiss Freight &amp; Seamless West African Customs Clearance
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Dedicated weekly air freight and multimodal cargo consolidations bridging Zurich, Basel, and
              Geneva to Lagos Apapa, Tin Can, and nationwide bonded delivery to Enugu.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 pb-6 border-b border-slate-200/80">
              <button
                id="shipping-calc-tariff"
                onClick={onCalculateTariff}
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#C59B6A]" />
                <span>Calculate Freight Tariff</span>
              </button>
              <button
                id="shipping-view-schedule"
                onClick={() => {
                  if (onViewSchedule) onViewSchedule();
                  else document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/90 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
              >
                <CalendarClock className="w-4 h-4 text-[#9B6E3B]" />
                <span>View Vessel Departure Schedule</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#EEF0FB] border border-[#E2E6F6] rounded-sm p-4 hover:bg-white hover:shadow-sm transition-all"
                >
                  <span className={`font-bold text-xl sm:text-2xl block tracking-tight ${s.gold ? 'text-[#9B6E3B]' : 'text-[#0F172A]'}`}>{s.value}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 block mt-1 leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Route Card */}
          <div className="lg:col-span-5">
            <div className="bg-white border border-slate-200/90 border-t-4 border-t-[#9B6E3B] rounded-md shadow-lg p-4 sm:p-5">
              <div className="relative h-52 sm:h-60 rounded-sm overflow-hidden group">
                <Image
                  src="/images/vinci_asset_002.jpg"
                  alt="Container vessel docked at Port of Basel cargo terminal"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto flex items-center gap-2 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] sm:text-[11px] font-semibold px-3 py-1.5 rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse shrink-0" />
                  Port of Basel &amp; Zurich Air Cargo Hub // Active Route
                </div>
              </div>

              <dl className="divide-y divide-slate-100 mt-2">
                {routeDetails.map((d) => (
                  <div key={d.label} className="flex justify-between gap-4 py-3.5">
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 max-w-[110px] leading-snug">
                      {d.label}
                    </dt>
                    <dd className={`text-xs sm:text-sm font-semibold text-right leading-snug ${d.gold ? 'text-[#9B6E3B]' : 'text-[#0F172A]'}`}>{d.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex items-center justify-between bg-[#EEF0FB] border border-[#E2E6F6] rounded-sm px-4 py-3 mt-1">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#9B6E3B]" />
                  <span className="text-xs font-semibold text-[#0F172A]">Bonded Escrow Protection</span>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Activated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
