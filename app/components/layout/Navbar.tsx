'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

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
    <nav className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-xl shadow-md shadow-emerald-900/5" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3" aria-label="National Digital Innovation Week home">
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl ring-2 ring-white/70 shadow-lg shadow-emerald-900/20 transition group-hover:scale-105">
              <div className="absolute inset-0 grid grid-rows-5">
                <span className="bg-red-600/90" />
                <span className="bg-white" />
                <span className="bg-blue-700" />
                <span className="bg-white" />
                <span className="bg-green-600/90" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-emerald-200/30" />
            </div>
            <div className="hidden lg:block leading-tight">
              <div className="text-sm font-extrabold text-slate-900">National Digital</div>
              <div className="text-xs font-semibold text-emerald-700">Innovation Week • The Gambia</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-1 lg:flex">
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
                      className={`flex items-center px-3 py-2 text-sm font-semibold transition ${
                        isActive || isSubActive
                          ? 'text-emerald-700'
                          : 'text-slate-700 hover:text-emerald-700'
                      }`}
                    >
                      {item.label}
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-0 mt-2 w-56 rounded-2xl border border-slate-100 bg-white/95 p-2 opacity-0 shadow-2xl shadow-emerald-900/10 backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.subItems?.map((subItem) => {
                        const isSubItemActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block rounded-xl px-4 py-2 text-sm transition ${
                              isSubItemActive
                                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                                : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'text-emerald-700'
                      : 'text-slate-700 hover:text-emerald-700'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && <span className="absolute inset-x-2 -bottom-1 block h-0.5 rounded-full bg-gradient-to-r from-red-500 via-blue-600 to-green-500" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center space-x-3 lg:flex">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border-2 border-emerald-600 px-5 py-2 text-sm font-semibold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-red-500 via-blue-600 to-green-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:shadow-emerald-900/30"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 lg:hidden"
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
                <path d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-slate-100 bg-white/90 py-4 backdrop-blur lg:hidden">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubActive = item.subItems?.some(sub => pathname === sub.href);

                if (item.hasDropdown) {
                  return (
                    <div key={item.href} className="rounded-xl border border-slate-100 bg-slate-50/60">
                      <button
                        onClick={() => setIsProgrammeOpen(!isProgrammeOpen)}
                        className={`flex w-full items-center justify-between px-4 py-3 text-base font-semibold transition ${
                          isActive || isSubActive
                            ? 'text-emerald-700'
                            : 'text-slate-700'
                        }`}
                      >
                        {item.label}
                        <svg
                          className={`h-4 w-4 transition-transform ${isProgrammeOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Submenu */}
                      {isProgrammeOpen && (
                        <div className="border-t border-slate-100 bg-white/90 px-2 py-2">
                          {item.subItems?.map((subItem) => {
                            const isSubItemActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block rounded-lg px-4 py-2 text-sm transition ${
                                  isSubItemActive
                                    ? 'bg-emerald-50 text-emerald-800 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-emerald-700'
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
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-800'
                        : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA Buttons */}
              <div className="space-y-2 pt-4">
                <Link
                  href="/contact"
                  className="mx-4 block rounded-lg border-2 border-emerald-600 px-6 py-3 text-center font-semibold text-emerald-700 transition hover:bg-emerald-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/registration"
                  className="mx-4 block rounded-lg bg-gradient-to-r from-red-500 via-blue-600 to-green-500 px-6 py-3 text-center font-semibold text-white shadow-md shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:shadow-emerald-900/25"
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
