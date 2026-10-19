'use client';

import React from 'react';
import { CircleDollarSign, CheckCircle2 } from 'lucide-react';

interface PricingTier {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  period?: string;
  billingNote: string;
  isNoteAccent?: boolean;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  popularTopText?: string;
  popularBottomText?: string;
  ctaVariant: 'secondary' | 'dark';
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    category: 'Small Businesses',
    title: 'Starter Tier',
    description: 'Ideal for retail shops, single depots, and expanding commercial trade outfits.',
    price: '₦85,000',
    period: '/ month',
    billingNote: 'Billed quarterly or annually',
    features: [
      'Up to 15 Active Team Seats',
      'VinciFlow ERP Core (Inventory & POS)',
      'Full Mobile App Access (Android / iOS)',
      'Daily Automated Database Backups',
      'Standard Email & WhatsApp Support',
    ],
    ctaText: 'Deploy Starter Instance',
    ctaVariant: 'secondary',
  },
  {
    id: 'professional',
    category: 'Mid-Sized Operations',
    title: 'Professional Tier',
    description: 'Tailored for multi-branch distributors, transit yards, and commercial fleets.',
    price: '₦240,000',
    period: '/ month',
    billingNote: 'Priority SLA Activation Included',
    isNoteAccent: true,
    features: [
      'Up to 60 Active Team Seats',
      'Full ERP + VinciConnect CRM Suite',
      'Automated Bank Reconciliation & Webhooks',
      'Continuous Real-Time Cloud Replication',
      '24/7 Priority Support Hotline & Account Exec',
    ],
    ctaText: 'Deploy Professional Trial',
    isPopular: true,
    popularTopText: 'MOST POPULAR IN',
    popularBottomText: 'NIGERIA',
    ctaVariant: 'dark',
  },
  {
    id: 'enterprise',
    category: 'Conglomerates & Holdings',
    title: 'Sovereign Enterprise',
    description: 'Tailored for multinationals with multi-entity holdings and regional transit networks.',
    price: 'Custom Quote',
    billingNote: 'Sovereign Service Level Agreement',
    features: [
      'Unlimited Seats & Subsidiary Tenants',
      'Dedicated Tenant Kubernetes VPC',
      'Custom REST/GraphQL API Integration Pod',
      'On-Site Engineer Deployment (Nigeria & Sweden)',
      '99.99% Financially-Backed SLA Warranty',
    ],
    ctaText: 'Request C-Suite Proposal',
    ctaVariant: 'secondary',
  },
];

interface CapitalPredictabilityProps {
  onSelectTier?: (tierId: string) => void;
}

export default function CapitalPredictability({ onSelectTier }: CapitalPredictabilityProps) {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F2F3FF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 mb-2 font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase">
            <CircleDollarSign className="w-3.5 h-3.5" />
            <span>DOMESTIC CAPITAL PREDICTABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
            Transparent Corporate Deployment Tiers
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No unexpected currency conversions. All plans are backed by our Centenary City support center
            and Tier-3 cloud uptime SLA.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto items-stretch">
          {tiers.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`bg-white rounded-lg p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.isPopular
                    ? 'border-2 border-[#8C5324]/80 shadow-xl ring-1 ring-[#8C5324]/20'
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Floating "Most Popular" Pill */}
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#7B4F27] text-white text-[9.5px] font-bold tracking-wider px-4 py-1 rounded text-center leading-tight uppercase shadow-sm whitespace-nowrap">
                    <div>{tier.popularTopText}</div>
                    <div>{tier.popularBottomText}</div>
                  </div>
                )}

                <div>
                  {/* Category Eyebrow */}
                  <span
                    className={`text-[10.5px] font-mono font-bold tracking-wider uppercase block ${
                      tier.isPopular ? 'text-[#8C5324] mt-1' : 'text-slate-600'
                    }`}
                  >
                    {tier.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-1 tracking-tight">
                    {tier.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Price & Billing Note */}
                  <div className="mt-5 mb-5 pb-5 border-b border-slate-100">
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-xs sm:text-sm font-normal text-slate-500 ml-2">
                          {tier.period}
                        </span>
                      )}
                    </div>
                    <p
                      className={`text-[11px] mt-1.5 ${
                        tier.isNoteAccent
                          ? 'text-[#8C5324] font-medium'
                          : 'text-slate-500'
                      }`}
                    >
                      {tier.billingNote}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-700 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-snug">
                        <CheckCircle2
                          className="w-4 h-4 text-[#8C5324] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className={tier.isPopular && idx === 0 ? 'font-semibold text-slate-900' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-2 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectTier?.(tier.id)}
                    className={`w-full py-3 px-4 rounded-md text-xs sm:text-sm font-semibold transition-all duration-200 text-center shadow-xs ${
                      tier.ctaVariant === 'dark'
                        ? 'bg-[#0D1C32] hover:bg-[#1E293B] text-white shadow-sm'
                        : 'bg-[#EEF2FC] hover:bg-[#E2E8F8] text-[#0F172A] border border-slate-200/80'
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
