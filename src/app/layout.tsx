import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinci & Vee Group - Holding Conglomerate",
  description: "Achieving Dreams By Making Connection across Telecom, Logistics, Tyres, SaaS, and Construction.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}

