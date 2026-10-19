'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import B2BQuoteModal from '@/components/ui/B2BQuoteModal';
import { 
  Wifi, 
  Activity, 
  Zap, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Layers, 
  Globe2 
} from 'lucide-react';

import TelecomHero from '@/components/sections/telecom/TelecomHero';
import TelecomCapabilities from '@/components/sections/telecom/TelecomCapabilities';
import TelecomStandards from '@/components/sections/telecom/TelecomStandards';
import TelecomTender from '@/components/sections/telecom/TelecomTender';

export default function TelecomPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 flex flex-col font-sans">
      <main className="flex-grow">
        
        {/* TELECOM HERO SECTION */}
        <TelecomHero onOpenSurvey={() => setQuoteOpen(true)} />

        {/* STRATEGIC OPTICAL INFRASTRUCTURE CAPABILITIES */}
        <TelecomCapabilities />

        {/* PRECISION ENGINEERING STANDARDS */}
        <TelecomStandards />

        {/* DISPATCH & TENDER */}
        <TelecomTender />
      </main>

      <Footer />
      <B2BQuoteModal 
        isOpen={quoteOpen} 
        onClose={() => setQuoteOpen(false)} 
        defaultSector="Vinci Telecom" 
      />
    </div>
  );
}
