'use client';

import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock 
} from 'lucide-react';

export default function ExecutiveProjectDesk() {
  return (
    <section id="consultation" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Contact Detail Desk (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="block font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase mb-2">
                EXECUTIVE PROJECT DESK
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
                Centenary City Engineering Bureau
              </h2>
              <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-3">
                Institutional investors, private developers, and regional authorities are welcomed at our Centenary City engineering bureau for blueprint reviews, material inspection, and escrow contract execution.
              </p>
            </div>

            {/* Contact Cards List */}
            <div className="space-y-3.5 pt-1">
              
              {/* Site & Project Headquarters */}
              <div className="flex items-start gap-4 p-4 rounded-md bg-[#F1F3FB] border border-[#DAE2FD]/80 hover:border-[#8C5324]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-white border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">
                    Site &amp; Project Headquarters
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
                    Plot 80, Jedidiah Gardens Centenary City, Enugu 400706
                  </p>
                </div>
              </div>

              {/* Direct Executive Line */}
              <div className="flex items-start gap-4 p-4 rounded-md bg-[#F1F3FB] border border-[#DAE2FD]/80 hover:border-[#8C5324]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-white border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">
                    Direct Executive Line
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
                    0810 954 4821 / 0907 416 8502 (24/7 Site Emergency &amp; Contract Desk)
                  </p>
                </div>
              </div>

              {/* Civil Governance Email */}
              <div className="flex items-start gap-4 p-4 rounded-md bg-[#F1F3FB] border border-[#DAE2FD]/80 hover:border-[#8C5324]/30 transition-colors">
                <div className="w-10 h-10 rounded-md bg-white border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0F172A]">
                    Civil Governance Email
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-0.5">
                    construction@vinciandvee.com / hq@vinciandvee.com
                  </p>
                </div>
              </div>

            </div>

            {/* Operating Hours Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                OPERATING HOURS:
              </span>
              <span className="font-mono text-xs font-semibold text-[#0F172A] bg-[#EEF1FA] border border-slate-200/80 px-3.5 py-1.5 rounded-md">
                Mon &ndash; Sat: 07:30 &ndash; 18:00 WAT
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Rendering / Bureau Stage Map Visual (6 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200/90 shadow-md">
              <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] w-full rounded-md overflow-hidden bg-slate-100">
                <Image
                  src="/images/vinci_asset_016.jpg"
                  alt="Modern architectural construction office pavilion located inside Jedidiah Gardens Centenary City Enugu Nigeria"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />

                {/* Centenary Site Office Open Floating Pill Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-[#0D1C32]/95 backdrop-blur-xs text-white p-4 rounded-md border border-[#8C5324]/40 shadow-lg">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E8A56E] inline-block animate-pulse"></span>
                    <span className="font-mono text-[11px] font-bold text-[#E8A56E] tracking-wider uppercase">
                      CENTENARY SITE OFFICE OPEN
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Accredited testing lab for core soil density and concrete slump sampling on premises.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
