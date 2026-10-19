import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Telecom & Fibre Optic Infrastructure',
  description:
    'Vinci Telecom provides high-capacity dark strand fibre, civil trenching, metro DWDM ring routing, and carrier-grade FTTH installations across Nigeria.',
  keywords: [
    'Dark fibre Nigeria',
    'Optical fibre cable deployment',
    'FTTH Centenary City',
    'Sub-surface trenching',
    'Carrier metro DWDM',
    'Vinci Telecom',
  ],
  alternates: {
    canonical: '/telecom',
  },
  openGraph: {
    title: 'Vinci Telecom | High-Capacity Dark Fibre & Optical Infrastructure',
    description:
      'Sub-surface route surveys, dark strand allocations, and carrier-grade metro ring redundancy across West Africa.',
    url: '/telecom',
    images: [{ url: '/images/pillar_telecom.png', width: 1200, height: 630, alt: 'Vinci Telecom Fibre' }],
  },
};

export default function TelecomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
