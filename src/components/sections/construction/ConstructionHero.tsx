'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Calculator, 
  LayoutGrid, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

interface ConstructionHeroProps {
  onEstimateCapital?: () => void;
  onExplorePortfolio?: () => void;
}

export default function ConstructionHero({
  onEstimateCapital,
  onExplorePortfolio,
}: ConstructionHeroProps) {
  return (
    <section className="relative bg-[#0D1C32] text-white border-b border-slate-700/60 overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24">
      {/* Architectural Radial & Linear Gradient Overlays */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(179, 125, 78, 0.18), transparent 50%)',
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(13, 28, 50, 0.85) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb & Sector Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="font-mono text-[10.5px] font-bold px-2.5 py-1 bg-[#8C5324]/20 text-[#E8A56E] border border-[#8C5324]/40 rounded uppercase tracking-wider">
            CORPORATE CIVIL &amp; INTERIORS
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-500"></span>
          <span className="font-mono text-xs text-slate-300 tracking-wide">
            Plot 80, Centenary City, Enugu
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Executive Framing & Mission Statement */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-white leading-[1.08] mb-6">
              Precision Civil Execution. <br />
              <span className="text-[#E8A56E]">Sovereign Architecture.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mb-8 leading-relaxed">
              &ldquo;In construction, we execute residential and commercial projects with a focus on quality,
              safety, and timely delivery. Our operations are driven by professionalism, innovation, and
              customer satisfaction.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={onEstimateCapital}
                className="bg-[#8C5324] hover:bg-[#784319] text-white px-6 py-3 rounded-md font-semibold text-xs sm:text-sm tracking-wider transition-all duration-150 inline-flex items-center gap-2 shadow-sm"
              >
                <span>ESTIMATE PROJECT CAPITAL</span>
                <Calculator className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExplorePortfolio}
                className="border border-slate-600/80 hover:border-[#8C5324] text-slate-100 hover:text-white px-6 py-3 rounded-md font-semibold text-xs sm:text-sm tracking-wider transition-all duration-150 inline-flex items-center gap-2"
              >
                <span>EXPLORE CENTENARY CITY PORTFOLIO</span>
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Corporate Motto Ribbon */}
            <div className="pt-6 border-t border-slate-700/60 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#E8A56E] shrink-0" />
              <p className="text-xs sm:text-sm font-medium text-[#E8A56E] tracking-wide">
                Motto: Achieving Dreams by making Connection.
              </p>
            </div>
          </div>

          {/* Right Column: Institutional Image Stage & Metric Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#0D1C32]/80 p-2 rounded-lg border border-slate-700/60 shadow-2xl">
              <div className="relative h-[340px] sm:h-[380px] w-full rounded-md overflow-hidden bg-slate-900">
                <Image
                  src="/images/vinci_asset_011.jpg"
                  alt="Modern architectural monolith office and luxury residential high-rise in Centenary City, Enugu"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1C32] via-[#0D1C32]/25 to-transparent opacity-95"></div>
                
                {/* Overlay Card at Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-[#E8A56E] tracking-wider uppercase block">
                        FEATURED DEVELOPMENT
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                        Jedidiah Gardens Sovereign Quad
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-200 bg-[#0D1C32]/95 px-3 py-1 rounded border border-[#8C5324]/40 shrink-0">
                      Phase IV Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Executive Quantitative Pillars Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700/60">
          
          {/* Pillar 1 */}
          <div className="bg-white/[0.04] p-6 rounded-lg border border-slate-700/60 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10.5px] font-bold text-[#E8A56E] uppercase">
                TRACK RECORD
              </span>
              <Building2 className="w-5 h-5 text-[#E8A56E]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              45+ Landmark Deliveries
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Multi-hectare civil developments across Enugu Centenary City &amp; Regional Corridors.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/[0.04] p-6 rounded-lg border border-slate-700/60 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10.5px] font-bold text-[#E8A56E] uppercase">
                GOVERNANCE &amp; HSE
              </span>
              <ShieldCheck className="w-5 h-5 text-[#E8A56E]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Zero Safety Incident SLA
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              ISO 45001 compliance mandate on heavy construction and subterranean utilities.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white/[0.04] p-6 rounded-lg border border-slate-700/60 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10.5px] font-bold text-[#E8A56E] uppercase">
                PERFORMANCE INTEGRITY
              </span>
              <Clock className="w-5 h-5 text-[#E8A56E]" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              100% On-Schedule Track
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Gantt milestone accountability verified with institutional client escrow systems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
