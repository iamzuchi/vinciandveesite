'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface TierData {
  tierId: string;
  tierNumber: string;
  badge: string;
  title: string;
  volume: string;
  volumeSuffix: string;
  description: string;
  features: string[];
  ctaText: string;
  isFeatured?: boolean;
  featuredBadgeTop?: string;
  featuredBadgeBottom?: string;
}

const tiers: TierData[] = [
  {
    tierId: 'bronze',
    tierNumber: 'TIER 01',
    badge: 'Regional Retail',
    title: 'Bronze Dealer',
    volume: '50 – 200',
    volumeSuffix: 'Units / Order',
    description:
      'Ideal for independent tyre shops and emerging regional garages looking for certified manufacturer supply stability.',
    features: [
      'Base wholesale volume price schedule',
      'Factory return warranty support',
      'Enugu depot pickup within 24 hours',
    ],
    ctaText: 'Apply as Bronze Dealer',
  },
  {
    tierId: 'silver',
    tierNumber: 'TIER 02',
    badge: 'Corporate Fleet',
    title: 'Silver Fleet',
    volume: '201 – 1,000',
    volumeSuffix: 'Units / Contract',
    description:
      'Tailored for logistics operators, interstate passenger lines, and regional government transportation boards.',
    features: [
      'Enhanced volume rebate & net fleet pricing',
      '30 to 60-day structured institutional credit line',
      'Direct depot staging & door-to-depot logistics',
    ],
    ctaText: 'Apply as Silver Fleet',
    isFeatured: true,
    featuredBadgeTop: 'MOST COMMON FLEET',
    featuredBadgeBottom: 'TIER',
  },
  {
    tierId: 'gold',
    tierNumber: 'TIER 03',
    badge: 'Importer / Macro',
    title: 'Gold Distributor',
    volume: '1,000+',
    volumeSuffix: 'Container Lots',
    description:
      'Full 40ft High-Cube container distribution with direct port-of-entry consignment handling and priority vessel dispatch.',
    features: [
      'Deepest FOB & CIF master importer margin schedule',
      'Consignment priority from Lagos port to buyer yard',
      'Exclusive regional territory distribution pact',
    ],
    ctaText: 'Apply as Gold Distributor',
  },
];

interface CommercialPartnershipProps {
  onApply?: (tierId: string) => void;
}

export default function CommercialPartnership({ onApply }: CommercialPartnershipProps) {
  return (
    <section id="commercial-partnership" className="py-20 bg-[#F1F3FB] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="block text-[11px] sm:text-xs font-mono font-bold tracking-[0.18em] text-[#8C5324] uppercase mb-2">
            COMMERCIAL PARTNERSHIP FRAMEWORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
            Institutional Wholesale Tier Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Structured container and batch allocations with institutional terms for regional dealers,
            haulage consortia, and corporate fleet depots.
          </p>
        </div>

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier) => {
            return (
              <div
                key={tier.tierId}
                className={`bg-white rounded-lg p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.isFeatured
                    ? 'border-2 border-[#8C5324]/70 shadow-lg shadow-[#8C5324]/10 ring-1 ring-[#8C5324]/20'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Floating Featured Badge */}
                {tier.isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#7B4F27] text-white text-[9.5px] font-bold tracking-wider px-3.5 py-1 rounded text-center leading-tight uppercase shadow-sm whitespace-nowrap">
                    <div>{tier.featuredBadgeTop}</div>
                    <div>{tier.featuredBadgeBottom}</div>
                  </div>
                )}

                {/* Top Section */}
                <div>
                  {/* Tier Number & Category Badge */}
                  <div className={`flex items-center justify-between mb-4 ${tier.isFeatured ? 'mt-2' : ''}`}>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-[#8C5324]">
                      {tier.tierNumber}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#EEF1F8] text-slate-700 text-[10.5px] font-semibold tracking-wide border border-slate-200/70">
                      {tier.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1 tracking-tight">
                    {tier.title}
                  </h3>

                  {/* Volume Units */}
                  <div className="mb-4">
                    <span className="text-2xl sm:text-[1.75rem] font-bold text-[#0F172A] tracking-tight">
                      {tier.volume}{' '}
                    </span>
                    <span className="text-xs sm:text-sm font-normal text-slate-500">
                      {tier.volumeSuffix}
                    </span>
                  </div>

                  {/* Description with bottom divider */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 pb-6 border-b border-slate-100 min-h-[58px]">
                    {tier.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-700 mb-8">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2
                          className="w-4 h-4 text-[#8C5324] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => onApply?.(tier.tierId)}
                    className={`w-full py-2.5 px-4 rounded-md text-xs font-semibold transition-all duration-200 text-center ${
                      tier.isFeatured
                        ? 'bg-[#7B4F27] hover:bg-[#68411F] text-white shadow-sm'
                        : 'border border-slate-200/90 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
