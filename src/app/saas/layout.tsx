import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Cloud SaaS & Multi-Tenant Systems Architecture',
  description:
    'Vinci SaaS delivers scalable cloud enterprise resource planning (ERP), retail POS inventory synchronization, and high-availability digital transformation software.',
  keywords: [
    'Cloud ERP Nigeria',
    'Enterprise POS inventory sync',
    'Multi-tenant cloud platform',
    'SaaS architecture Africa',
    'Vinci SaaS',
  ],
  alternates: {
    canonical: '/saas',
  },
  openGraph: {
    title: 'Vinci SaaS | Scalable Enterprise Cloud & Operational ERP',
    description:
      'Engineered cloud ecosystems optimizing multi-branch logistics, real-time inventory reconciliation, and mission-critical workflows.',
    url: '/saas',
    images: [{ url: '/images/vinci_asset_004.jpg', width: 1200, height: 630, alt: 'Vinci SaaS Cloud Enterprise' }],
  },
};

export default function SaaSLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
