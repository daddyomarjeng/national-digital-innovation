import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] bg-slate-950 text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/dg.jpg"
          aria-hidden="true"
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/60 to-emerald-900/40" />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GICTA Logo - Top Left */}
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 opacity-20 animate-float">
          <div className="w-full h-full bg-white rounded-full p-4 shadow-lg">
            <Image
              src="/gicta.jpg"
              alt="GICTA"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* MoCDE Logo - Top Right */}
        <div className="absolute top-32 right-16 w-20 h-20 md:w-28 md:h-28 opacity-25 animate-float-delayed">
          <div className="w-full h-full bg-white rounded-full p-3 shadow-lg">
            <Image
              src="/mocde.jpg"
              alt="MoCDE"
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* WARDIP Logo - Bottom Left */}
        <div className="absolute bottom-40 left-20 w-20 h-20 md:w-28 md:h-28 opacity-20 animate-float-slow">
          <div className="w-full h-full bg-white rounded-full p-3 shadow-lg">
            <Image
              src="/wardip.jpg"
              alt="WARDIP"
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Additional GICTA Logo - Bottom Right */}
        <div className="absolute bottom-32 right-12 w-24 h-24 md:w-32 md:h-32 opacity-15 animate-float-delayed">
          <div className="w-full h-full bg-white rounded-full p-4 shadow-lg">
            <Image
              src="/gicta.jpg"
              alt="GICTA"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Small MoCDE Logo - Middle Left */}
        <div className="hidden lg:block absolute top-1/2 left-8 w-16 h-16 opacity-20 animate-float-slow">
          <div className="w-full h-full bg-white rounded-full p-2 shadow-lg">
            <Image
              src="/mocde.jpg"
              alt="MoCDE"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Small WARDIP Logo - Middle Right */}
        <div className="hidden lg:block absolute top-1/3 right-8 w-16 h-16 opacity-25 animate-float">
          <div className="w-full h-full bg-white rounded-full p-2 shadow-lg">
            <Image
              src="/wardip.jpg"
              alt="WARDIP"
              width={64}
              height={64}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M40 38v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-34V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 40v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="text-center lg:text-left">
              {/* Event Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-sm">
                <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span>{EVENT_DATES.fullDisplay}</span>
                <span className="hidden sm:inline text-white/70">|</span>
                <span className="hidden sm:inline text-white/80">Digital Innovation Week 2025</span>
              </div>

              {/* Main Title */}
              <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                National Digital Innovation Week
                <span className="block text-blue-200 mt-3">The Gambia</span>
              </h1>

              {/* Theme */}
              <p className="mt-6 text-lg text-blue-100/90 md:text-xl lg:text-2xl max-w-2xl mx-auto lg:mx-0">
                {EVENT_THEME.tagline}
              </p>

              {/* Venue */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-blue-100/90 lg:justify-start">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base md:text-lg">{VENUE.name}</span>
                </div>
                <div className="hidden sm:flex h-5 w-px bg-white/30" />
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-base md:text-lg">{EVENT_DATES.display}</span>
                </div>
              </div>

              {/* Organized by */}
              <div className="mt-8">
                <p className="text-blue-200/80 text-sm mb-2">Organized by</p>
                <p className="text-white text-lg font-semibold">
                  Ministry of Communications and Digital Economy (MOCDE)
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:justify-start">
                <Button
                  href="/registration"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg shadow-white/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Register Now
                </Button>
                <Button
                  href="/programme"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white/10 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Programme
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-lg shadow-[0_30px_80px_rgba(15,23,42,0.6)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">Innovation Spotlight</p>
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Live Showcase
                  </span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  Experience The Gambia&apos;s Future of Digital Excellence
                </h2>
                <p className="mt-3 text-sm text-white/70">
                  Join innovators, policymakers, and industry leaders to explore emerging tech,
                  smart governance, and inclusive digital transformation.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: EVENT_STATS.days, value: 'Event Days' },
                    { label: EVENT_STATS.speakers, value: 'Speakers' },
                    { label: EVENT_STATS.sessions, value: 'Sessions' },
                    { label: EVENT_STATS.participants, value: 'Participants' },
                  ].map((stat) => (
                    <div key={stat.value} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                      <p className="text-2xl font-semibold text-white">{stat.label}</p>
                      <p className="text-xs uppercase tracking-widest text-white/60">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 max-w-5xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅' },
            { label: EVENT_STATS.speakers, icon: '🎤' },
            { label: EVENT_STATS.sessions, icon: '💡' },
            { label: EVENT_STATS.participants, icon: '👥' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
