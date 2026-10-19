'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Thermometer, 
  Shield, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Truck, 
  ChevronRight 
} from 'lucide-react';

interface RegionalLogisticsAnchorProps {
  onContactClick?: () => void;
}

export default function RegionalLogisticsAnchor({ onContactClick }: RegionalLogisticsAnchorProps) {
  const qualityFeatures = [
    {
      icon: Thermometer,
      title: 'Thermal Highway Safety Calibration',
      description:
        'Every batch undergoes rigorous high-temperature endurance testing to withstand extended interstate asphalt friction and heavy heat buildup.',
    },
    {
      icon: Shield,
      title: 'Anti-Burst Sidewall Engineering',
      description:
        'Reinforced bead wire loops and multi-ply carcass layouts guard against sudden pothole impact punctures and structural sidewall bulging.',
    },
    {
      icon: ShieldCheck,
      title: 'Load Index & Plies Certification',
      description:
        'Full compliance with international Department of Transportation (DOT) and Standards Organisation of Nigeria (SONCAP) guidelines.',
    },
  ];

  return (
    <section id="regional-anchor" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading and 3 Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="block text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-[#8C5324] uppercase mb-2">
                REGIONAL LOGISTICS ANCHOR
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
                Centenary City Central Hub &amp; Quality Rigor
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Situated at Plot 80, Jedidiah Gardens, Centenary City, Enugu, our high-density facility
                anchors the group&apos;s automotive transit operations across the South-East, South-South,
                and Middle Belt transport channels.
              </p>
            </div>

            {/* Feature Cards Stack */}
            <div className="space-y-4 pt-1">
              {qualityFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-lg bg-[#F1F4FB] border border-slate-200/80 flex items-start gap-4 transition-colors hover:border-slate-300"
                  >
                    <div className="shrink-0 mt-0.5">
                      <IconComponent className="w-5 h-5 text-[#8C5324]" strokeWidth={2.2} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A] mb-1">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Physical Facility Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-lg border border-slate-200/90 p-6 sm:p-7 shadow-md space-y-5">
              
              {/* Header inside Card */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-2">
                <div>
                  <p className="text-[10.5px] font-mono font-bold tracking-wider text-[#8C5324] uppercase">
                    PHYSICAL FACILITY
                  </p>
                  <h3 className="font-bold text-lg text-[#0F172A]">
                    Jedidiah Gardens Central Depot
                  </h3>
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded bg-[#EEF2FB] text-slate-700 text-[11px] font-semibold tracking-wide border border-slate-200/70 whitespace-nowrap">
                    Open 07:00 - 18:00 WAT
                  </span>
                </div>
              </div>

              {/* Location & Contact Info */}
              <div className="space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C5324] shrink-0 mt-0.5" />
                  <span>Plot 80, Jedidiah Gardens Centenary City, Enugu 400706</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#8C5324] shrink-0" />
                  <span className="font-bold text-[#0F172A]">Tel: 0810 954 4821 / 0907 416 8502</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-4 h-4 text-[#8C5324] shrink-0" />
                  <span>Fleet Ingate: 6 Dual-Bay Ramps for 40ft Heavy Containers</span>
                </div>
              </div>

              {/* Exterior Architectural View Photo */}
              <div className="rounded-md overflow-hidden border border-slate-200/80 relative w-full h-52 sm:h-56 bg-slate-100">
                <Image
                  src="/images/vinci_asset_010.jpg"
                  alt="Enugu Distribution Depot exterior view"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Card Footer: Direct Inquiries & Call Action */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-1 gap-2 border-t border-slate-100">
                <span className="text-xs text-slate-600">
                  Direct Inquiries: Desk Head 0810 954 4821 / 0907 416 8502
                </span>
                <a
                  href="tel:+2348109544821"
                  onClick={(e) => {
                    if (onContactClick) {
                      e.preventDefault();
                      onContactClick();
                    }
                  }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#8C5324] hover:text-[#6E3F1A] transition-colors"
                >
                  <span>Call Depot Dispatch</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
