'use client';

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface TierSpecCard {
  id: string;
  categoryBadge: string;
  statusLabel: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  specs: string[];
  ctaText: string;
  isFeatured?: boolean;
  featuredBadge?: string;
}

const specsData: TierSpecCard[] = [
  {
    id: 'pcr',
    categoryBadge: 'PCR RADIAL',
    statusLabel: 'A-Grade Traction',
    title: 'Passenger Car Radials',
    subtitle: '(PCR)',
    description:
      'High-traction silica tread compound engineered for wet grip, reduced road noise harmonic resonance, and extended commuter lifecycle.',
    image: '/images/vinci_asset_006.jpg',
    imageAlt: 'Passenger Car Radials tread macro studio photography',
    specs: [
      '65,000 km Treadwear Warranty',
      'Rim Diameters: 15" through 19"',
      'Fuel-Efficient Rolling Resistance',
    ],
    ctaText: 'Order PCR Pallet',
  },
  {
    id: 'suv',
    categoryBadge: 'SUV / 4X4 A/T',
    statusLabel: 'Severe Duty',
    title: 'SUV & 4x4 Heavy All-',
    subtitle: 'Terrain',
    description:
      'Reinforced 3-ply sidewall armour paired with integrated stone ejectors, designed for unpaved regional corridors and heavy commercial work pickups.',
    image: '/images/vinci_asset_007.jpg',
    imageAlt: 'SUV & 4x4 Heavy All-Terrain tyre studio photo',
    specs: [
      '3-Ply Puncture Deflecting Casing',
      'Mud, Loose Rock & Gravel Traction',
      'Anti-Chip Cut-Resistant Rubber',
    ],
    ctaText: 'Order A/T Pallet',
  },
  {
    id: 'tbr',
    categoryBadge: 'TBR HEAVY',
    statusLabel: 'Multi-Retread Life',
    title: 'Commercial Truck & Bus',
    subtitle: '(TBR)',
    description:
      'Steel-belted radial casings optimized for high-mileage interstate freight haulage, high heat dissipation, and repeated retreading longevity.',
    image: '/images/vinci_asset_008.jpg',
    imageAlt: 'Commercial Truck & Bus radials in warehouse',
    specs: [
      'Sizes: 315/80R22.5 & 12R22.5',
      'Reinforced All-Steel Carcass',
      'Guaranteed Retreadability Index',
    ],
    ctaText: 'Order TBR Fleet Pack',
    isFeatured: true,
    featuredBadge: 'FLEET CORE',
  },
  {
    id: 'otr',
    categoryBadge: 'OTR / PORT',
    statusLabel: 'Maximum Ply Rating',
    title: 'Industrial, Ag & Port',
    subtitle: '(OTR)',
    description:
      'Severe puncture-resistant solid lug formations engineered for wheel loaders, port reach stackers, rough terrain forklifts, and tractors.',
    image: '/images/vinci_asset_009.jpg',
    imageAlt: 'Industrial, Ag and Port heavy machinery OTR tyres',
    specs: [
      'Extra Deep E-4 / L-4 Rock Compounds',
      'Forklift, Tractor & Excavator Specs',
      'Industrial Sidewall Deflection Bands',
    ],
    ctaText: 'Order Industrial Spec',
  },
];

interface ManufacturingSpecsProps {
  onOrder?: (categoryId: string) => void;
}

export default function ManufacturingSpecs({ onOrder }: ManufacturingSpecsProps) {
  return (
    <section id="manufacturing-specs" className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl">
          <span className="block text-[11px] sm:text-xs font-mono font-bold tracking-[0.16em] text-[#8C5324] uppercase mb-2">
            TIER-1 MANUFACTURING SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
            Engineered Compounds for Sub-Saharan Corridors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            From high-velocity interstate passenger cruisers to 40-tonne axle hauliers traversing rough
            topography, our portfolio meets the most demanding thermal and puncture thresholds.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {specsData.map((card) => {
            return (
              <div
                key={card.id}
                className={`bg-white rounded-lg flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 relative group ${
                  card.isFeatured
                    ? 'border-2 border-[#8C5324]/60 shadow-lg shadow-[#8C5324]/10 ring-1 ring-[#8C5324]/20'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Floating Featured Badge */}
                {card.isFeatured && card.featuredBadge && (
                  <div className="absolute -top-3 right-6 bg-[#8C5324] text-white text-[10px] font-bold tracking-wider px-3.5 py-0.5 rounded uppercase shadow-sm">
                    {card.featuredBadge}
                  </div>
                )}

                {/* Top Content */}
                <div>
                  {/* Tyre Image */}
                  <div className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-slate-100 border border-slate-100/80">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  {/* Badges / Category row */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-[#F1F4F9] text-slate-800 font-bold text-[10px] sm:text-[11px] tracking-wide border border-slate-200/90 whitespace-nowrap">
                      {card.categoryBadge}
                    </span>
                    <span className="text-[11px] font-semibold text-[#8C5324] whitespace-nowrap">
                      {card.statusLabel}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-bold text-base sm:text-lg text-[#0F172A] leading-snug mb-2">
                    {card.title}
                    {card.subtitle && (
                      <>
                        <br />
                        <span className="font-bold">{card.subtitle}</span>
                      </>
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5 min-h-[50px]">
                    {card.description}
                  </p>

                  {/* Specs List with divider */}
                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {card.specs.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-tight">
                          <Check className="w-3.5 h-3.5 text-[#8C5324] shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="pt-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => onOrder?.(card.id)}
                    className={`w-full py-2.5 px-4 rounded-md text-xs font-semibold transition-all duration-200 text-center ${
                      card.isFeatured
                        ? 'bg-[#8C5324] hover:bg-[#784319] text-white shadow-sm'
                        : 'border border-slate-200/90 bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900'
                    }`}
                  >
                    {card.ctaText}
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
