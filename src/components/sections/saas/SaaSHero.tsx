'use client';

import React from 'react';
import { 
  Cloud, 
  Calendar, 
  ShieldCheck, 
  Lock, 
  RefreshCw, 
  CreditCard, 
  Package, 
  Landmark, 
  TrendingUp, 
  CheckCircle2, 
  Network 
} from 'lucide-react';

interface SaaSHeroProps {
  onTrialClick?: () => void;
  onDemoClick?: () => void;
}

export default function SaaSHero({ onTrialClick, onDemoClick }: SaaSHeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-[#F8FAFC] border-b border-slate-200">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#8C5324 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-[#EEF2FB] border border-[#C6A88B]/40 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#8C5324]"></span>
            <span className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.14em] text-slate-800 uppercase">
              ENTERPRISE DIGITAL TRANSFORMATION // MULTI-TENANT CLOUD ARCHITECTURE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-[#0F172A] tracking-tight leading-[1.14]">
            Scalable Cloud Software<br className="hidden sm:inline" />
            Engineered for Small Enterprises to<br className="hidden sm:inline" />
            Conglomerates
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            As a SaaS provider, we develop scalable cloud-based software that improves operational
            efficiency and supports digital transformation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              type="button"
              onClick={onTrialClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-md font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Cloud className="w-4 h-4 text-sky-400" />
              <span>Deploy 14-Day Enterprise Trial</span>
            </button>
            <button
              type="button"
              onClick={onDemoClick}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-md font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#8C5324]" />
              <span>Schedule System Architecture Demo</span>
            </button>
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left max-w-5xl mx-auto">
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#8C5324] shrink-0" />
              <div>
                <p className="font-mono text-[10px] sm:text-[10.5px] font-bold text-slate-900 leading-tight">
                  99.99% CLOUD SLA
                </p>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Guaranteed High-Availability
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
              <Lock className="w-5 h-5 text-[#8C5324] shrink-0" />
              <div>
                <p className="font-mono text-[10px] sm:text-[10.5px] font-bold text-slate-900 leading-tight">
                  AES-256 BANK-GRADE
                </p>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  End-to-End Encryption
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
              <RefreshCw className="w-5 h-5 text-[#8C5324] shrink-0" />
              <div>
                <p className="font-mono text-[10px] sm:text-[10.5px] font-bold text-slate-900 leading-tight">
                  AUTOMATED BACKUPS
                </p>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Continuous Real-Time Sync
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/90 shadow-xs">
              <CreditCard className="w-5 h-5 text-[#8C5324] shrink-0" />
              <div>
                <p className="font-mono text-[10px] sm:text-[10.5px] font-bold text-slate-900 leading-tight">
                  LOCAL &amp; NGN READY
                </p>
                <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                  Multi-Currency Engine
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* HERO VISUAL: Executive Telemetry Console Dashboard */}
        <div className="mt-10 sm:mt-12 rounded-lg border border-slate-800 bg-[#0E1726] p-3 sm:p-5 shadow-2xl relative text-white font-sans max-w-6xl mx-auto">
          
          {/* Top Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-3 px-1 border-b border-slate-800 mb-4 gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
              </div>
              <span className="font-mono text-[11px] sm:text-xs font-semibold text-sky-300">
                Vinci Enterprise Orchestrator v4.12 — Production Console [Centenary Cloud Node]
              </span>
            </div>
            <div className="flex items-center gap-3 text-[10.5px] font-mono text-slate-400">
              <span>LATENCY: 14ms</span>
              <span className="text-[#C68A4C] font-semibold">REGION: NGN-SOUTH-EAST</span>
            </div>
          </div>

          {/* High-Density Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            
            {/* Left 8 Columns */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              
              {/* Top 3 KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                {/* KPI 1 */}
                <div className="bg-[#142036] p-3.5 rounded-md border border-slate-700/50">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      CONSOLIDATED INVENTORY
                    </span>
                    <Package className="w-4 h-4 text-[#C68A4C] shrink-0" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    482,910 <span className="text-xs font-normal text-slate-400">SKUs</span>
                  </div>
                  <p className="text-[11px] text-[#C68A4C] mt-1 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>14 Warehouses Synced</span>
                  </p>
                </div>

                {/* KPI 2 */}
                <div className="bg-[#142036] p-3.5 rounded-md border border-slate-700/50">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      MONTHLY CASH RECON
                    </span>
                    <Landmark className="w-4 h-4 text-[#C68A4C] shrink-0" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    ₦1.84B
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C68A4C]" />
                    <span>99.8% Automated Clear</span>
                  </p>
                </div>

                {/* KPI 3 */}
                <div className="bg-[#142036] p-3.5 rounded-md border border-slate-700/50">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      CONCURRENT TENANTS
                    </span>
                    <Network className="w-4 h-4 text-[#C68A4C] shrink-0" />
                  </div>
                  <div className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    1,240+
                  </div>
                  <p className="text-[11px] text-[#C68A4C] mt-1 flex items-center gap-1 font-medium">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C68A4C] animate-pulse"></span>
                    <span>High Availability Node</span>
                  </p>
                </div>

              </div>

              {/* Chart Simulation Box */}
              <div className="bg-[#142036] p-4 rounded-md border border-slate-700/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white">
                    Multi-Warehouse Inventory &amp; Telemetry Throughput
                  </h4>
                  <div className="flex items-center gap-3 text-[10.5px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#8C5324]"></span> Sweden Transit
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#2563EB]"></span> Lagos Central
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-xs bg-[#94A3B8]"></span> Enugu Hub
                    </span>
                  </div>
                </div>

                {/* Mock Bar Chart */}
                <div className="h-32 flex items-end gap-2 sm:gap-4 pt-6 border-b border-slate-700/60 pb-2">
                  {/* Time Block 1 */}
                  <div className="flex-1 flex items-end gap-1 h-full">
                    <div className="w-full bg-[#8C5324] rounded-t-xs h-[60%]"></div>
                    <div className="w-full bg-[#2563EB] rounded-t-xs h-[85%]"></div>
                    <div className="w-full bg-[#94A3B8] rounded-t-xs h-[45%]"></div>
                  </div>
                  {/* Time Block 2 */}
                  <div className="flex-1 flex items-end gap-1 h-full">
                    <div className="w-full bg-[#8C5324] rounded-t-xs h-[75%]"></div>
                    <div className="w-full bg-[#2563EB] rounded-t-xs h-[92%]"></div>
                    <div className="w-full bg-[#94A3B8] rounded-t-xs h-[60%]"></div>
                  </div>
                  {/* Time Block 3 */}
                  <div className="flex-1 flex items-end gap-1 h-full">
                    <div className="w-full bg-[#8C5324] rounded-t-xs h-[85%]"></div>
                    <div className="w-full bg-[#2563EB] rounded-t-xs h-[78%]"></div>
                    <div className="w-full bg-[#94A3B8] rounded-t-xs h-[70%]"></div>
                  </div>
                  {/* Time Block 4 */}
                  <div className="flex-1 flex items-end gap-1 h-full">
                    <div className="w-full bg-[#8C5324] rounded-t-xs h-[90%]"></div>
                    <div className="w-full bg-[#2563EB] rounded-t-xs h-[95%]"></div>
                    <div className="w-full bg-[#94A3B8] rounded-t-xs h-[88%]"></div>
                  </div>
                  {/* Time Block 5 */}
                  <div className="flex-1 flex items-end gap-1 h-full">
                    <div className="w-full bg-[#8C5324] rounded-t-xs h-[98%]"></div>
                    <div className="w-full bg-[#2563EB] rounded-t-xs h-[89%]"></div>
                    <div className="w-full bg-[#94A3B8] rounded-t-xs h-[94%]"></div>
                  </div>
                </div>

                {/* X-Axis Labels */}
                <div className="flex justify-between text-[10.5px] font-mono text-slate-400 pt-2">
                  <span>08:00 AM</span>
                  <span>11:00 AM</span>
                  <span>02:00 PM</span>
                  <span>05:00 PM</span>
                  <span className="text-emerald-400 font-semibold">LIVE ACTIVE</span>
                </div>
              </div>

            </div>

            {/* Right 4 Columns: Live Transaction Ledger */}
            <div className="lg:col-span-4 bg-[#142036] p-4 rounded-md border border-slate-700/50 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-3 pb-2 border-b border-slate-700/60">
                  <h4 className="text-xs sm:text-[13px] font-bold text-white">Live Transaction Ledger</h4>
                  <span className="px-2 py-0.5 rounded text-[9.5px] font-mono bg-[#8C5324]/20 text-[#D89558] border border-[#8C5324]/40 font-bold">
                    STREAM SECURE
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  {/* Entry 1 */}
                  <div className="p-2.5 rounded bg-[#0E1726]/80 border border-slate-700/40">
                    <div className="flex justify-between text-white font-medium">
                      <span>#PO-88219 (Enugu Store)</span>
                      <span className="text-[#C68A4C] font-bold">₦4,250,000</span>
                    </div>
                    <p className="text-[10.5px] text-slate-400 mt-1">
                      Tyre Wholesale 120 units • POS cleared
                    </p>
                  </div>

                  {/* Entry 2 */}
                  <div className="p-2.5 rounded bg-[#0E1726]/80 border border-slate-700/40">
                    <div className="flex justify-between text-white font-medium">
                      <span>#SHP-SWE-0914 (Göteborg)</span>
                      <span className="text-sky-300 font-bold">Customs Verified</span>
                    </div>
                    <p className="text-[10.5px] text-slate-400 mt-1">
                      40ft HC Container Escrow Released
                    </p>
                  </div>

                  {/* Entry 3 */}
                  <div className="p-2.5 rounded bg-[#0E1726]/80 border border-slate-700/40">
                    <div className="flex justify-between text-white font-medium">
                      <span>#FBR-LOC-441 (Telecom)</span>
                      <span className="text-[#C68A4C] font-bold">Active SLA</span>
                    </div>
                    <p className="text-[10.5px] text-slate-400 mt-1">
                      Fibre Node Handshake • 10 Gbps
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Status */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>Database Integrity: 100% Verified</span>
                <Cloud className="w-4 h-4 text-[#C68A4C]" />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
