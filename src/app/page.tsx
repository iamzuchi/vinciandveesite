'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import { 
  Wifi, 
  Disc, 
  Ship, 
  Cloud, 
  HardHat, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Activity, 
  TrendingUp, 
  Globe2, 
  Building2, 
  Users, 
  Award,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Compass,
  Layers,
  Gauge,
  MapPin,
  PhoneCall,
  Mail,
  Lock,
  Loader2
} from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion/FadeIn';

export default function CorporateHub() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteSector, setQuoteSector] = useState('Vinci Telecom');

  const [hqForm, setHqForm] = useState({
    name: '',
    email: '',
    phone: '',
    sector: 'Telecom & Fibre Installation',
    message: '',
    website_trap: '',
  });
  const [hqStatus, setHqStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [hqError, setHqError] = useState('');

  const openQuoteFor = (sec: string) => {
    setQuoteSector(sec);
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section 
          className="relative bg-[#FAFBFD] text-slate-900 overflow-hidden py-12 lg:py-20 border-b border-slate-200"
          style={{
            backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Content */}
              <FadeIn direction="up" className="lg:col-span-7 space-y-6">
                
                {/* Tagline Pill */}
                <div className="inline-flex items-center space-x-2.5 bg-[#F1F4FA] border border-slate-200/90 rounded-md px-3 py-1 text-xs text-slate-600 shadow-xs">
                  <span className="bg-[#0F172A] text-white font-bold uppercase text-[9px] tracking-wider px-2 py-0.5 rounded-xs">
                    CORPORATE SOVEREIGN
                  </span>
                  <span className="font-medium text-slate-600">
                    Achieving Dreams by making Connection.
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] tracking-tight leading-[1.1]">
                  Strategic Global <br className="hidden sm:inline" />
                  Infrastructure <span className="text-[#9B6E3B] font-serif font-normal">&amp;</span> Scaled <br className="hidden sm:inline" />
                  Ventures.
                </h1>

                {/* Quote Block */}
                <div className="bg-[#F1F4FA] border-l-4 border-[#9B6E3B] rounded-r-sm p-5 sm:p-6 shadow-xs border-t border-r border-b border-slate-200/60">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    &quot;We are a diversified technology and infrastructure company delivering solutions across fibre optic installation, Software as a Service (SaaS), tyre wholesale and retail, and construction. We provide end-to-end fibre deployment services, ensuring reliable high-speed connectivity for residential, commercial, and enterprise clients. As a SaaS provider, we develop scalable cloud-based software that improves operational efficiency and supports digital transformation. Our tyre business supplies quality products to retailers and end users at competitive prices. In construction, we execute residential and commercial projects with a focus on quality, safety, and timely delivery. Our operations are driven by professionalism, innovation, and customer&quot;
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-1">
                  <button
                    onClick={() => openQuoteFor('Vinci Telecom')}
                    className="bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm flex items-center justify-center space-x-2 shadow-sm transition-colors group"
                  >
                    <span>Explore Multi-Sector Portfolio</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => setQuoteOpen(true)}
                    className="bg-[#F1F4FA] hover:bg-[#E2E7F2] text-slate-800 border border-slate-300/80 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm transition-colors text-center"
                  >
                    Request Corporate Partnership
                  </button>
                </div>

                {/* Bottom Feature Bullet Points */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-4 text-xs font-semibold text-slate-800 border-t border-slate-200/60">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#9B6E3B] rounded-xs flex-shrink-0" />
                    <span>Dual-Corridor Logistical Control</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#9B6E3B] rounded-xs flex-shrink-0" />
                    <span>ISO-Aligned Quality Protocols</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-[#9B6E3B] rounded-xs flex-shrink-0" />
                    <span>Sub-Saharan Telecom Backbones</span>
                  </div>
                </div>

              </FadeIn>

              {/* Right Column Card Widget */}
              <FadeIn direction="up" delay={0.15} className="lg:col-span-5">
                <div className="bg-[#E5EBF5] p-3 sm:p-4 rounded-sm border border-slate-200/90 shadow-xl">
                  {/* Featured Image */}
                  <div className="relative w-full h-[300px] sm:h-[360px] rounded-sm overflow-hidden mb-3 shadow-md">
                    <Image
                      src="/images/hero_matrix_cityscape.png"
                      alt="Pan-African & Nordic Matrix Infrastructure"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                    
                    {/* Bottom Left Overlay */}
                    <div className="absolute bottom-3 left-3 bg-[#0F172A]/90 backdrop-blur-md p-3 rounded-sm border border-white/10 text-white max-w-[75%]">
                      <span className="text-[9px] font-bold text-[#F59E0B] tracking-widest uppercase block">
                        INTEGRATED FOOTPRINT
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white block">
                        Pan-African &amp; Nordic Matrix
                      </span>
                    </div>

                    {/* Bottom Right Badge */}
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-1.5 rounded-sm shadow-sm border border-slate-200/80">
                      Tier-1 Sovereign
                    </div>
                  </div>

                  {/* Status Cards Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-sm p-3 flex items-center space-x-3 border border-slate-200/80 shadow-xs">
                      <div className="w-8 h-8 rounded-sm bg-[#F0F4FC] text-[#9B6E3B] flex items-center justify-center flex-shrink-0 font-mono font-bold text-xs">
                        &lt;..&gt;
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block leading-tight">
                          OPTICAL CORE
                        </span>
                        <span className="text-xs font-bold text-[#0F172A] block">
                          Metro DWDM
                        </span>
                      </div>
                    </div>

                    <div className="bg-white rounded-sm p-3 flex items-center space-x-3 border border-slate-200/80 shadow-xs">
                      <div className="w-8 h-8 rounded-sm bg-[#F0F4FC] text-[#9B6E3B] flex items-center justify-center flex-shrink-0">
                        <Ship className="w-4 h-4 text-[#9B6E3B]" />
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block leading-tight">
                          BALTIC ROUTE
                        </span>
                        <span className="text-xs font-bold text-[#0F172A] block">
                          Stockholm Line
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* OPERATIONAL SUBSIDIARIES SECTION */}
        <section className="bg-[#EEF2F9] py-16 sm:py-24 border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-[#9B6E3B] font-bold uppercase text-xs tracking-wider flex items-center mb-2">
                  <span className="mr-2.5 font-mono">—</span> OPERATIONAL SUBSIDIARIES
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
                  Six Autonomous Pillars of Industrial Execution
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                  Disciplined allocation across telecommunications, trans-continental shipping, automotive distribution, scalable cloud architectures, and commercial civil engineering.
                </p>
              </div>

              <div className="hidden md:block flex-shrink-0">
                <span className="bg-[#E5EBF5] border border-slate-300/80 text-slate-600 font-bold uppercase text-[10px] tracking-wider px-3.5 py-1.5 rounded-md shadow-xs">
                  GROUP VERIFIED ARCHITECTURE
                </span>
              </div>
            </div>

            {/* 6 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Card 1: Telecom & Fibre */}
              <div className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src="/images/pillar_telecom.png" 
                      alt="Telecom & Fibre Infrastructure" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0F172A] text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-xs shadow-sm">
                      01 // CONNECTIVITY
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#9B6E3B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Wifi className="w-3.5 h-3.5 text-[#9B6E3B]" />
                      <span>TELECOMMUNICATIONS</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2 group-hover:text-[#9B6E3B] transition-colors">
                      Telecom &amp; Fibre Infrastructure
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      End-to-end fibre optic engineering covering FTTH rollout, metropolitan trenching, splicing, and mission-critical enterprise dedicated lease lines.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    99.9% Fiber Uptime SLA
                  </span>
                  <Link 
                    href="/telecom" 
                    className="w-7 h-7 rounded-sm bg-slate-100 hover:bg-[#0F172A] hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Sweden Shipping */}
              <div className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src="/images/pillar_logistics.png" 
                      alt="Sweden Shipping & Logistics" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0F172A] text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-xs shadow-sm">
                      02 // LOGISTICS
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#9B6E3B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Ship className="w-3.5 h-3.5 text-[#9B6E3B]" />
                      <span>MARITIME CORRIDOR</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2 group-hover:text-[#9B6E3B] transition-colors">
                      Sweden Shipping &amp; Logistics
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Dedicated direct maritime and air consolidation corridor operating seamlessly between Gothenburg/Stockholm and West African seaports with guaranteed customs clearance.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Gothenburg – Lagos Route
                  </span>
                  <Link 
                    href="/logistics" 
                    className="w-7 h-7 rounded-sm bg-slate-100 hover:bg-[#0F172A] hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Tyre Distribution */}
              <div className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src="/images/vinci_asset_020.jpg" 
                      alt="Tyre Wholesale & Retail" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0F172A] text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-xs shadow-sm">
                      03 // AUTOMOTIVE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#9B6E3B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Disc className="w-3.5 h-3.5 text-[#9B6E3B]" />
                      <span>TYRE DISTRIBUTION</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2 group-hover:text-[#9B6E3B] transition-colors">
                      Tyre Wholesale &amp; Retail
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Direct supply chains for PCR, All-Terrain, TBR commercial transport, and industrial earth-moving equipment, maintaining competitive wholesale pricing and authentic grade certifications.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    TBR / PCR / Heavy Duty
                  </span>
                  <Link 
                    href="/tyres" 
                    className="w-7 h-7 rounded-sm bg-slate-100 hover:bg-[#0F172A] hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 4: Cloud SaaS */}
              <div className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src="/images/vinci_asset_021.jpg" 
                      alt="Cloud SaaS & Digital Solutions" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0F172A] text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-xs shadow-sm">
                      04 // ENTERPRISE SOFTWARE
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#9B6E3B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Cloud className="w-3.5 h-3.5 text-[#9B6E3B]" />
                      <span>CLOUD PLATFORMS</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2 group-hover:text-[#9B6E3B] transition-colors">
                      Cloud SaaS &amp; Digital Solutions
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Proprietary cloud platforms including VinciFlow ERP and VinciConnect CRM engineered to accelerate operational clarity and streamline organizational digital transformation.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    VinciFlow ERP Suite
                  </span>
                  <Link 
                    href="/saas" 
                    className="w-7 h-7 rounded-sm bg-slate-100 hover:bg-[#0F172A] hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 5: Construction & Civil Engineering */}
              <div className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src="/images/vinci_asset_022.jpg" 
                      alt="Construction & Civil Engineering" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0F172A] text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-xs shadow-sm">
                      05 // CIVIL ENGINEERING
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#9B6E3B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Building2 className="w-3.5 h-3.5 text-[#9B6E3B]" />
                      <span>INFRASTRUCTURE</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2 group-hover:text-[#9B6E3B] transition-colors">
                      Construction &amp; Civil Engineering
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Executing flagship residential builds across Centenary City and major commercial structures governed by uncompromising structural safety and deadline delivery.
                    </p>
                  </div>
                </div>

                <div className="px-[#1.5rem] py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Centenary City Masterbuilds
                  </span>
                  <Link 
                    href="/construction" 
                    className="w-7 h-7 rounded-sm bg-slate-100 hover:bg-[#0F172A] hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card 6: Luxury Interiors & Fit-Outs */}
              <div className="bg-white rounded-sm overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src="/images/vinci_asset_023.jpg" 
                      alt="Luxury Interiors & Turnkey Fit-Outs" 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-[#0F172A] text-white font-mono font-bold text-[10px] px-2.5 py-1 rounded-xs shadow-sm">
                      06 // ARCHITECTURAL FIT-OUT
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#9B6E3B] text-[10px] font-bold uppercase tracking-wider mb-2">
                      <Compass className="w-3.5 h-3.5 text-[#9B6E3B]" />
                      <span>INTERIORS &amp; FIT-OUT</span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-2 group-hover:text-[#9B6E3B] transition-colors">
                      Luxury Interiors &amp; Turnkey Fit-Outs
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Turnkey architectural finishing for institutional headquarters, executive suites, and luxury residences crafted with warm metallic joinery and bespoke materials.
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">
                    Turnkey C-Suite Delivery
                  </span>
                  <Link 
                    href="/construction" 
                    className="w-7 h-7 rounded-sm bg-slate-100 hover:bg-[#0F172A] hover:text-white flex items-center justify-center text-slate-700 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* INSTITUTIONAL STANDING SECTION */}
        <section className="bg-[#18110C] text-white py-16 sm:py-24 border-b border-[#382618]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div>
                <span className="text-[#C59B6A] font-bold uppercase text-[11px] tracking-widest block mb-2">
                  INSTITUTIONAL STANDING
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Institutional Scale &amp; Operating <br className="hidden sm:inline" />
                  Performance
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#D4A373]/80 max-w-md font-normal leading-relaxed">
                Quantifiable execution across telecommunication networks, cross-border freight conduits, and physical infrastructure assets.
              </p>
            </div>

            <div className="w-full h-[1px] bg-[#382618]/80 mb-10 sm:mb-12" />

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1 */}
              <div className="bg-[#241A12] border border-[#3D2C1E]/80 rounded-sm p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-[#523924] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-9 h-9 rounded-sm bg-[#382618]/60 flex items-center justify-center text-[#D4A373]">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="bg-[#382618] text-[#D4A373] text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-xs uppercase border border-[#523924]/60">
                      DIVERSIFIED
                    </span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    5+
                  </div>
                  <div className="text-sm font-bold text-[#D4A373] mb-3">
                    Operating Verticals
                  </div>
                  <p className="text-xs text-[#C59B6A]/70 leading-relaxed font-normal">
                    Independent divisional leadership orchestrating coherent multi-sector market share.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#241A12] border border-[#3D2C1E]/80 rounded-sm p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-[#523924] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-9 h-9 rounded-sm bg-[#382618]/60 flex items-center justify-center text-[#D4A373]">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <span className="bg-[#382618] text-[#D4A373] text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-xs uppercase border border-[#523924]/60">
                      FIBRE SLA
                    </span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    99.9%
                  </div>
                  <div className="text-sm font-bold text-[#D4A373] mb-3">
                    Optical Network SLA
                  </div>
                  <p className="text-xs text-[#C59B6A]/70 leading-relaxed font-normal">
                    Zero-jitter carrier grade redundancy guaranteed across our metro and backhaul paths.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#241A12] border border-[#3D2C1E]/80 rounded-sm p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-[#523924] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-9 h-9 rounded-sm bg-[#382618]/60 flex items-center justify-center text-[#D4A373]">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <span className="bg-[#382618] text-[#D4A373] text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-xs uppercase border border-[#523924]/60">
                      DUAL AXIS
                    </span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    2 Zones
                  </div>
                  <div className="text-sm font-bold text-[#D4A373] mb-3">
                    Direct Corridor Reach
                  </div>
                  <p className="text-xs text-[#C59B6A]/70 leading-relaxed font-normal">
                    Proprietary trade bridges seamlessly connecting West African markets with Scandinavian nodes.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#241A12] border border-[#3D2C1E]/80 rounded-sm p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-[#523924] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-9 h-9 rounded-sm bg-[#382618]/60 flex items-center justify-center text-[#D4A373]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="bg-[#382618] text-[#D4A373] text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-xs uppercase border border-[#523924]/60">
                      QUALITY
                    </span>
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                    ISO
                  </div>
                  <div className="text-sm font-bold text-[#D4A373] mb-3">
                    Aligned Safety &amp; QA
                  </div>
                  <p className="text-xs text-[#C59B6A]/70 leading-relaxed font-normal">
                    Rigorous international civil compliance and materials testing protocols on every site.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ENGAGE GROUP HQ / CONTACT SECTION */}
        <section id="contact" className="bg-[#FAFBFD] py-16 sm:py-24 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Left Column: Direct Engagement info */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-[#9B6E3B] font-bold uppercase text-xs tracking-wider block mb-2">
                    DIRECT ENGAGEMENT
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight mb-3">
                    Engage Group HQ
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                    Submit formal RFQ, partnership, tender submissions, or divisional procurement inquiries directly to the executive secretariat.
                  </p>
                </div>

                {/* Contact Information Card */}
                <div className="bg-[#EFF3FA] border border-slate-200/90 rounded-sm p-6 space-y-5 shadow-xs">
                  
                  {/* Address */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-sm bg-[#0F172A] flex items-center justify-center text-[#C59B6A] flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#C59B6A]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-[#9B6E3B] uppercase tracking-wider block mb-1">
                        CENTENARY CITY HEADQUARTERS
                      </span>
                      <span className="font-bold text-xs sm:text-sm text-[#0F172A] block leading-snug">
                        Plot 80, Jedidiah Gardens Centenary City, Enugu 400706, Nigeria
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-slate-200/90" />

                  {/* Phone */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-sm bg-[#0F172A] flex items-center justify-center text-[#C59B6A] flex-shrink-0 mt-0.5">
                      <PhoneCall className="w-4 h-4 text-[#C59B6A]" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-[#9B6E3B] uppercase tracking-wider block mb-1">
                        EXECUTIVE TELEPHONE LINE
                      </span>
                      <a href="tel:+2348109544821" className="font-bold text-sm sm:text-base text-[#0F172A] hover:text-[#9B6E3B] transition-colors block">
                        0810 954 4821 / 0907 416 8502
                      </a>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        Monday to Friday: 08:00 – 17:00 WAT
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-slate-200/90" />

                  {/* Email */}
                  <div className="flex items-start space-x-3.5">
                    <div className="w-9 h-9 rounded-sm bg-[#0F172A] flex items-center justify-center text-[#C59B6A] flex-shrink-0 mt-0.5 font-bold text-xs">
                      @
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-[#9B6E3B] uppercase tracking-wider block mb-1">
                        CORPORATE CORRESPONDENCE
                      </span>
                      <a href="mailto:corporate@vinciandvee.com" className="font-bold text-xs sm:text-sm text-[#0F172A] hover:text-[#9B6E3B] transition-colors block">
                        corporate@vinciandvee.com
                      </a>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        Direct encrypted route to executive desk
                      </span>
                    </div>
                  </div>

                </div>

                {/* Campus Image Card */}
                <div className="relative w-full h-44 sm:h-52 rounded-sm overflow-hidden border border-slate-200 shadow-md">
                  <Image
                    src="/images/vinci_asset_024.jpg"
                    alt="Jedidiah Gardens Campus Enugu"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-sm text-[10px] font-bold text-slate-800 shadow-sm border border-slate-200/80">
                    Jedidiah Gardens Campus // Enugu
                  </div>
                </div>

              </div>

              {/* Right Column: Corporate Dispatch & RFQ Form */}
              <div className="lg:col-span-7">
                <div className="bg-white p-6 sm:p-8 rounded-sm border border-slate-200/90 shadow-md">
                  
                  <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-1">
                    Corporate Dispatch &amp; RFQ Tender Form
                  </h3>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    Please specify your sector requirement for expedited routing to the corresponding division director.
                  </p>

                  {hqStatus === 'success' ? (
                    <div className="py-8 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="font-bold text-lg text-slate-900">
                        Dispatch Successfully Transmitted
                      </h4>
                      <p className="text-xs text-slate-600 max-w-md mx-auto">
                        Your tender and corporate brief has been routed directly to the Executive Secretariat. A senior desk lead will reach out to your team within 24 operational hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setHqStatus('idle');
                          setHqForm({ name: '', email: '', phone: '', sector: 'Telecom & Fibre Installation', message: '', website_trap: '' });
                        }}
                        className="mt-2 text-xs font-semibold text-[#8C5324] hover:underline"
                      >
                        Submit another corporate dispatch
                      </button>
                    </div>
                  ) : (
                    <form 
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setHqStatus('loading');
                        setHqError('');

                        try {
                          const res = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                              deskSource: `HQ Secretariat Dispatch - ${hqForm.sector}`,
                              fullName: hqForm.name.trim(),
                              email: hqForm.email.trim(),
                              phone: hqForm.phone.trim(),
                              details: {
                                'Target Division / Sector': hqForm.sector,
                              },
                              message: hqForm.message.trim(),
                              website_trap: hqForm.website_trap,
                            }),
                          });

                          const json = await res.json();
                          if (!res.ok) {
                            throw new Error(json.error || 'Failed to dispatch request.');
                          }

                          setHqStatus('success');
                        } catch (err: any) {
                          setHqError(err.message || 'Error transmitting dispatch. Please try again.');
                          setHqStatus('error');
                        }
                      }}
                      className="space-y-4"
                    >
                      {/* Honeypot Trap Field */}
                      <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                        <input
                          type="text"
                          name="website_trap"
                          value={hqForm.website_trap}
                          onChange={(e) => setHqForm({ ...hqForm, website_trap: e.target.value })}
                          tabIndex={-1}
                          autoComplete="off"
                        />
                      </div>

                      {hqError && (
                        <div className="p-3 text-xs bg-red-50 border border-red-300 text-red-700 rounded-sm">
                          {hqError}
                        </div>
                      )}

                      {/* Row 1 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1.5">
                            FULL LEGAL NAME / TITLE
                          </label>
                          <input 
                            type="text" 
                            required
                            minLength={2}
                            maxLength={120}
                            value={hqForm.name}
                            onChange={(e) => setHqForm({ ...hqForm, name: e.target.value })}
                            placeholder="e.g. Chief Executive / Director" 
                            className="w-full bg-[#F4F7FC] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1.5">
                            OFFICIAL CORPORATE EMAIL
                          </label>
                          <input 
                            type="email" 
                            required
                            maxLength={254}
                            value={hqForm.email}
                            onChange={(e) => setHqForm({ ...hqForm, email: e.target.value })}
                            placeholder="executive@institution.com" 
                            className="w-full bg-[#F4F7FC] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1.5">
                            DIRECT TELEPHONE
                          </label>
                          <input 
                            type="tel" 
                            required
                            minLength={7}
                            maxLength={25}
                            pattern="[0-9+()\- ]{7,25}"
                            title="Please enter a valid telephone number (7-25 digits/symbols)"
                            value={hqForm.phone}
                            onChange={(e) => setHqForm({ ...hqForm, phone: e.target.value })}
                            placeholder="0810 954 4821" 
                            className="w-full bg-[#F4F7FC] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                          />
                        </div>

                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1.5">
                            SECTOR SPECIFICATION
                          </label>
                          <select 
                            value={hqForm.sector}
                            onChange={(e) => setHqForm({ ...hqForm, sector: e.target.value })}
                            className="w-full bg-[#F4F7FC] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all"
                          >
                            <option value="Telecom & Fibre Installation">Telecom &amp; Fibre Installation</option>
                            <option value="Sweden Shipping & Maritime Logistics">Sweden Shipping &amp; Maritime Logistics</option>
                            <option value="Tyre Wholesale & Bulk Supply">Tyre Wholesale &amp; Bulk Supply</option>
                            <option value="Enterprise Cloud & SaaS">Enterprise Cloud &amp; SaaS</option>
                            <option value="Construction & Civil Engineering">Construction &amp; Civil Engineering</option>
                            <option value="Luxury Interiors & Fit-Outs">Luxury Interiors &amp; Fit-Outs</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div>
                        <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1.5">
                          SCOPE OF TENDER / ENGAGEMENT DETAILS
                        </label>
                        <textarea 
                          rows={4} 
                          required
                          value={hqForm.message}
                          onChange={(e) => setHqForm({ ...hqForm, message: e.target.value })}
                          placeholder="Outline project coordinates, volumes, SLA metrics, or architectural specifications..." 
                          className="w-full bg-[#F4F7FC] border border-slate-200 rounded-sm px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#0F172A] focus:ring-1 focus:ring-[#0F172A] transition-all resize-none"
                        />
                      </div>

                      {/* Footer Row */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3">
                        <div className="flex items-center space-x-2 text-slate-500 text-xs font-medium">
                          <Lock className="w-3.5 h-3.5 text-[#9B6E3B]" />
                          <span>Confidential Corporate Routing</span>
                        </div>

                        <button 
                          type="submit" 
                          disabled={hqStatus === 'loading'}
                          className="bg-[#0F172A] hover:bg-[#1E293B] disabled:opacity-60 text-white px-6 py-3 rounded-sm text-xs font-semibold tracking-wide transition-colors shadow-sm whitespace-nowrap flex items-center space-x-2"
                        >
                          {hqStatus === 'loading' ? (
                            <>
                              <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              <span>Dispatching to Secretariat...</span>
                            </>
                          ) : (
                            <span>Dispatch to HQ Secretariat</span>
                          )}
                        </button>
                      </div>

                    </form>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <B2BQuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultSector={quoteSector} 
      />
    </div>
  );
}
