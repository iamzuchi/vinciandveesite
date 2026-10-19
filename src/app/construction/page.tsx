'use client';

import React, { useState } from 'react';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import ConstructionHero from '@/components/sections/construction/ConstructionHero';
import DisciplinedMethodology from '@/components/sections/construction/DisciplinedMethodology';
import AssetRegister from '@/components/sections/construction/AssetRegister';
import CapitalBudgetPlanning from '@/components/sections/construction/CapitalBudgetPlanning';
import ExecutiveProjectDesk from '@/components/sections/construction/ExecutiveProjectDesk';

export default function ConstructionPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* CONSTRUCTION HERO */}
        <ConstructionHero
          onEstimateCapital={() => {
            const el = document.getElementById('estimator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else setQuoteOpen(true);
          }}
          onExplorePortfolio={() => {
            const el = document.getElementById('portfolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            else setQuoteOpen(true);
          }}
        />

        {/* DISCIPLINED METHODOLOGY (THE 4 INSTITUTIONAL PILLARS) */}
        <DisciplinedMethodology />

        {/* CONGLOMERATE ASSET REGISTER */}
        <AssetRegister />

        {/* CAPITAL BUDGET PLANNING & ESTIMATOR */}
        <CapitalBudgetPlanning 
          onLockEstimate={() => {
            setQuoteOpen(true);
          }}
        />

        {/* EXECUTIVE PROJECT DESK (CENTENARY CITY ENGINEERING BUREAU) */}
        <ExecutiveProjectDesk />

      </main>

      <Footer />
      <B2BQuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultSector="Construction & Design" 
      />
    </div>
  );
}
