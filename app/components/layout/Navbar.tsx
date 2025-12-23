'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgrammeOpen, setIsProgrammeOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/95 shadow-lg border-blue-100' : 'bg-white/75 shadow-sm border-white/60'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-green-500 via-blue-700 to-red-500" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group" aria-label="National Digital Innovation Week home">
            <div className="w-12 h-12 bg-linear-to-br from-blue-900 via-blue-700 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <span className="text-white font-bold text-base">NDI</span>
            </div>
            <div className="hidden lg:block">
              <div className="text-sm font-bold text-blue-900">National Digital Innovation Week</div>
              <div className="text-xs text-emerald-700">The Gambia</div>
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
                      className={`px-4 py-2 text-sm font-semibold rounded-full transition-all flex items-center shadow-sm border ${
                        isActive || isSubActive
                          ? 'bg-blue-900 text-white border-blue-900'
                          : 'text-gray-800 hover:text-blue-900 hover:bg-blue-50 border-transparent'
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
                    <div className="absolute left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-2xl shadow-2xl border border-blue-50 py-3">
                        {item.subItems?.map((subItem) => {
                          const isSubItemActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isSubItemActive
                                  ? 'bg-blue-50 text-blue-900 font-semibold'
                                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
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
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all shadow-sm border ${
                    isActive
                      ? 'bg-blue-900 text-white border-blue-900'
                      : 'text-gray-800 hover:text-blue-900 hover:bg-blue-50 border-transparent'
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
              className="inline-flex items-center px-5 py-2.5 border-2 border-blue-900 text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-sm"
            >
              {/* <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg> */}
              Become a Sponsor
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-green-500 via-blue-700 to-red-500 text-white font-semibold rounded-full hover:shadow-lg transition-all"
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
          <div className="lg:hidden py-4 border-t border-gray-100">
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
                            ? 'bg-blue-800 text-white'
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
                    className={`px-4 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive
                        ? 'bg-blue-800 text-white'
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
                  className="mx-4 px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/registration"
                  className="mx-4 px-6 py-3 bg-gradient-to-r from-green-500 via-blue-700 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center block"
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
