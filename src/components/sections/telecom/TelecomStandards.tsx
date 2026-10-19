'use client';

import React from 'react';

interface SpecRow {
  id: string;
  parameter: string;
  dia: string;
  darkFibre: string;
  ftth: string;
  protocol: string;
  emphasis?: boolean;
}

const columns = [
  'Technical Parameter',
  'Enterprise Dedicated (DIA)',
  'Carrier Dark Fibre Lease',
  'FTTH Residential Estate',
  'Testing Protocol',
];

const rows: SpecRow[] = [
  {
    id: 'core-standard',
    parameter: 'Core Optical Standard',
    dia: 'ITU-T G.652.D Low Water Peak',
    darkFibre: 'ITU-T G.657.A2 Bend Insensitive',
    ftth: 'ITU-T G.657.A1 / A2 Drop Cable',
    protocol: 'Spectral Dispersion Meter',
  },
  {
    id: 'attenuation',
    parameter: 'Attenuation Target (1310/1550nm)',
    dia: '≤ 0.32 / ≤ 0.19 dB/km',
    darkFibre: '≤ 0.30 / ≤ 0.18 dB/km',
    ftth: '≤ 0.35 / ≤ 0.22 dB/km',
    protocol: 'Bidirectional OTDR Trace',
  },
  {
    id: 'splice-loss',
    parameter: 'Fusion Splice Insertion Loss',
    dia: '≤ 0.02 dB per joint',
    darkFibre: '≤ 0.015 dB per joint',
    ftth: '≤ 0.04 dB per joint',
    protocol: 'Fujikura FSM-90S Loss Est.',
  },
  {
    id: 'cir',
    parameter: 'Guaranteed CIR Contention Ratio',
    dia: '1:1 Dedicated Symmetrical',
    darkFibre: 'Unmetered Light Path',
    ftth: '1:4 or 1:8 GPON Split',
    protocol: 'RFC 2544 Gigabit Tester',
    emphasis: true,
  },
  {
    id: 'mttr',
    parameter: 'Mean Time to Repair (MTTR)',
    dia: '≤ 2 Hours (24/7 Crew)',
    darkFibre: '≤ 4 Hours',
    ftth: '≤ 6 Hours',
    protocol: 'NOC Emergency Dispatch',
    emphasis: true,
  },
  {
    id: 'duct',
    parameter: 'Duct Mechanical Protection',
    dia: 'Double-Sheathed Armoured Steel',
    darkFibre: 'Subterranean HDPE 40mm',
    ftth: 'UV Resistant FRP Armoured',
    protocol: 'Crush Test ISO 9001',
  },
  {
    id: 'handoff',
    parameter: 'Handoff Interface',
    dia: 'LC/UPC SFP+ / QSFP28',
    darkFibre: 'Optical Patch Panel (ODF)',
    ftth: 'SC/APC Single Port ONT',
    protocol: 'Microscope Fiber Scope',
  },
];

export default function TelecomStandards() {
  return (
    <section
      id="telecom-standards"
      className="py-16 sm:py-20 lg:py-24 bg-[#F4F5F9] border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-3">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#9B6E3B] uppercase block">
            PRECISION ENGINEERING STANDARDS
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] tracking-tight leading-tight">
            Optical Specifications &amp; Carrier SLA Matrix
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
            Every metre of duct and optical strand is deployed according to ITU-T international
            recommendations and stringent IEEE carrier standards.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="bg-white border border-slate-200/90 rounded-md shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left border-collapse">
              <thead>
                <tr className="bg-[#E6EBFA] border-b border-slate-200">
                  {columns.map((col) => (
                    <th
                      key={col}
                      scope="col"
                      className="px-5 py-4 text-xs sm:text-sm font-semibold text-[#0F172A] whitespace-nowrap"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const cell = row.emphasis
                    ? 'font-semibold text-[#0F172A]'
                    : 'text-slate-600';
                  return (
                    <tr
                      key={row.id}
                      id={`spec-row-${row.id}`}
                      className="border-b border-slate-100 last:border-b-0 hover:bg-[#FAFBFD] transition-colors duration-150 group"
                    >
                      <th
                        scope="row"
                        className="px-5 py-4 text-xs font-semibold text-[#0F172A] max-w-[180px] leading-snug"
                      >
                        {row.parameter}
                      </th>
                      <td className={`px-5 py-4 text-xs leading-relaxed ${cell}`}>{row.dia}</td>
                      <td className={`px-5 py-4 text-xs leading-relaxed ${cell}`}>{row.darkFibre}</td>
                      <td className={`px-5 py-4 text-xs leading-relaxed ${cell}`}>{row.ftth}</td>
                      <td className="px-5 py-4 text-[10px] sm:text-[11px] font-mono text-[#9B6E3B] group-hover:text-[#0F172A] transition-colors leading-relaxed">
                        {row.protocol}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
