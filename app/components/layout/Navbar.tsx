'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgrammeOpen, setIsProgrammeOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

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
    <nav
      className={`sticky top-0 z-50 transition-all relative ${isHome ? 'text-white' : 'bg-white shadow-md text-gray-900'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {isHome && (
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-xl border-b border-white/10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_65%)]" />
        </div>
      )}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="National Digital Innovation Week home">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform ${isHome ? 'bg-white/10 border border-white/20' : 'bg-linear-to-br from-blue-800 to-blue-600'}`}>
              <span className="text-white font-bold text-base">logo</span>
            </div>
            <div className="hidden lg:block">
              <div className={`text-sm font-bold ${isHome ? 'text-white' : 'text-blue-900'}`}>National Digital</div>
              <div className={`text-xs ${isHome ? 'text-blue-100' : 'text-gray-600'}`}>Innovation Week</div>
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
                      className={`px-3 py-2 text-sm font-medium rounded-full transition-colors flex items-center ${
                        isActive || isSubActive
                          ? isHome
                            ? 'bg-white/15 text-white'
                            : 'bg-blue-800 text-white'
                          : isHome
                            ? 'text-blue-100 hover:text-white hover:bg-white/10'
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
                    <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className={`rounded-lg shadow-lg border py-2 ${isHome ? 'bg-slate-950/90 border-white/10 backdrop-blur-xl' : 'bg-white border-gray-200'}`}>
                        {item.subItems?.map((subItem) => {
                          const isSubItemActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isSubItemActive
                                  ? isHome
                                    ? 'bg-white/10 text-white font-semibold'
                                    : 'bg-blue-50 text-blue-800 font-semibold'
                                  : isHome
                                    ? 'text-blue-100 hover:bg-white/10 hover:text-white'
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
                  className={`px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                    isActive
                      ? isHome
                        ? 'bg-white/15 text-white'
                        : 'bg-blue-800 text-white'
                      : isHome
                        ? 'text-blue-100 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className={`inline-flex items-center px-5 py-2.5 border-2 font-semibold rounded-full transition-colors ${
                isHome
                  ? 'border-white/40 text-white hover:bg-white/10'
                  : 'border-blue-800 text-blue-800 hover:bg-blue-50'
              }`}
            >
              {/* <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> */}
              Become a Sponsor
            </Link>
            <Link
              href="/registration"
              className={`inline-flex items-center px-6 py-2.5 font-semibold rounded-full transition-colors ${
                isHome
                  ? 'bg-white text-blue-900 hover:bg-blue-50'
                  : 'bg-blue-800 text-white hover:bg-blue-900'
              }`}
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isHome ? 'text-white hover:text-white/80 hover:bg-white/10' : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
            }`}
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
          <div className={`lg:hidden py-4 ${isHome ? 'border-t border-white/10 bg-slate-950/80' : 'border-t border-gray-100 bg-white'}`}>
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubActive = item.subItems?.some(sub => pathname === sub.href);
                
                if (item.hasDropdown) {
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => setIsProgrammeOpen(!isProgrammeOpen)}
                        className={`w-full px-4 py-2 text-base font-medium rounded-md transition-colors flex items-center justify-between ${
                          isActive || isSubActive
                            ? isHome
                              ? 'bg-white/15 text-white'
                              : 'bg-blue-800 text-white'
                            : isHome
                              ? 'text-blue-100 hover:text-white hover:bg-white/10'
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
                                className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                                  isSubItemActive
                                    ? isHome
                                      ? 'bg-white/10 text-white font-semibold'
                                      : 'bg-blue-100 text-blue-800 font-semibold'
                                    : isHome
                                      ? 'text-blue-100 hover:bg-white/10 hover:text-white'
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
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? isHome
                          ? 'bg-white/15 text-white'
                          : 'bg-blue-800 text-white'
                        : isHome
                          ? 'text-blue-100 hover:text-white hover:bg-white/10'
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
                  className={`mx-4 px-6 py-3 border-2 font-semibold rounded-lg transition-colors text-center block ${
                    isHome
                      ? 'border-white/40 text-white hover:bg-white/10'
                      : 'border-blue-800 text-blue-800 hover:bg-blue-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/registration"
                  className={`mx-4 px-6 py-3 font-semibold rounded-lg transition-colors text-center block ${
                    isHome
                      ? 'bg-white text-blue-900 hover:bg-blue-50'
                      : 'bg-blue-800 text-white hover:bg-blue-900'
                  }`}
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
