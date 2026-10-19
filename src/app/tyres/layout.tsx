import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Radial Tyres Wholesale & Fleet Procurement',
  description:
    'Vinci Tyres operates direct wholesale depots delivering premium commercial truck radials, fleet consignment bulk supply, and dealer accreditation throughout Nigeria.',
  keywords: [
    'Commercial truck tyres Nigeria',
    '315/80R22.5 wholesale tyres',
    'Heavy fleet radial tyres',
    'Tyre distributor Enugu Lagos',
    'Vinci Tyres',
  ],
  alternates: {
    canonical: '/tyres',
  },
  openGraph: {
    title: 'Vinci Tyres | Commercial Fleet Radials & Wholesale Depot',
    description:
      'Direct factory wholesale supply and fleet tyre lifecycle engineering for heavy haulage and commercial operators.',
    url: '/tyres',
    images: [{ url: '/images/vinci_asset_001.jpg', width: 1200, height: 630, alt: 'Vinci Tyres Wholesale' }],
  },
};

export default function TyresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
