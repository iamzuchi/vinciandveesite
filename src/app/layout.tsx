import type { Metadata, Viewport } from "next";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vinciandvee.com";

export const viewport: Viewport = {
  themeColor: "#0F172A",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vinci & Vee Group | Multi-Sector Holding Conglomerate",
    template: "%s | Vinci & Vee Group",
  },
  description:
    "Vinci & Vee Group is a multi-sector holding conglomerate delivering critical infrastructure across Telecommunications & Fibre Optic, Maritime Shipping & Logistics, Commercial Tyre Distribution, Enterprise Cloud SaaS, and Construction & Real Estate.",
  keywords: [
    "Vinci and Vee Group",
    "Holding Conglomerate Nigeria",
    "Fibre Optic Installation Nigeria",
    "Dark Strand Fibre Lagos Enugu",
    "Sub-surface Trenching",
    "Sweden Shipping Nigeria",
    "Switzerland Maritime Freight Logistics",
    "Commercial Truck Tyres Wholesale",
    "Fleet Radial Tyres Depot",
    "Enterprise Cloud SaaS ERP",
    "Civil Engineering Construction Nigeria",
    "Centenary City Enugu Developments",
    "Vinci Telecom",
    "Vinci Tyres",
    "Vinci Logistics",
    "Vinci SaaS",
    "Vinci and Vee Construction",
  ],
  authors: [{ name: "Vinci & Vee Group Secretariat" }],
  creator: "Vinci & Vee Group",
  publisher: "Vinci & Vee Group",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vinci & Vee Group | Strategic Global Infrastructure & Scaled Ventures",
    description:
      "Achieving Dreams by making Connection. Multi-sector conglomerate spanning Telecom, Maritime Logistics, Tyres, SaaS, and Construction.",
    url: siteUrl,
    siteName: "Vinci & Vee Group",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_matrix_cityscape.png",
        width: 1200,
        height: 630,
        alt: "Vinci & Vee Group - Sovereign Multi-Sector Conglomerate Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinci & Vee Group | Strategic Global Infrastructure",
    description:
      "Achieving Dreams by making Connection across Telecom, Maritime Logistics, Tyres, SaaS, and Construction.",
    images: ["/images/hero_matrix_cityscape.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#0F172A",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

// Organization & Holding Company Schema for Rich Google Knowledge Panel
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "Vinci and Vee Group",
  alternateName: ["Vinci & Vee", "Vinci & Vee Group Holding Conglomerate"],
  url: siteUrl,
  logo: `${siteUrl}/images/vinci_and_vee_logo_transparent.png`,
  image: `${siteUrl}/images/hero_matrix_cityscape.png`,
  description:
    "Diversified technology and infrastructure holding conglomerate operating across fibre optic telecom deployment, cloud SaaS, commercial tyre supply, and civil construction.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 80, Jedidiah Gardens, Centenary City",
    addressLocality: "Enugu",
    postalCode: "400706",
    addressCountry: "NG",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+2348109544821",
      contactType: "customer service",
      contactOption: "TollFree",
      areaServed: ["NG", "CH", "SE"],
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+2349074168502",
      contactType: "technical support",
      areaServed: "NG",
      availableLanguage: ["English"],
    },
  ],
  department: [
    {
      "@type": "Organization",
      name: "Vinci Telecom",
      description: "Sub-surface dark fibre networks, optical cable deployment, and FTTH infrastructure.",
    },
    {
      "@type": "Organization",
      name: "Vinci Logistics",
      description: "Transatlantic maritime cargo freight forwarding connecting Zurich, Gothenburg, and Lagos Apapa ports.",
    },
    {
      "@type": "Organization",
      name: "Vinci Tyres",
      description: "Heavy-duty commercial radial truck tyres and nationwide fleet procurement depots.",
    },
    {
      "@type": "Organization",
      name: "Vinci SaaS",
      description: "Scalable cloud-based enterprise ERP, POS sync, and multi-tenant systems.",
    },
    {
      "@type": "Organization",
      name: "Vinci & Vee Construction",
      description: "Turnkey residential and commercial civil engineering developments in Centenary City.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
