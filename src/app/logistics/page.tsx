'use client';

import React, { useState } from 'react';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import ShippingHero from '@/components/sections/shipping/ShippingHero';
import ShippingServices from '@/components/sections/shipping/ShippingServices';
import FreightEstimator from '@/components/sections/shipping/FreightEstimator';
import TransitMilestones from '@/components/sections/shipping/TransitMilestones';
import ConsignmentBooking from '@/components/sections/shipping/ConsignmentBooking';

export default function LogisticsPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* SHIPPING HERO */}
        <ShippingHero onCalculateTariff={() => setQuoteOpen(true)} />

        {/* SWISS FREIGHT ARCHITECTURE */}
        <ShippingServices />

        {/* DYNAMIC FREIGHT PRICING */}
        <FreightEstimator onLockRate={() => setQuoteOpen(true)} />

        {/* FIVE SOVEREIGN TRANSIT MILESTONES */}
        <div id="schedule">
          <TransitMilestones />
        </div>

        {/* CARGO CONSIGNMENT BOOKING */}
        <ConsignmentBooking />

      </main>

      <Footer />
      <B2BQuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultSector="Vinci Logistics" 
      />
    </div>
  );
}
