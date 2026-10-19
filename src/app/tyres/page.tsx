'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import {
  Disc,
  Truck,
  Search,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package,
  Calculator
} from 'lucide-react';
import TyreHero from '@/components/sections/tyres/TyreHero';
import InventoryLocator from '@/components/sections/tyres/InventoryLocator';
import ManufacturingSpecs from '@/components/sections/tyres/ManufacturingSpecs';
import CommercialPartnership from '@/components/sections/tyres/CommercialPartnership';
import RegionalLogisticsAnchor from '@/components/sections/tyres/RegionalLogisticsAnchor';
import RequisitionPortal from '@/components/sections/tyres/RequisitionPortal';

export default function TyresPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const tyreProducts = [
    {
      id: 1,
      title: 'Passenger Car Radials (PCR)',
      desc: 'High-performance silica tread compound for passenger cars with wet grip channel sipes.',
      img: '/images/vinci_asset_006.jpg',
      category: 'PCR',
      sku: '205/55R16 • 225/45R17'
    },
    {
      id: 2,
      title: 'SUV & 4x4 All-Terrain Tyres',
      desc: 'Aggressive block shoulders and stone ejector channels for rugged off-road multi-surface performance.',
      img: '/images/vinci_asset_007.jpg',
      category: 'SUV',
      sku: '265/65R17 • 285/70R17'
    },
    {
      id: 3,
      title: 'Commercial Truck & Bus Radials (TBR)',
      desc: 'Heavy-duty steel-belted radial tyres engineered for long-haul highway tonnage and fleet retreadability.',
      img: '/images/vinci_asset_008.jpg',
      category: 'TBR',
      sku: '315/80R22.5 • 12.00R20'
    },
    {
      id: 4,
      title: 'Industrial & Heavy OTR Tyres',
      desc: 'Deep tread depth for mining trucks, articulated dump trucks, wheel loaders, and container handlers.',
      img: '/images/vinci_asset_009.jpg',
      category: 'OTR',
      sku: '23.5R25 • 29.5R25'
    },
    {
      id: 5,
      title: 'Enugu Logistics Central Depot Bulk',
      desc: 'Direct container-load wholesale distribution facility in Enugu supplying commercial fleets and retailers.',
      img: '/images/vinci_asset_005.jpg',
      category: 'TBR',
      sku: 'Wholesale Depot Container Loads'
    },
    {
      id: 6,
      title: 'Automotive Distribution Warehouse',
      desc: 'High-bay automated distribution racking system ensuring rapid order fulfillment across West Africa.',
      img: '/images/vinci_asset_004.jpg',
      category: 'PCR',
      sku: 'Central Warehouse Stock'
    },
  ];

  const filtered = selectedCategory === 'ALL'
    ? tyreProducts
    : tyreProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">

        {/* TYRES HERO */}
        <TyreHero onDealerPricing={() => setQuoteOpen(true)} />

        {/* RAPID WHOLESALE INVENTORY LOCATOR */}
        <InventoryLocator onReserve={() => setQuoteOpen(true)} />

        {/* TIER-1 MANUFACTURING SPECIFICATIONS */}
        <ManufacturingSpecs
          onOrder={(catId) => {
            const map: Record<string, string> = {
              pcr: 'PCR',
              suv: 'SUV',
              tbr: 'TBR',
              otr: 'OTR',
            };
            if (map[catId]) {
              setSelectedCategory(map[catId]);
            }
            setQuoteOpen(true);
          }}
        />

        {/* COMMERCIAL PARTNERSHIP FRAMEWORK */}
        <CommercialPartnership
          onApply={() => {
            setQuoteOpen(true);
          }}
        />

        {/* REGIONAL LOGISTICS ANCHOR */}
        <RegionalLogisticsAnchor
          onContactClick={() => {
            setQuoteOpen(true);
          }}
        />

        {/* OFFICIAL REQUISITION PORTAL */}
        <RequisitionPortal />

      </main>

      <Footer />
      <B2BQuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        defaultSector="Vinci Tyres"
      />
    </div>
  );
}
