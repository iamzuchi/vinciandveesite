'use client';

import React from 'react';
import { Ship, Plane, ShieldCheck, Truck, ChevronRight } from 'lucide-react';

interface ServiceCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
}

const services: ServiceCard[] = [
  {
    id: 'rhine-intermodal',
    icon: Ship,
    title: 'Rhine-Intermodal & Ocean Consolidation',
    description:
      'Scheduled multimodal consolidation via Basel Rhine container barges connecting European seaports to West Africa.',
    tag: 'Weekly Basel Rhine Barge',
  },
  {
    id: 'air-express',
    icon: Plane,
    title: 'Swiss Air Express',
    description:
      'Direct priority air freight from Zurich (ZRH) and Geneva (GVA) arriving Lagos in 2 to 4 business days.',
    tag: 'Daily Zurich & Geneva Flights',
  },
  {
    id: 'customs-escrow',
    icon: ShieldCheck,
    title: 'Customs Brokerage & Escrow',
    description:
      'EUR.1 Swiss movement certificates, Form M, PAAR compliance, and guaranteed zero-demurrage protocol.',
    tag: 'EUR.1 & Form M Escrowed',
  },
  {
    id: 'bonded-trucking',
    icon: Truck,
    title: 'Door-to-Door Bonded Trucking',
    description:
      'Intermodal GPS-escorted transit straight from Nigerian ports to Jedidiah Gardens Centenary City, Enugu.',
    tag: 'GPS Escorted Routing',
  },
];

export default function ShippingServices() {
  return (
    <section id="shipping-services" className="py-16 sm:py-20 lg:py-24 bg-[#F1F1FB] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10 sm:mb-12">
          <div className="space-y-3">
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9B6E3B] uppercase block">
              BESPOKE SOVEREIGN OPERATIONS
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
              Swiss Freight Architecture
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed max-w-sm lg:pb-1">
            Engineered specifically for heavy machinery, precision Swiss engineering, pharmaceuticals, and
            high-value cargo.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ id, icon: Icon, title, description, tag }) => (
            <div
              key={id}
              id={`service-${id}`}
              className="bg-white border border-slate-200/90 rounded-sm p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-[#E9ECFA] flex items-center justify-center text-[#0F172A] mb-6 group-hover:bg-[#0F172A] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-[#0F172A] mb-3 leading-snug">{title}</h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{description}</p>
              </div>

              <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#9B6E3B]">
                <span>{tag}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#9B6E3B] group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
