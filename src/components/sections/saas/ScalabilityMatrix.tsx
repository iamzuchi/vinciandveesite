'use client';

import React from 'react';
import { 
  ArrowLeftRight, 
  Rocket, 
  Building2, 
  Zap, 
  Smartphone, 
  CreditCard, 
  Puzzle, 
  Network, 
  ShieldCheck, 
  GitMerge, 
  Headphones 
} from 'lucide-react';

interface ScalabilityMatrixProps {
  onSmallBusinessClick?: () => void;
  onEnterpriseClick?: () => void;
}

export default function ScalabilityMatrix({
  onSmallBusinessClick,
  onEnterpriseClick,
}: ScalabilityMatrixProps) {
  return (
    <section id="scalability-matrix" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2 font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase">
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>SCALABILITY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
            Engineered for Your Operational<br className="hidden sm:inline" /> Dimension
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether digitizing a single high-turnover regional store or interconnecting a conglomerate
            holding with 5,000+ staff members.
          </p>
        </div>

        {/* 2-Card Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Card A: Small & Growing Businesses */}
          <div className="bg-white rounded-lg p-7 sm:p-9 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6 gap-3">
                <div>
                  <span className="text-[10.5px] font-mono font-bold tracking-wider text-[#8C5324] uppercase">
                    AGILE COMMERCIAL SCALE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-1 tracking-tight">
                    For Growing &amp; Small Businesses
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-md bg-[#EEF2FC] border border-[#DCE4F8] flex items-center justify-center text-[#0F172A] shrink-0">
                  <Rocket className="w-5 h-5 text-[#8C5324]" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                Eliminate paper ledgers, stock theft, and manual spreadsheets in under 24 hours without
                hiring an IT department.
              </p>

              {/* 4 Feature Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#8C5324] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                      Fast 24-Hour Deployment
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Immediate pre-configured cloud database instance ready for inventory imports.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-[#8C5324] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                      Lightweight Mobile-First Interface
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Works seamlessly on Android POS terminals, tablets, and smartphones over 3G/4G.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-[#8C5324] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                      Predictable Naira Billing
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Zero FX exposure. Fixed monthly domestic billing via direct corporate transfer.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Puzzle className="w-5 h-5 text-[#8C5324] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0F172A]">
                      Plug-and-Play Modules
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                      Activate inventory, POS, and customer CRM switches without code configuration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2 mt-auto">
              <button
                type="button"
                onClick={onSmallBusinessClick}
                className="w-full py-3 px-6 rounded-md bg-[#EEF2FC] hover:bg-[#E2E8F8] text-[#0F172A] font-semibold text-xs sm:text-sm border border-slate-200/80 transition-colors text-center"
              >
                View Starter Tiers for Small Business
              </button>
            </div>
          </div>

          {/* Card B: Large Conglomerates & Fleets */}
          <div className="bg-[#0D1C32] text-white rounded-lg p-7 sm:p-9 border border-slate-700/60 shadow-xl flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-700/60 mb-6 gap-3">
                <div>
                  <span className="text-[10.5px] font-mono font-bold tracking-wider text-[#E8A56E] uppercase">
                    SOVEREIGN ENTERPRISE INFRASTRUCTURE
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 tracking-tight">
                    For Large Conglomerates &amp; Fleets
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-md bg-white/10 border border-white/15 flex items-center justify-center text-[#E8A56E] shrink-0">
                  <Building2 className="w-5 h-5 text-[#E8A56E]" />
                </div>
              </div>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-slate-300 leading-relaxed mb-6">
                Unified governance, cross-subsidiary auditing, and custom integrations engineered for
                multi-entity corporate structures.
              </p>

              {/* 4 Feature Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Network className="w-5 h-5 text-[#E8A56E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Multi-Subsidiary Consolidation
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      Consolidated balance sheets, automated transfer pricing, and inter-company ledger.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#E8A56E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Granular Role-Based Access Control (RBAC)
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      Cryptographic audit trails and strict department authorization parameters.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <GitMerge className="w-5 h-5 text-[#E8A56E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Tailored ERP Workflows &amp; Legacy Hooks
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      Custom engineering for industrial plants, logistics hubs, and shipping terminals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Headphones className="w-5 h-5 text-[#E8A56E] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-white">
                      Dedicated SLA Engineering Pod
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                      Direct 24/7 hotline with senior software architects and quarterly on-site audits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2 mt-auto">
              <button
                type="button"
                onClick={onEnterpriseClick}
                className="w-full py-3 px-6 rounded-md bg-[#8C5324] hover:bg-[#784319] text-white font-semibold text-xs sm:text-sm transition-colors text-center shadow-sm"
              >
                Schedule Conglomerate Architecture Briefing
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
