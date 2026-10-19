'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  CheckCircle2, 
  Zap, 
  Shield, 
  Armchair, 
  Volume2, 
  Route, 
  Droplets 
} from 'lucide-react';

type CategoryFilter = 'all' | 'residential' | 'commercial' | 'interiors' | 'civil';

interface AssetItem {
  id: string;
  category: CategoryFilter;
  categoryLabel: string;
  code: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tag: string;
  metricBadge?: string;
  specs: {
    icon: React.ComponentType<{ className?: string; strokeWidth?: number | string }>;
    label: string;
  }[];
}

const assetsData: AssetItem[] = [
  {
    id: 'residences',
    category: 'residential',
    categoryLabel: 'RESIDENTIAL LUXURY',
    code: 'ENUGU-CENT-RES-08',
    title: 'The Jedidiah Crest Residences',
    description:
      'Five-bedroom detached palatial villas built with imported travertine stone, integrated sub-surface perimeter drainage, thermally insulated roof slabs, and native smart home automation conduits.',
    image: '/images/vinci_asset_012.jpg',
    imageAlt: 'The Jedidiah Crest Residences luxury private villa development Centenary City',
    tag: 'Centenary City Private Villa',
    metricBadge: '1,250 m² Civil Envelope',
    specs: [
      { icon: CheckCircle2, label: '100% Structural Sign-Off' },
      { icon: CheckCircle2, label: 'Grade 45 Concrete' },
    ],
  },
  {
    id: 'telecom-hub',
    category: 'commercial',
    categoryLabel: 'COMMERCIAL & INSTITUTIONAL',
    code: 'HQ-CORP-401',
    title: 'Vinci Telecom Switch & Executive Hub',
    description:
      'Six-storey corporate headquarters equipped with structural post-tensioned slabs, high-spec low-E curtain glazing, and redundant N+1 data center civil containment.',
    image: '/images/vinci_asset_013.jpg',
    imageAlt: 'Vinci Telecom Switch and Executive Hub corporate commercial tech park tower',
    tag: 'Institutional & Tech',
    specs: [
      { icon: Zap, label: 'N+1 Dual Feed Grid' },
      { icon: Shield, label: 'Heavy Security Shell' },
    ],
  },
  {
    id: 'penthouse-suites',
    category: 'interiors',
    categoryLabel: 'BESPOKE INTERIOR ARCHITECTURE',
    code: 'INT-LUX-09',
    title: 'Centenary Penthouse Executive Suites',
    description:
      'Complete fit-out including micro-perforated acoustic timber paneling, concealed climate air diffusers, book-matched Italian marble slabs, and custom fluted bronze partitions.',
    image: '/images/vinci_asset_014.jpg',
    imageAlt: 'Centenary Penthouse Executive Suites corporate boardroom and luxury interior fit-out',
    tag: 'Turnkey Executive Fit-Out',
    specs: [
      { icon: Armchair, label: 'Bespoke Cabinetry' },
      { icon: Volume2, label: 'NRC 0.85 Acoustics' },
    ],
  },
  {
    id: 'duct-network',
    category: 'civil',
    categoryLabel: 'CIVIL & TELECOM DUCTING',
    code: 'INFRA-CV-112',
    title: 'Jedidiah Arterial Corridor Duct Network',
    description:
      'Installation of 14.8km high-density underground PVC/HDPE optical conduit runs, storm drain culverts, and high-load interlocking roadway sections designed for 40-tonne freight.',
    image: '/images/vinci_asset_015.jpg',
    imageAlt: 'Jedidiah Arterial Corridor Duct Network heavy civil infrastructure and fiber optic trenches',
    tag: 'Sub-Surface Civil Works',
    specs: [
      { icon: Route, label: '14.8km Multi-Duct Run' },
      { icon: Droplets, label: 'Engineered Invert Levels' },
    ],
  },
];

export default function AssetRegister() {
  const [activeTab, setActiveTab] = useState<CategoryFilter>('all');

  const filteredAssets = activeTab === 'all'
    ? assetsData
    : assetsData.filter((item) => item.category === activeTab);

  const tabs: { key: CategoryFilter; label: string }[] = [
    { key: 'all', label: 'All Portfolios' },
    { key: 'residential', label: 'Residential Luxury' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'interiors', label: 'Bespoke Interiors' },
    { key: 'civil', label: 'Civil & Fibre Ducting' },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div>
            <span className="block font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase mb-2">
              CONGLOMERATE ASSET REGISTER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
              Active Capital Developments
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#EEF1FA] p-1 rounded-md border border-slate-200/80">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-3.5 py-1.5 rounded text-xs font-semibold transition-all duration-150 ${
                  activeTab === tab.key
                    ? 'bg-[#0D1C32] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Bento / Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredAssets.map((asset) => {
            return (
              <div
                key={asset.id}
                className="bg-white rounded-lg border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Stage */}
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={asset.image}
                      alt={asset.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    
                    {/* Floating Top Left Pill Badge */}
                    <div className="absolute top-4 left-4 bg-[#0D1C32]/90 px-3 py-1 rounded text-white text-[11px] font-mono font-semibold border border-[#8C5324]/40 shadow-sm">
                      {asset.tag}
                    </div>

                    {/* Optional Floating Bottom Right Metric Badge */}
                    {asset.metricBadge && (
                      <div className="absolute bottom-4 right-4 bg-white/95 px-3 py-1 rounded text-[#0F172A] text-[11px] font-mono font-semibold shadow-xs border border-slate-200/80">
                        {asset.metricBadge}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7">
                    {/* Category Code Row */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10.5px] font-bold text-[#8C5324] uppercase tracking-wider">
                        {asset.categoryLabel}
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {asset.code}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl text-[#0F172A] mb-2 leading-snug">
                      {asset.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6">
                      {asset.description}
                    </p>

                    {/* Specs Row */}
                    <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-800">
                      {asset.specs.map((spec, sIdx) => {
                        const SpecIcon = spec.icon;
                        return (
                          <span key={sIdx} className="flex items-center gap-1.5">
                            <SpecIcon className="w-4 h-4 text-[#8C5324] shrink-0" strokeWidth={2.2} />
                            <span>{spec.label}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
