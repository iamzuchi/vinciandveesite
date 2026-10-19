'use client';

import React from 'react';
import { 
  FileText, 
  Network, 
  Radio, 
  ShieldCheck, 
  Wrench
} from 'lucide-react';

interface TelecomHeroProps {
  onOpenSurvey?: () => void;
  onExploreCorridors?: () => void;
}

export default function TelecomHero({ onOpenSurvey, onExploreCorridors }: TelecomHeroProps) {
  return (
    <section 
      className="relative bg-[#FAFBFD] text-slate-900 overflow-hidden py-12 lg:py-20 border-b border-slate-200"
      style={{
        backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-2 bg-[#F1F4FA] border border-slate-200/90 rounded-sm px-3 py-1 text-xs text-slate-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#9B6E3B] flex-shrink-0" />
              <span className="font-mono font-bold text-[10px] sm:text-xs tracking-wide uppercase text-slate-700">
                CRITICAL INFRASTRUCTURE DIVISION // EASTERN NIGERIA &amp; NATIONAL BACKBONE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.1]">
              Carrier-Grade Fibre Optic Infrastructure &amp; Metro Transmission Networks
            </h1>

            {/* Mission Quote Block */}
            <div className="border-l-4 border-[#9B6E3B] pl-4 py-1">
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                We provide end-to-end fibre deployment services, ensuring reliable high-speed connectivity for residential, commercial, and enterprise clients.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <button
                onClick={() => {
                  if (onOpenSurvey) {
                    onOpenSurvey();
                  } else {
                    const contactSec = document.getElementById('contact');
                    if (contactSec) {
                      contactSec.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center space-x-2 shadow-sm transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-[#C59B6A]" />
                <span>Request Network Survey &amp; Quotation</span>
              </button>

              <button
                onClick={() => {
                  if (onExploreCorridors) {
                    onExploreCorridors();
                  } else {
                    const sec = document.getElementById('corridors');
                    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/90 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center space-x-2 shadow-sm transition-colors whitespace-nowrap"
              >
                <Network className="w-4 h-4 text-[#9B6E3B]" />
                <span>Explore Metro Duct Corridors</span>
              </button>
            </div>

            {/* Bottom 4 Stat Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
              
              <div className="bg-white p-4 rounded-sm border border-slate-200/80 shadow-xs">
                <span className="font-bold text-xl sm:text-2xl text-[#0F172A] block tracking-tight">
                  100Gbps+
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1 leading-tight">
                  DWDM Core Capacity
                </span>
              </div>

              <div className="bg-white p-4 rounded-sm border border-slate-200/80 shadow-xs">
                <span className="font-bold text-xl sm:text-2xl text-[#0F172A] block tracking-tight">
                  &lt;4ms
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1 leading-tight">
                  Regional Latency SLA
                </span>
              </div>

              <div className="bg-white p-4 rounded-sm border border-slate-200/80 shadow-xs">
                <span className="font-bold text-xl sm:text-2xl text-[#0F172A] block tracking-tight">
                  99.98%
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1 leading-tight">
                  Carrier Availability
                </span>
              </div>

              <div className="bg-white p-4 rounded-sm border border-slate-200/80 shadow-xs">
                <span className="font-bold text-xl sm:text-2xl text-[#0F172A] block tracking-tight">
                  2-Hour
                </span>
                <span className="text-[11px] text-slate-500 font-medium block mt-1 leading-tight">
                  Rapid Response MTTR
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Telemetry Dashboard Widget */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B132B] p-5 sm:p-6 rounded-sm border border-slate-800 shadow-2xl text-white">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center space-x-2">
                  <Radio className="w-4 h-4 text-[#F59E0B] animate-pulse" />
                  <span className="font-bold text-xs sm:text-sm text-white">
                    Enugu &amp; Centenary Ring Status
                  </span>
                </div>

                <span className="bg-[#382618]/80 text-[#D4A373] text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-xs uppercase border border-[#523924]/80">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Network Visual Diagram Box */}
              <div className="bg-[#070D1E] p-4 sm:p-5 rounded-sm border border-slate-800/80 my-4 space-y-4 relative overflow-hidden">
                
                {/* Node info row */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      CENTENARY CORRIDOR
                    </span>
                    <span className="text-xs font-bold text-white block mt-0.5">
                      Ring Node 01 - Plot 80 Jedidiah HQ
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      CORE ATTENUATION
                    </span>
                    <span className="text-xs font-bold text-[#F59E0B] block mt-0.5 font-mono">
                      0.19 dB/km
                    </span>
                  </div>
                </div>

                {/* Simulated Fiber Route Visual */}
                <div className="bg-[#0B142D] border border-slate-800 rounded-sm p-3.5 space-y-2 relative">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">Primary Backbone</span>
                    <span className="text-[#F59E0B] font-bold font-mono">48-Core Ribbon</span>
                  </div>

                  {/* Visual Node line graph */}
                  <div className="relative py-2 my-1">
                    <div className="h-[2px] w-full bg-slate-800 relative">
                      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#F59E0B] via-[#D4A373] to-[#F59E0B] opacity-80" />
                    </div>

                    {/* Nodes */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F59E0B] border-2 border-[#070D1E] shadow-sm" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#D4A373] border-2 border-[#070D1E] shadow-sm" />
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F59E0B] border-2 border-[#070D1E] shadow-sm" />
                  </div>

                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-1">
                    <span>Active Wavelength: 1550nm DWDM</span>
                    <span>Load: 38.4 Gbps</span>
                  </div>
                </div>

                {/* Sub-metrics */}
                <div className="flex justify-between items-end pt-1">
                  <div>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      ROUTE DENSITY
                    </span>
                    <span className="text-xs font-bold text-white block mt-0.5">
                      Heavy Armoured Sub-Duct
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                      OTDR LOOPBACK
                    </span>
                    <span className="text-xs font-bold text-[#F59E0B] block mt-0.5 font-mono">
                      Continuous Pass
                    </span>
                  </div>
                </div>

              </div>

              {/* Bottom Certifications Row */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-1 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
                  <span className="font-semibold text-slate-200">NCC Licensed Deployment</span>
                </div>

                <div className="flex items-center space-x-1.5">
                  <Wrench className="w-4 h-4 text-[#D4A373]" />
                  <span className="font-semibold text-slate-200">Fujikura Fusion Precision</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
