import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Civil Engineering, Turnkey Construction & Interior Architecture',
  description:
    'Vinci & Vee Construction delivers premium residential and commercial projects, civil structural engineering, and turnkey luxury interior fit-outs in Centenary City and nationwide.',
  keywords: [
    'Construction company Centenary City Enugu',
    'Civil engineering Nigeria',
    'Turnkey residential developers',
    'Luxury interior architecture',
    'Vinci and Vee Construction',
  ],
  alternates: {
    canonical: '/construction',
  },
  openGraph: {
    title: 'Vinci & Vee Construction | Disciplined Engineering & Real Estate',
    description:
      'Turnkey civil engineering, commercial developments, and bespoke architectural finishes built to enduring European standards.',
    url: '/construction',
    images: [{ url: '/images/vinci_asset_006.jpg', width: 1200, height: 630, alt: 'Vinci and Vee Construction' }],
  },
};

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
