'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import { 
  Cloud, 
  Server, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Terminal 
} from 'lucide-react';
import SaaSHero from '@/components/sections/saas/SaaSHero';
import ProductPortfolio from '@/components/sections/saas/ProductPortfolio';
import ScalabilityMatrix from '@/components/sections/saas/ScalabilityMatrix';
import CapitalPredictability from '@/components/sections/saas/CapitalPredictability';
import InfrastructureSpecs from '@/components/sections/saas/InfrastructureSpecs';
import ArchitectureConsultation from '@/components/sections/saas/ArchitectureConsultation';

export default function SaaSPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* SAAS HERO */}
        <SaaSHero
          onTrialClick={() => setQuoteOpen(true)}
          onDemoClick={() => setQuoteOpen(true)}
        />

        {/* CORPORATE PRODUCT PORTFOLIO */}
        <ProductPortfolio
          onSelectProduct={() => {
            setQuoteOpen(true);
          }}
        />

        {/* SCALABILITY MATRIX */}
        <ScalabilityMatrix
          onSmallBusinessClick={() => {
            setQuoteOpen(true);
          }}
          onEnterpriseClick={() => {
            setQuoteOpen(true);
          }}
        />

        {/* DOMESTIC CAPITAL PREDICTABILITY */}
        <CapitalPredictability
          onSelectTier={() => {
            setQuoteOpen(true);
          }}
        />

        {/* INFRASTRUCTURE SPECIFICATION */}
        <InfrastructureSpecs />

        {/* CONSULTATIVE ARCHITECTURE DESK */}
        <ArchitectureConsultation />

      </main>

      <Footer />
      <B2BQuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultSector="Vinci SaaS" 
      />
    </div>
  );
}
