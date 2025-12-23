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
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
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
      ],
    },
    { label: 'Media Center', href: '/media' },
    { label: 'Travel Info', href: '/travel' },
    { label: 'Contact', href: '/contact' },
  ];

  const sharedNavClasses =
    'transition-colors px-3 py-2 text-sm font-semibold rounded-lg flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500';

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-xl' : 'bg-white/70 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23]" aria-hidden="true" />
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            aria-label="National Digital Innovation Week home"
          >
            <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1c8c] via-[#3a9d23] to-[#ce1126] text-white shadow-lg shadow-black/10 ring-1 ring-black/5 group-hover:scale-105 transition-transform">
              <span className="absolute inset-0 bg-white/10" aria-hidden="true" />
              <span className="relative text-sm font-extrabold tracking-tight">NDIW</span>
            </div>
            <div className="hidden lg:block">
              <div className="text-sm font-black text-blue-900">Digital Innovation Week</div>
              <div className="text-xs font-semibold text-gray-600">The Gambia</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const isSubActive = item.subItems?.some((sub) => pathname === sub.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setIsProgrammeOpen(true)}
                    onMouseLeave={() => setIsProgrammeOpen(false)}
                  >
                    <button
                      className={`${sharedNavClasses} ${
                        isActive || isSubActive
                          ? 'bg-gradient-to-r from-[#ce1126]/90 via-[#0c1c8c]/90 to-[#3a9d23]/90 text-white shadow-md'
                          : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={isProgrammeOpen}
                    >
                      {item.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-2 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="rounded-2xl bg-white shadow-xl border border-gray-100/80 p-2">
                        {item.subItems?.map((subItem) => {
                          const isSubItemActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                                isSubItemActive
                                  ? 'bg-blue-50 text-blue-900'
                                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                              }`}
                              aria-current={isSubItemActive ? 'page' : undefined}
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
                  className={`${sharedNavClasses} ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ce1126]/90 via-[#0c1c8c]/90 to-[#3a9d23]/90 text-white shadow-md'
                      : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
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
              className="inline-flex items-center rounded-xl border border-blue-900/20 bg-white/60 px-5 py-2.5 text-sm font-semibold text-blue-900 shadow-sm shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-white"
            >
              Become a Sponsor
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:scale-[1.02]"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                const isSubActive = item.subItems?.some((sub) => pathname === sub.href);

                if (item.hasDropdown) {
                  return (
                    <div key={item.href} className="rounded-xl bg-gray-50/80 p-1 ring-1 ring-gray-100">
                      <button
                        onClick={() => setIsProgrammeOpen(!isProgrammeOpen)}
                        className={`${sharedNavClasses} justify-between w-full ${
                          isActive || isSubActive
                            ? 'bg-gradient-to-r from-[#ce1126]/90 via-[#0c1c8c]/90 to-[#3a9d23]/90 text-white shadow-md'
                            : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                        }`}
                        aria-expanded={isProgrammeOpen}
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
                        <div className="ml-3 mt-2 space-y-1 pb-2">
                          {item.subItems?.map((subItem) => {
                            const isSubItemActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className={`block rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                                  isSubItemActive
                                    ? 'bg-blue-100 text-blue-900'
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                                aria-current={isSubItemActive ? 'page' : undefined}
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
                    className={`${sharedNavClasses} ${
                      isActive
                        ? 'bg-gradient-to-r from-[#ce1126]/90 via-[#0c1c8c]/90 to-[#3a9d23]/90 text-white shadow-md'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Link
                  href="/contact"
                  className="mx-4 block rounded-xl border border-blue-900/20 bg-white/70 px-6 py-3 text-center font-semibold text-blue-900 shadow-sm hover:bg-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Become a Sponsor
                </Link>
                <Link
                  href="/registration"
                  className="mx-4 block rounded-xl bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23] px-6 py-3 text-center font-bold text-white shadow-lg shadow-black/20"
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
