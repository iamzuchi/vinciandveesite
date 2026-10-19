'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { PhoneCall, Menu, X } from 'lucide-react';

export default function Navigation({ onEngageHQ }: { onEngageHQ?: () => void }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Overview', href: '/' },
    { name: 'Telecom & Fibre', href: '/telecom' },
    { name: 'Switzerland Shipping', href: '/logistics' },
    { name: 'Tyre Distribution', href: '/tyres' },
    { name: 'Cloud SaaS', href: '/saas' },
    { name: 'Construction & Interiors', href: '/construction' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#EEF0F4] border-b border-slate-300/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-3.5 group flex-shrink-0">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 bg-white rounded-md border border-slate-300/80 p-1 shadow-xs flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:border-[#9B6E3B]/60 transition-colors">
              <Image
                src="/images/vinci_and_vee_logo_trimmed.png"
                alt="Vinci & Vee Group Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-[#0F172A] leading-tight tracking-tight group-hover:text-[#9B6E3B] transition-colors">
                Vinci &amp; Vee Group
              </span>
              <span className="text-[9.5px] sm:text-[10.5px] font-bold text-[#B88E58] tracking-widest uppercase">
                HOLDING CONGLOMERATE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-1 text-xs font-semibold transition-colors duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-[#9B6E3B]'
                      : 'text-slate-700 hover:text-[#0F172A]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#9B6E3B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:+2348109544821"
              className="bg-[#E2E6EF] hover:bg-[#D8DEEC] border border-slate-300/60 rounded-md px-3 py-1.5 flex items-center space-x-2 text-xs font-medium text-slate-800 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#9B6E3B]" />
              <span>0810 954 4821</span>
            </a>

            <button
              onClick={() => {
                if (onEngageHQ) {
                  onEngageHQ();
                } else {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-4 py-2 rounded-md text-xs font-semibold tracking-wide shadow-sm transition-colors whitespace-nowrap"
            >
              Engage Group HQ
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-200/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-300/80 bg-[#EEF0F4] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#E2E6EF] text-[#9B6E3B] border-l-4 border-[#9B6E3B]'
                      : 'text-slate-700 hover:bg-slate-200/60'
                  }`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-300/70 flex flex-col space-y-2">
            <a
              href="tel:+2348109544821"
              className="bg-[#E2E6EF] border border-slate-300/60 rounded-md px-3 py-2 flex items-center justify-center space-x-2 text-xs font-semibold text-slate-800"
            >
              <PhoneCall className="w-4 h-4 text-[#9B6E3B]" />
              <span>0810 954 4821</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onEngageHQ) {
                  onEngageHQ();
                } else {
                  const contactSec = document.getElementById('contact');
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="w-full py-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white rounded-md text-xs font-semibold text-center tracking-wide"
            >
              Engage Group HQ
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

