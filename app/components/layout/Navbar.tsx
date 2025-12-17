'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { EVENT_DATES } from '@/app/constants';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgrammeOpen, setIsProgrammeOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Programme',
      href: '/programme',
      hasDropdown: true,
      subItems: [
        { label: 'Programme Overview', href: '/programme' },
        { label: 'Theme & Objectives', href: '/theme' },
        { label: 'Speakers', href: '/speakers' },
        { label: 'Innovation Expo', href: '/expo' },
      ]
    },
    { label: 'Media Center', href: '/media' },
    { label: 'Travel Info', href: '/travel' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 shadow-[0_10px_45px_-25px_rgba(15,23,42,0.45)]" role="navigation" aria-label="Main navigation">
      <div className="absolute inset-0 bg-gradient-to-r from-sky-50/60 via-white/40 to-emerald-50/60 pointer-events-none" aria-hidden />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="National Digital Innovation Week home">
            <div className="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-900 via-sky-700 to-emerald-500 p-[2px] shadow-lg shadow-blue-900/20">
              <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-white text-blue-900 font-bold group-hover:scale-105 transition-transform">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-900 via-sky-700 to-emerald-600">NDI</span>
              </div>
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 animate-pulse ring-2 ring-white" aria-hidden />
            </div>
            <div className="hidden lg:block leading-tight">
              <div className="text-sm font-bold text-blue-900">National Digital</div>
              <div className="text-xs text-slate-600">Innovation Week · The Gambia</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const isSubActive = item.subItems?.some(sub => pathname === sub.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setIsProgrammeOpen(true)}
                    onMouseLeave={() => setIsProgrammeOpen(false)}
                  >
                    <button
                      className={`relative px-3 py-2 text-sm font-semibold rounded-xl transition-colors flex items-center gap-1 ${
                        isActive || isSubActive
                          ? 'text-blue-900'
                          : 'text-slate-600 hover:text-blue-900'
                      }`}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span className={`absolute left-3 right-3 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all ${isActive || isSubActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-70 group-hover:scale-100'}`} aria-hidden />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 py-2">
                        {item.subItems?.map((subItem) => {
                          const isSubItemActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors rounded-lg mx-2 ${
                                isSubItemActive
                                  ? 'bg-gradient-to-r from-sky-50 to-emerald-50 text-blue-900 font-semibold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'text-blue-900'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {item.label}
                  <span className={`absolute left-2 right-2 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 hover:opacity-70 hover:scale-100'}`} aria-hidden />
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="hidden xl:flex items-center px-3 py-2 rounded-full bg-gradient-to-r from-sky-500/15 to-emerald-400/15 text-xs font-semibold text-blue-900 border border-white/60 shadow-inner shadow-white/30">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse" aria-hidden />
              {EVENT_DATES.fullDisplay}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2.5 border border-blue-800/80 text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors backdrop-blur"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-900 via-sky-800 to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/40 transition"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubActive = item.subItems?.some(sub => pathname === sub.href);

                if (item.hasDropdown) {
                  return (
                    <div key={item.href} className="rounded-xl bg-white/70 backdrop-blur px-2 py-1 border border-slate-100">
                      <button
                        onClick={() => setIsProgrammeOpen(!isProgrammeOpen)}
                        className={`w-full px-3 py-2 text-base font-semibold rounded-md transition-colors flex items-center justify-between ${
                          isActive || isSubActive
                            ? 'text-blue-900'
                            : 'text-slate-700 hover:text-blue-900'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${isProgrammeOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Submenu */}
                      {isProgrammeOpen && (
                        <div className="ml-3 mt-2 space-y-1">
                          {item.subItems?.map((subItem) => {
                            const isSubItemActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                  isSubItemActive
                                    ? 'bg-sky-50 text-blue-900 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-100 hover:text-blue-900'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2 text-base font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-blue-900'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-100'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="mx-4 px-6 py-3 border border-blue-800/70 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/registration"
                  className="mx-4 px-6 py-3 bg-gradient-to-r from-blue-900 via-sky-800 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-900/30 transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
