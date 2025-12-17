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
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 shadow-[0_10px_40px_-24px_rgba(30,64,175,0.45)] border-b border-white/60" role="navigation" aria-label="Main navigation">
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-sky-400 via-blue-700 to-indigo-600" aria-hidden="true" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="National Digital Innovation Week home">
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 shadow-lg overflow-hidden transition-transform group-hover:scale-105">
              <span className="absolute inset-0 bg-white/10 mix-blend-overlay" aria-hidden="true" />
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_50%)]" aria-hidden="true" />
              <span className="relative flex h-full items-center justify-center text-white font-semibold tracking-wide">NDIW</span>
            </div>
            <div className="hidden lg:block leading-tight">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-500">The Gambia</div>
              <div className="text-sm font-semibold text-blue-900">National Digital Innovation Week</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
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
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center gap-2 ${
                        isActive || isSubActive
                          ? 'bg-gradient-to-r from-blue-800 to-sky-700 text-white shadow-lg shadow-blue-200/50'
                          : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                      }`}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-1 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-50 py-2 ring-1 ring-blue-100">
                        {item.subItems?.map((subItem) => {
                          const isSubItemActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isSubItemActive
                                  ? 'bg-blue-50 text-blue-800 font-semibold'
                                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-800'
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
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive
                      ? 'text-blue-900'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && <span className="absolute inset-0 rounded-full bg-blue-100/80 -z-0" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 border border-blue-200 text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-sm"
            >
              {/* <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> */}
              Become a Sponsor
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-blue-800 via-blue-700 to-sky-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-200/70 transition-all"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <div className="lg:hidden py-4 border-t border-blue-50 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl mt-2">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubActive = item.subItems?.some(sub => pathname === sub.href);
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsProgrammeOpen(!isProgrammeOpen)}
                        className={`w-full px-4 py-2 text-base font-semibold rounded-xl transition-colors flex items-center justify-between ${
                          isActive || isSubActive
                            ? 'bg-blue-800 text-white shadow-lg shadow-blue-200/70'
                            : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
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
                        <div className="ml-4 mt-2 space-y-1">
                          {item.subItems?.map((subItem) => {
                            const isSubItemActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                                  isSubItemActive
                                    ? 'bg-blue-100 text-blue-800 font-semibold'
                                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-800'
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
                  className={`px-4 py-2 text-base font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-blue-800 text-white shadow-lg shadow-blue-200/70'
                      : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
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
                  className="mx-4 px-6 py-3 border border-blue-200 text-blue-900 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/registration"
                  className="mx-4 px-6 py-3 bg-gradient-to-r from-blue-800 via-blue-700 to-sky-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-200/70 transition-all text-center block"
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
