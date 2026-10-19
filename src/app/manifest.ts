import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vinci & Vee Group - Holding Conglomerate',
    short_name: 'Vinci & Vee',
    description:
      'Multi-sector corporate holding conglomerate delivering solutions across Telecom & Fibre, Maritime Logistics, Wholesale Tyres, Enterprise SaaS, and Construction.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#0F172A',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
