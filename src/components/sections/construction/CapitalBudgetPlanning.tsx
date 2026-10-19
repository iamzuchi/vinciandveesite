'use client';

import React, { useState } from 'react';
import { 
  Receipt, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export type ScopeType = 'residential' | 'commercial' | 'interiors' | 'civil';
export type FinishTier = 'executive' | 'bespoke';

interface CapitalBudgetPlanningProps {
  onLockEstimate?: (estimateDetails: {
    scope: string;
    sqm: number;
    finishTier: string;
    location: string;
    inspectionDate: string;
    indicativeBudget: string;
    timeline: string;
  }) => void;
}

export default function CapitalBudgetPlanning({ onLockEstimate }: CapitalBudgetPlanningProps) {
  const [scope, setScope] = useState<ScopeType>('residential');
  const [sqm, setSqm] = useState<number>(450);
  const [finishTier, setFinishTier] = useState<FinishTier>('executive');
  const [inspectionDate, setInspectionDate] = useState<string>('2025-04-15');
  const [location, setLocation] = useState<string>('Jedidiah Gardens, Centenary City Enugu');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Base pricing calculation per m2 (in NGN)
  // At default 450 m2, residential + executive = exactly ₦ 157,500,000 (350,000 / m2)
  const baseRates: Record<ScopeType, number> = {
    residential: 350000,
    commercial: 420000,
    interiors: 260000,
    civil: 290000,
  };

  const finishMultipliers: Record<FinishTier, number> = {
    executive: 1.0,
    bespoke: 1.45,
  };

  const calculatedTotal = sqm * baseRates[scope] * finishMultipliers[finishTier];
  const formattedBudget = '₦ ' + Math.round(calculatedTotal).toLocaleString('en-US');

  // Dynamic timeline projection
  const getTimeline = (area: number): string => {
    if (area <= 300) return '4 - 6 Months Delivery';
    if (area <= 750) return '7 - 9 Months Delivery';
    if (area <= 1800) return '10 - 14 Months Delivery';
    return '15 - 20 Months Delivery';
  };

  const timeline = getTimeline(sqm);

  const scopeLabels: Record<ScopeType, { title: string; subtitle: string }> = {
    residential: {
      title: 'Residential Luxury',
      subtitle: 'Villas & Duplex Complexes',
    },
    commercial: {
      title: 'Commercial Complex',
      subtitle: 'Offices & Data Centers',
    },
    interiors: {
      title: 'Turnkey Interiors',
      subtitle: 'Acoustic, Millwork, Tiles',
    },
    civil: {
      title: 'Civil Ducting & Roads',
      subtitle: 'Fibre Sub-Surface Trenches',
    },
  };

  const handleLockEstimate = () => {
    setSubmitted(true);
    if (onLockEstimate) {
      onLockEstimate({
        scope: scopeLabels[scope].title,
        sqm,
        finishTier: finishTier === 'executive' ? 'Executive Standard' : 'Bespoke Sovereign Luxury',
        location,
        inspectionDate,
        indicativeBudget: formattedBudget,
        timeline,
      });
    }
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-[#F2F4FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Outer Container Card */}
        <div className="bg-white rounded-lg border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-sm">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-10">
            <span className="block font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase mb-2">
              CAPITAL BUDGET PLANNING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight">
              Project Quotation &amp; Consultation Estimator
            </h2>
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-3">
              Configure baseline parameters for residential, commercial, or turnkey interior works. Group engineering directors review model calculations prior to on-site surveying.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Configurator Form (7 Columns) */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* 1. SELECT STRUCTURAL SCOPE */}
              <div>
                <label className="block font-mono text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  1. SELECT STRUCTURAL SCOPE
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(Object.keys(scopeLabels) as ScopeType[]).map((scopeKey) => {
                    const isSelected = scope === scopeKey;
                    const item = scopeLabels[scopeKey];
                    return (
                      <button
                        key={scopeKey}
                        type="button"
                        onClick={() => {
                          setScope(scopeKey);
                          setSubmitted(false);
                        }}
                        className={`text-left p-3.5 rounded-md border transition-all duration-150 flex items-center gap-3.5 cursor-pointer ${
                          isSelected
                            ? 'border-[#8C5324] bg-[#FAF6F2] shadow-xs'
                            : 'border-slate-200/90 bg-white hover:border-slate-300'
                        }`}
                      >
                        {/* Custom Radio Circle */}
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'border-[#8C5324] bg-[#8C5324]'
                              : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                        </div>
                        <div>
                          <span className="block font-bold text-sm text-[#0F172A]">
                            {item.title}
                          </span>
                          <span className="block text-xs text-slate-500 mt-0.5">
                            {item.subtitle}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. GROSS FLOOR AREA / FOOTPRINT */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-mono text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
                    2. GROSS FLOOR AREA / FOOTPRINT
                  </label>
                  <span className="font-mono text-sm sm:text-base text-[#8C5324] font-bold">
                    {sqm.toLocaleString()} m²
                  </span>
                </div>
                
                {/* Range Slider */}
                <input
                  type="range"
                  min="150"
                  max="3000"
                  step="50"
                  value={sqm}
                  onChange={(e) => {
                    setSqm(Number(e.target.value));
                    setSubmitted(false);
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#8C5324]"
                />
                
                {/* Milestone Labels */}
                <div className="flex justify-between font-mono text-[11px] sm:text-xs text-slate-500 mt-1.5">
                  <span>150 m² (Executive Residence)</span>
                  <span>1,500 m² (Mid-Rise)</span>
                  <span>3,000+ m² (Campus)</span>
                </div>
              </div>

              {/* 3. FINISH SPECIFICATION TIER */}
              <div>
                <label className="block font-mono text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  3. FINISH SPECIFICATION TIER
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Executive Standard */}
                  <button
                    type="button"
                    onClick={() => {
                      setFinishTier('executive');
                      setSubmitted(false);
                    }}
                    className={`text-left p-3.5 rounded-md border transition-all duration-150 flex items-center gap-3.5 cursor-pointer ${
                      finishTier === 'executive'
                        ? 'border-[#8C5324] bg-[#FAF6F2] shadow-xs'
                        : 'border-slate-200/90 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        finishTier === 'executive'
                          ? 'border-[#8C5324] bg-[#8C5324]'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {finishTier === 'executive' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-[#0F172A]">
                        Executive Standard
                      </span>
                      <span className="block text-xs text-slate-500 mt-0.5">
                        Granite, BS spec concrete
                      </span>
                    </div>
                  </button>

                  {/* Bespoke Sovereign Luxury */}
                  <button
                    type="button"
                    onClick={() => {
                      setFinishTier('bespoke');
                      setSubmitted(false);
                    }}
                    className={`text-left p-3.5 rounded-md border transition-all duration-150 flex items-center gap-3.5 cursor-pointer ${
                      finishTier === 'bespoke'
                        ? 'border-[#8C5324] bg-[#FAF6F2] shadow-xs'
                        : 'border-slate-200/90 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        finishTier === 'bespoke'
                          ? 'border-[#8C5324] bg-[#8C5324]'
                          : 'border-slate-300 bg-white'
                      }`}
                    >
                      {finishTier === 'bespoke' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <div>
                      <span className="block font-bold text-sm text-[#0F172A]">
                        Bespoke Sovereign Luxury
                      </span>
                      <span className="block text-xs text-slate-500 mt-0.5">
                        Italian porcelain &amp; smart BMS
                      </span>
                    </div>
                  </button>

                </div>
              </div>

              {/* Consultation Booking & Location Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block font-mono text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    PREFERRED SITE INSPECTION DATE
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={inspectionDate}
                      onChange={(e) => setInspectionDate(e.target.value)}
                      className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                    DEVELOPMENT LOCATION
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white border border-slate-200/90 rounded-md px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 font-medium focus:outline-none focus:border-[#8C5324] focus:ring-1 focus:ring-[#8C5324] transition-all"
                  >
                    <option value="Jedidiah Gardens, Centenary City Enugu">Jedidiah Gardens, Centenary City Enugu</option>
                    <option value="Independence Layout, Enugu">Independence Layout, Enugu</option>
                    <option value="Golf Estate Phase 2, Enugu">Golf Estate Phase 2, Enugu</option>
                    <option value="Other South-East Urban Core">Other South-East Urban Core</option>
                  </select>
                </div>
              </div>

            </div>

            {/* Right Summary Card (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-gradient-to-b from-[#251A13] via-[#1B130E] to-[#140D09] text-white rounded-lg border border-[#8C5324]/40 p-6 sm:p-7 flex flex-col justify-between h-full shadow-xl">
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <span className="font-mono text-xs font-bold text-[#E8A56E] tracking-wider uppercase">
                      INSTITUTIONAL ESTIMATE SUMMARY
                    </span>
                    <Receipt className="w-5 h-5 text-[#E8A56E]/80 shrink-0" />
                  </div>

                  {/* Specification Key-Value Rows */}
                  <div className="space-y-4 mb-7 text-xs sm:text-[13px]">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Estimated Timeline:</span>
                      <span className="font-semibold text-white tracking-wide">
                        {timeline}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Structural HSE Class:</span>
                      <span className="font-semibold text-white tracking-wide">
                        Tier 1 Sovereign SLA
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Sub-surface Telecom Ducting:</span>
                      <span className="font-semibold text-[#E8A56E] tracking-wide">
                        Included (Vinci Synergy)
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-stone-400">Material Warranty Period:</span>
                      <span className="font-semibold text-white tracking-wide">
                        15 Years Structural Guarantee
                      </span>
                    </div>
                  </div>

                  {/* Indicative Budget Box */}
                  <div className="p-4 sm:p-5 bg-[#2E1D13]/80 rounded-md border border-[#8C5324]/30 mb-7">
                    <span className="font-mono text-[10.5px] sm:text-[11px] font-bold text-[#E8A56E] tracking-wider block uppercase mb-1">
                      INDICATIVE BUDGET ENVELOPE (NGN)
                    </span>
                    <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {formattedBudget}
                    </div>
                    <span className="text-xs text-stone-300 leading-relaxed block mt-1.5">
                      Reflects full civil execution, mechanical &amp; electrical integration.
                    </span>
                  </div>
                </div>

                {/* Bottom CTA Button & Status Feedback */}
                <div>
                  <button
                    type="button"
                    onClick={handleLockEstimate}
                    className="w-full bg-[#8C5324] hover:bg-[#784419] active:bg-[#663814] text-white py-3.5 px-4 rounded-md font-mono text-xs font-bold tracking-wider uppercase transition-colors duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <span>LOCK ESTIMATE &amp; DISPATCH SURVEY ENGINEER</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>

                  {submitted && (
                    <div className="mt-3 p-3 bg-[#8C5324]/15 border border-[#8C5324]/40 rounded-md flex items-start gap-2.5 text-xs text-[#E8A56E]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#E8A56E] mt-0.5" />
                      <p className="leading-snug">
                        Survey protocol initiated. Group Civil Liaison will contact your office within 2 hours.
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
