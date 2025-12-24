import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.25),_transparent_65%)]" />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GICTA Logo - Top Left */}
        <div className="absolute top-16 left-8 w-20 h-20 md:w-28 md:h-28 opacity-25 animate-float">
          <div className="w-full h-full bg-white/90 rounded-full p-4 shadow-lg">
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
        <div className="absolute top-24 right-12 w-20 h-20 md:w-28 md:h-28 opacity-25 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-lg">
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
        <div className="absolute bottom-36 left-16 w-20 h-20 md:w-28 md:h-28 opacity-20 animate-float-slow">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-lg">
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
        <div className="absolute bottom-28 right-10 w-24 h-24 md:w-32 md:h-32 opacity-15 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-full p-4 shadow-lg">
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
          <div className="w-full h-full bg-white/90 rounded-full p-2 shadow-lg">
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
          <div className="w-full h-full bg-white/90 rounded-full p-2 shadow-lg">
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="space-y-8">
              {/* Event Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-lg shadow-blue-500/10">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium tracking-wide">{EVENT_DATES.fullDisplay}</span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.35em] text-blue-200">Innovate. Connect. Transform.</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  National Digital Innovation Week
                  <span className="block text-blue-200 mt-2">The Gambia</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  {EVENT_THEME.tagline}
                </p>
              </div>

              {/* Venue */}
              <div className="flex flex-wrap items-center gap-6 text-blue-100">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg">{VENUE.name}</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">{EVENT_DATES.shortDisplay}</span>
                </div>
              </div>

              {/* Organized by */}
              <div>
                <p className="text-blue-200 text-sm mb-2">Organized by</p>
                <p className="text-white text-lg font-semibold">
                  Ministry of Communications and Digital Economy (MoCDE)
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="/registration"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg shadow-blue-500/20"
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
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Programme
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/10 animate-fade-up">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm uppercase tracking-[0.3em] text-blue-200">Innovation Week</span>
                  <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">2025</span>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Experience The Gambia&apos;s digital leap</h2>
                <p className="text-blue-100 mb-6">
                  Join policymakers, innovators, and investors shaping smart public services, fintech, and AI-driven growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: EVENT_STATS.days, sub: 'Days of Impact' },
                    { label: EVENT_STATS.speakers, sub: 'Visionary Speakers' },
                    { label: EVENT_STATS.sessions, sub: 'Expert Sessions' },
                    { label: EVENT_STATS.participants, sub: 'Expected Participants' },
                  ].map((stat, idx) => (
                    <div key={idx} className="rounded-2xl bg-slate-950/40 border border-white/10 p-4">
                      <div className="text-lg font-semibold">{stat.label}</div>
                      <div className="text-xs uppercase tracking-wide text-blue-200">{stat.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-blue-100">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">AI & Digital Governance</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Smart Infrastructure</span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15">Startup Showcase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
