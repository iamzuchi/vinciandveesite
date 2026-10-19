'use client';

import React from 'react';
import Image from 'next/image';
import { BadgeCheck, ArrowRight, SlidersHorizontal } from 'lucide-react';

interface TyreHeroProps {
  onDealerPricing?: () => void;
  onSearchSize?: () => void;
}

const stats = [
  { value: '50,000+', label: 'Units Central Stock' },
  { value: 'DOT & ISO 9001', label: 'Strict Quality Verified', accent: true },
  { value: 'Same-Day', label: 'Enugu Depot Dispatch' },
  { value: '3-Year', label: 'Factory Warranty' },
];

export default function TyreHero({ onDealerPricing, onSearchSize }: TyreHeroProps) {
  return (
    <section className="relative bg-[#F7F7FC] text-slate-900 overflow-hidden py-12 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#EEF0FB] border border-[#DDE2F6] rounded-sm px-3 py-1">
              <BadgeCheck className="w-3.5 h-3.5 text-[#9B6E3B] shrink-0" />
              <span className="font-mono font-bold text-[10px] sm:text-[11px] tracking-wide uppercase text-slate-700">
                NATIONAL AUTOMOTIVE SUPPLY CHAIN // ENUGU CENTRAL DISTRIBUTION DEPOT
              </span>
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-[3.4rem] text-[#0F172A] tracking-tight leading-[1.12]">
              Direct Manufacturer-Grade Tyres for Fleets, Retailers, and Heavy Industry
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Our tyre business supplies quality products to retailers and end users at competitive prices.
              Reliable road safety, reinforced tread compounds, and nationwide depot fulfillment.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 pb-6 border-b border-slate-200/80">
              <button
                id="tyre-dealer-pricing"
                onClick={onDealerPricing}
                className="bg-[#7B5229] hover:bg-[#6B4A26] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap group"
              >
                <span>Access Wholesale Dealer Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                id="tyre-search-size"
                onClick={() => {
                  if (onSearchSize) onSearchSize();
                  else document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/90 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors whitespace-nowrap"
              >
                <SlidersHorizontal className="w-4 h-4 text-slate-700" />
                <span>Search Size by Vehicle / Rim</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {stats.map((s) => (
                <div key={s.label}>
                  <span className="font-bold text-lg sm:text-xl text-[#0F172A] block tracking-tight leading-tight">{s.value}</span>
                  <span className={`text-[11px] block mt-1 leading-tight ${s.accent ? 'text-[#9B6E3B] font-medium' : 'text-slate-500'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: warehouse image */}
          <div className="lg:col-span-5">
            <div className="bg-white p-2 rounded-md shadow-xl border border-slate-200/80">
              <div className="relative h-72 sm:h-[360px] rounded-sm overflow-hidden group">
                <Image
                  src="/images/vinci_asset_004.jpg"
                  alt="Vinci tyre racking at the Jedidiah Gardens central depot in Enugu"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-sm px-3 py-2.5 flex items-center justify-between gap-3 shadow-sm">
                  <div>
                    <span className="block text-[9px] font-semibold tracking-[0.1em] uppercase text-[#9B6E3B]">
                      Central Depot Status
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#0F172A] leading-snug">
                      Jedidiah Gardens Hub: Active Dispatch
                    </span>
                  </div>
                  <span className="shrink-0 text-[10px] font-semibold text-slate-700 bg-[#E9ECFA] px-2.5 py-1.5 rounded-sm text-center leading-tight">
                    Daily Container
                    <br />
                    Intake
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
