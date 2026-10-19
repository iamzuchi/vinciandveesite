import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Executive Directorate & Corporate Governance',
  description:
    'Board leadership, capital stewardship, and sovereign multi-sector infrastructure governance of Vinci & Vee Group.',
  alternates: {
    canonical: '/executive',
  },
  openGraph: {
    title: 'Vinci & Vee Group | Executive Directorate & Sovereign Governance',
    description:
      'Strategic leadership guiding pan-African and transatlantic infrastructure ventures.',
    url: '/executive',
    images: [{ url: '/images/hero_matrix_cityscape.png', width: 1200, height: 630, alt: 'Vinci & Vee Executive' }],
  },
};

export default function ExecutiveLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
