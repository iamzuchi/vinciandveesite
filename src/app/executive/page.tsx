'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import { 
  ShieldCheck, 
  Award, 
  Users, 
  Globe2, 
  FileText, 
  ArrowRight, 
  Building2 
} from 'lucide-react';

export default function ExecutivePage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* EXECUTIVE HERO */}
        <section className="relative bg-[#0F172A] text-white py-20 lg:py-28 overflow-hidden border-b border-slate-800">
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/images/vinci_asset_023.jpg"
              alt="Vinci Group Boardroom"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/85 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-950 border border-sky-500/40 text-sky-300 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>EXECUTIVE GOVERNANCE & BOARDROOM</span>
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                Sovereign Leadership & Institutional Trust.
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed">
                Guiding multi-industry operations through measured stewardship, institutional compliance, and long-term capital preservation across West African and European markets.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-display font-semibold rounded-lg shadow-lg transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Inquire Investor Relations</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP PORTRAITS GALLERY */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs font-mono tracking-widest text-sky-600 uppercase font-semibold">
              Executive Committee
            </h2>
            <h3 className="font-display text-3xl font-bold text-slate-900">
              Corporate Governance & Sector Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Executive 1 */}
            <div className="card-elevation-1 rounded-xl overflow-hidden flex flex-col border-t-3 border-sky-600">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/vinci_asset_027.jpg"
                  alt="Chairman Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-sky-600 font-semibold uppercase">Executive Governance</div>
                <h4 className="font-display font-bold text-xl text-slate-900">Group Chairman & CEO</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Steering long-term capital allocation, strategic partnerships, and infrastructure development across Nigeria and Sweden.
                </p>
              </div>
            </div>

            {/* Executive 2 */}
            <div className="card-elevation-1 rounded-xl overflow-hidden flex flex-col border-t-3 border-amber-500">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/vinci_asset_028.jpg"
                  alt="Managing Director Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-amber-600 font-semibold uppercase">Nordic Operations</div>
                <h4 className="font-display font-bold text-xl text-slate-900">Managing Director</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Directing Scandinavian freight corridors, Gothenburg shipping desk, and wholesale automotive supply chain logistics.
                </p>
              </div>
            </div>

            {/* Executive 3 */}
            <div className="card-elevation-1 rounded-xl overflow-hidden flex flex-col border-t-3 border-indigo-600">
              <div className="relative h-80 w-full">
                <Image
                  src="/images/vinci_asset_029.jpg"
                  alt="CTO Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="text-xs font-mono text-indigo-600 font-semibold uppercase">Technology Division</div>
                <h4 className="font-display font-bold text-xl text-slate-900">Chief Technology Officer</h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Overseeing subterranean fibre optics deployment, data center DWDM interconnects, and SaaS cloud platform reliability.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <B2BQuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultSector="Vinci Executive" 
      />
    </div>
  );
}
