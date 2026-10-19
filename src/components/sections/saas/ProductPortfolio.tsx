'use client';

import React from 'react';
import { 
  LayoutGrid, 
  Workflow, 
  Headphones, 
  Truck, 
  Shield, 
  Check, 
  ArrowRight 
} from 'lucide-react';

interface ProductItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  description: string;
  features: string[];
  linkText: string;
}

const products: ProductItem[] = [
  {
    id: 'vinciflow',
    icon: Workflow,
    tag: 'Small & Large Businesses',
    title: 'VinciFlow ERP',
    description:
      'Unified inventory and finance backbone tailored for retail networks, distribution depots, and factories.',
    features: [
      'Multi-warehouse real-time sync',
      'Barcode scanning & mobile POS billing',
      'Automated PO dispatch & supplier portal',
      'Wholesale order ledger reconciliation',
    ],
    linkText: 'Explore VinciFlow',
  },
  {
    id: 'vinciconnect',
    icon: Headphones,
    tag: 'Small & Large Businesses',
    title: 'VinciConnect CRM',
    description:
      'Field telemetry and customer relationship management engine driving commercial conversion.',
    features: [
      'Multi-channel customer unified inbox',
      'Field team GPS tracking & check-in logs',
      'Automated WhatsApp/SMS quotation routing',
      'Predictive lead lifecycle scoring',
    ],
    linkText: 'Explore VinciConnect',
  },
  {
    id: 'vincilogistics',
    icon: Truck,
    tag: 'Freight & Cross-Border Transport',
    title: 'VinciLogistics Suite',
    description:
      'Global supply chain routing from Scandinavian ports to African dry ports and regional depots.',
    features: [
      'Real-time container & fleet telemetry',
      'Sweden-to-Nigeria bill of lading manifests',
      'Automated port customs clearance escrow',
      'Last-mile carrier route optimization',
    ],
    linkText: 'Explore Logistics Suite',
  },
  {
    id: 'cloudsec',
    icon: Shield,
    tag: 'Large Enterprises & Government',
    title: 'CloudSec & Custom API',
    description:
      'Private cloud tenant provisioning, sovereignty safeguards, and deep legacy software adapters.',
    features: [
      'Dedicated Kubernetes container clusters',
      'Bespoke REST & GraphQL core interfaces',
      'On-premises or Nigerian regional VPC',
      'Disaster recovery RPO < 60 seconds',
    ],
    linkText: 'Consult Architects',
  },
];

interface ProductPortfolioProps {
  onSelectProduct?: (productId: string) => void;
}

export default function ProductPortfolio({ onSelectProduct }: ProductPortfolioProps) {
  return (
    <section id="cloud-saas" className="py-16 sm:py-20 bg-[#F2F3FF] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 mb-2 font-mono text-[11px] sm:text-xs font-bold tracking-[0.16em] text-[#8C5324] uppercase">
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Corporate Product Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0F172A] tracking-tight leading-tight">
              The Vinci Cloud Modular Ecosystem
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              Engineered for dynamic commercial scale. Deploy individual engines or an integrated
              end-to-end holding operating system.
            </p>
          </div>

          <div className="mt-2 md:mt-0 shrink-0">
            <span className="font-mono text-xs text-[#131B2E] bg-[#EAEDFF] px-3.5 py-1.5 rounded-md border border-[#C5C6CD]/50 font-semibold inline-block">
              Architecture: Microservices on Kubernetes
            </span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="bg-white rounded-lg p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-md bg-[#EAEDFF] border border-[#DAE2FD] flex items-center justify-center text-[#8C5324] mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Target Audience Tag */}
                  <div className="inline-block px-2.5 py-0.5 rounded text-[10.5px] font-semibold text-[#8C5324] bg-[#FDF6F0] border border-[#E8D4C4] mb-3">
                    {product.tag}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-[#0F172A] mb-2 leading-snug">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5 min-h-[48px]">
                    {product.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-4 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-tight">
                        <Check className="w-3.5 h-3.5 text-[#8C5324] shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <button
                    type="button"
                    onClick={() => onSelectProduct?.(product.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C5324] hover:text-[#6E3F1A] transition-colors group-hover:translate-x-0.5 transform duration-150"
                  >
                    <span>{product.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
