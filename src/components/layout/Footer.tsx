import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#EEF2FA] text-slate-700 border-t border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main Columns Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Headquarters */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-md border border-slate-300/80 p-1.5 shadow-xs flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image
                  src="/images/vinci_and_vee_logo_trimmed.png"
                  alt="Vinci & Vee Group Logo"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl text-[#0F172A] tracking-tight">
                  Vinci &amp; Vee Group
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#9B6E3B] tracking-widest uppercase">
                  HOLDING CONGLOMERATE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Achieving Dreams by making Connection. A diversified sovereign entity executing long-term infrastructure, maritime logistics, software ecosystems, and high-precision civil engineering.
            </p>

            <div className="pt-1">
              <span className="text-[9px] sm:text-[10px] font-bold text-[#9B6E3B] tracking-widest uppercase block">
                HEADQUARTERS: CENTENARY CITY, ENUGU
              </span>
            </div>
          </div>

          {/* Column 2: Conglomerate Portfolios */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-3">
            <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-3 sm:mb-4">
              Conglomerate Portfolios
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/telecom" className="hover:text-[#0F172A] transition-colors block">
                  Telecom &amp; Fibre
                </Link>
              </li>
              <li>
                <Link href="/logistics" className="hover:text-[#0F172A] transition-colors block">
                  Sweden Shipping
                </Link>
              </li>
              <li>
                <Link href="/tyres" className="hover:text-[#0F172A] transition-colors block">
                  Tyre Distribution
                </Link>
              </li>
              <li>
                <Link href="/saas" className="hover:text-[#0F172A] transition-colors block">
                  Cloud SaaS
                </Link>
              </li>
              <li>
                <Link href="/construction" className="hover:text-[#0F172A] transition-colors block">
                  Construction &amp; Interiors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Oversight */}
          <div className="lg:col-span-3 lg:col-start-10 space-y-3">
            <h3 className="font-bold text-sm sm:text-base text-[#0F172A] mb-3 sm:mb-4">
              Institutional Oversight
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-[#0F172A] transition-colors block">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/executive" className="hover:text-[#0F172A] transition-colors block">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/executive#investors" className="hover:text-[#0F172A] transition-colors block">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/executive#legal" className="hover:text-[#0F172A] transition-colors block">
                  Legal &amp; Compliance
                </Link>
              </li>
              <li>
                <Link href="/executive#privacy" className="hover:text-[#0F172A] transition-colors block">
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300/70 mt-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-500 font-normal">
          <p className="leading-relaxed max-w-3xl">
            &copy; 2025 Vinci and Vee Group. Achieving Dreams by making Connection. All rights reserved. Plot 80, Jedidiah Gardens Centenary City, Enugu 400706. Tel: 0810 954 4821 / 0907 416 8502
          </p>

          <div className="flex-shrink-0 self-start sm:self-auto">
            <span className="bg-white border border-slate-300/80 text-[#9B6E3B] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-xs whitespace-nowrap inline-block">
              ISO / CAC REGISTERED
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

