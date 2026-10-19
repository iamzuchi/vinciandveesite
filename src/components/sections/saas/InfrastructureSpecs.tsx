'use client';

import React from 'react';
import { Shield } from 'lucide-react';

interface GuardrailStatus {
  label: string;
  status: string;
}

const guardrails: GuardrailStatus[] = [
  { label: 'Cryptographic Ledger Signing', status: 'ENFORCED' },
  { label: 'Automated Microservice Failover', status: 'AUTONOMOUS' },
  { label: 'Dual-Region Disaster Mirroring', status: 'ACTIVE' },
  { label: 'Centenary City Ops Center Telemetry', status: 'ONLINE' },
];

export default function InfrastructureSpecs() {
  return (
    <section id="infrastructure-specs" className="py-16 sm:py-24 bg-[#F2F4FB] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Enterprise Banner Card */}
        <div className="bg-[#0B1528] text-white rounded-lg p-8 sm:p-12 lg:p-14 border border-[#8C5324]/40 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Eyebrow Pill */}
              <div>
                <span className="px-3 py-1 rounded bg-[#8C5324]/20 text-[#E8A56E] text-[10.5px] font-mono font-bold uppercase border border-[#8C5324]/40 inline-block">
                  INFRASTRUCTURE SPECIFICATION
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white tracking-tight leading-tight">
                Tier-3 Data Center Redundancy<br />
                &amp; Zero-Trust Architecture
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                We operate isolated container workloads with automated failover routing across
                geo-separated points of presence. Your corporate data remains strictly governed, sovereign,
                and resilient against local disruptions.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-5 border-t border-slate-700/60">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#E8A56E]">Tier-3</div>
                  <p className="text-xs text-slate-400 mt-0.5">Facility Redundancy (N+1)</p>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#E8A56E]">&lt; 15 min</div>
                  <p className="text-xs text-slate-400 mt-0.5">Recovery Time Objective</p>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-[#E8A56E]">ISO 27001</div>
                  <p className="text-xs text-slate-400 mt-0.5">Compliance Aligned</p>
                </div>
              </div>

            </div>

            {/* Right 5 Columns: Sovereign Guardrails Active */}
            <div className="lg:col-span-5 bg-white/5 p-6 rounded-md border border-white/10 backdrop-blur-sm">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#E8A56E]" />
                <span>Sovereign Guardrails Active</span>
              </h3>

              <div className="space-y-2.5 font-mono text-xs">
                {guardrails.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 sm:p-3 rounded bg-[#0A1628]/80 border border-white/10 text-slate-200"
                  >
                    <span className="font-sans text-xs">{item.label}</span>
                    <span className="text-[#E8A56E] font-mono text-[11px] font-bold tracking-wider shrink-0 ml-2">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
