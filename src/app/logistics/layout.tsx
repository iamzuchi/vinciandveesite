import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Switzerland & Sweden Maritime Shipping & Logistics',
  description:
    'Vinci Logistics coordinates transatlantic and Nordic maritime freight forwarding linking Zurich, Gothenburg, and Lagos Apapa with guaranteed customs clearance.',
  keywords: [
    'Switzerland shipping to Nigeria',
    'Gothenburg Sweden Ro-Ro freight',
    'Apapa Port customs clearance',
    'Maritime logistics Lagos',
    'Vinci Logistics',
  ],
  alternates: {
    canonical: '/logistics',
  },
  openGraph: {
    title: 'Vinci Logistics | Transatlantic & Maritime Freight Corridors',
    description:
      'Direct commercial container booking and bonded customs clearance connecting European hubs to West African seaports.',
    url: '/logistics',
    images: [{ url: '/images/pillar_logistics.png', width: 1200, height: 630, alt: 'Vinci Logistics Maritime Freight' }],
  },
};

export default function LogisticsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
