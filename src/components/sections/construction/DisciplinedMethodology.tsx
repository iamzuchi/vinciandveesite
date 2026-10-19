'use client';

import React from 'react';
import { 
  Building, 
  ShieldCheck, 
  Network, 
  CalendarCheck 
} from 'lucide-react';

interface PillarItem {
  id: string;
  pillarNumber: string;
  title: string;
  description: string;
  complianceBadge: string;
  icon: React.ComponentType<{ className?: string }>;
}

const pillars: PillarItem[] = [
  {
    id: 'pillar-01',
    pillarNumber: 'PILLAR 01',
    title: 'Structural Integrity',
    description:
      'Grade 40/50 reinforced concrete specifications, computerized load modeling, and certified steel tensioning engineered for generational permanence.',
    complianceBadge: 'BS EN 1992 COMPLIANT',
    icon: Building,
  },
  {
    id: 'pillar-02',
    pillarNumber: 'PILLAR 02',
    title: 'Rigorous HSE Protocols',
    description:
      'Uncompromising health, safety, and environmental auditing with real-time biometric jobsite tracking and zero-tolerance hazard governance.',
    complianceBadge: 'ISO 45001 CERTIFIED SITES',
    icon: ShieldCheck,
  },
  {
    id: 'pillar-03',
    pillarNumber: 'PILLAR 03',
    title: 'Smart Building Integration',
    description:
      'Direct group synergy with our Telecom & Fibre division: pre-ducted optical fiber backbone, automation busbars, and BMS sensor grids.',
    complianceBadge: 'CONVERGED INFRASTRUCTURE',
    icon: Network,
  },
  {
    id: 'pillar-04',
    pillarNumber: 'PILLAR 04',
    title: 'Timeline Guarantees',
    description:
      'Master-planned milestone gating, dual-shift logistics, and automated supply chains anchored by corporate-grade delivery bonds.',
    complianceBadge: 'BONDED PROJECT ESCROW',
    icon: CalendarCheck,
  },
];

export default function DisciplinedMethodology() {
  return (
    <section id="methodology" className="py-16 sm:py-24 bg-[#F2F3FF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="block font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase mb-2">
              DISCIPLINED METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
              The 4 Institutional Pillars
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mt-2 md:mt-0 leading-relaxed">
            Engineered rigor backed by the diversified synergy of Vinci and Vee Group cross-industry
            infrastructure capabilities.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-white rounded-lg p-6 border border-slate-200/90 hover:border-[#8C5324]/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-md bg-[#EAEDFF] border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] mb-6 group-hover:bg-[#0D1C32] group-hover:text-[#E8A56E] transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Pillar Number */}
                  <span className="font-mono text-[10.5px] font-bold text-[#8C5324] tracking-wider block mb-1">
                    {pillar.pillarNumber}
                  </span>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-[#0F172A] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 min-h-[60px]">
                    {pillar.description}
                  </p>
                </div>

                {/* Compliance Footer Badge */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center">
                  <span className="font-mono text-[10.5px] font-bold text-[#8C5324] tracking-wide uppercase">
                    {pillar.complianceBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
