'use client';

import React from 'react';
import { Wrench, Home, Network, Zap, ChevronRight } from 'lucide-react';

interface CapabilityCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
}

const capabilities: CapabilityCard[] = [
  {
    id: 'trenching',
    icon: Wrench,
    title: 'Long-Haul & Metro Trenching',
    description:
      'HDD directional drilling, micro-trenching, sub-surface civil works, and heavy armoured optical cable laying with authorized Right of Way (RoW) clearances.',
    tag: 'HDPE DUCT NETWORKS',
  },
  {
    id: 'ftth',
    icon: Home,
    title: 'FTTH & Gated Estate Systems',
    description:
      'Full-turnkey GPON & XGS-PON distribution architecture customized for Centenary City estates, residential villas, and plug-and-play optical network terminals (ONT).',
    tag: 'SMART ESTATE BACKHAUL',
  },
  {
    id: 'enterprise',
    icon: Network,
    title: 'Enterprise DIA & Dark Fibre',
    description:
      'Dedicated 1:1 symmetrical Internet access, redundant BGP routing, and private point-to-point dark strand leasing for commercial banks and corporate campuses.',
    tag: 'UNLIMITED CARRIER LEASE',
  },
  {
    id: 'noc',
    icon: Zap,
    title: '24/7 Optical Splicing & NOC',
    description:
      'Factory-calibrated Fujikura fusion splicers, bidirectional OTDR trace verification, and rapid intervention crews for highway road-cut restoration.',
    tag: 'UNDER 2-HOUR MTTR',
  },
];

export default function TelecomCapabilities() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAFBFD] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9B6E3B] uppercase block">
            ENGINEERING EXCELLENCE
          </span>
          
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Strategic Optical Infrastructure Capabilities
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Deploying resilient, high-density physical layer transmission systems across federal highways, metropolitan corridors, and premier private estates.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-sm p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200 group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-10 h-10 rounded-sm bg-[#F1F4FA] border border-slate-200/70 flex items-center justify-center text-[#9B6E3B] mb-6 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Tag */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-slate-500 uppercase group-hover:text-[#9B6E3B] transition-colors">
                  <span>{item.tag}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#9B6E3B] group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
