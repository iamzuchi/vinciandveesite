'use client';

import React from 'react';

interface Milestone {
  id: string;
  step: string;
  title: string;
  description: string;
  tag: string;
}

const milestones: Milestone[] = [
  {
    id: 'depot-dropoff',
    step: '01',
    title: 'Swiss Depot Drop-Off',
    description:
      'Consignment receipt at Zurich Airport Cargo City or Basel freight depot with barcode verification and digital itemization.',
    tag: 'Zurich / Basel Depot',
  },
  {
    id: 'bonded-packing',
    step: '02',
    title: 'Bonded Packing & Escrow',
    description:
      'Export compliance, security sealing, EUR.1 documentation, and tamper-evident geo-sealing.',
    tag: 'EUR.1 Compliance Check',
  },
  {
    id: 'transit',
    step: '03',
    title: 'Air & Maritime Transit',
    description:
      'Continuous satellite telemetry via Swiss-African logistics corridor across air routes and multimodal waters.',
    tag: '2–4 Days Air / 12–16 Days Multimodal',
  },
  {
    id: 'port-clearance',
    step: '04',
    title: 'Port Duty Clearance',
    description:
      'Direct customs release at Apapa / Tin Can Island. Zero demurrage liability backed by Group escrow facility.',
    tag: 'Fast-Track Escrow Release',
  },
  {
    id: 'handover',
    step: '05',
    title: 'Nationwide Handover',
    description:
      'Armored bonded escort directly to Jedidiah Gardens Centenary City, Enugu or verified corporate doorstep.',
    tag: 'Signed Proof of Handover',
  },
];

export default function TransitMilestones() {
  return (
    <section id="transit-milestones" className="py-16 sm:py-20 lg:py-24 bg-[#F1F1FB] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9B6E3B] uppercase block">
            DIRECT END-TO-END CUSTODY
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
            The Five Sovereign Transit Milestones
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every cubic meter of cargo remains under single-entity oversight from Swiss intake to physical
            handover in Nigeria.
          </p>
        </div>

        {/* Milestone cards */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {milestones.map((m) => (
            <li
              key={m.id}
              id={`milestone-${m.id}`}
              className="bg-white border border-slate-200/90 rounded-sm p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
            >
              <div>
                <span className="block text-sm font-semibold text-[#9B6E3B] mb-4 group-hover:text-[#7B5229] transition-colors">
                  {m.step}
                </span>
                <h3 className="font-bold text-base text-[#0F172A] mb-2.5 leading-snug">{m.title}</h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">{m.description}</p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 text-[11px] font-semibold text-[#0F172A] leading-snug">
                {m.tag}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
