import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Immersive background video and gradients */}
      <div className="absolute inset-0 -z-30">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/dg.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-futuristic-network-technology-2181/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/70 to-blue-800/90" />
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="hero-aurora top-10 left-16" />
        <div className="hero-aurora bottom-10 right-16 bg-cyan-400/40" />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Event Badge */}
            <div className="inline-flex items-center px-5 py-2.5 bg-white/10 rounded-full backdrop-blur-md ring-2 ring-white/20 shadow-lg shadow-blue-900/30">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-50">{EVENT_DATES.fullDisplay}</span>
            </div>

            {/* Main Title */}
            <div className="space-y-3">
              <p className="text-sm md:text-base text-blue-100 uppercase tracking-[0.2em]">Inspired by Africa&apos;s digital momentum</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl">
                National Digital Innovation Week
                <span className="block text-blue-100 mt-3 text-2xl md:text-3xl font-semibold">The Gambia</span>
              </h1>
            </div>

            {/* Theme */}
            <p className="text-lg md:text-2xl text-blue-50/90 leading-relaxed max-w-3xl mx-auto">
              {EVENT_THEME.tagline}
            </p>

            {/* Venue */}
            <div className="flex items-center justify-center text-blue-50/90 gap-2">
              <div className="rounded-full bg-white/10 p-2 backdrop-blur">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-lg font-semibold">{VENUE.name}</div>
            </div>

            {/* Organized by GICTA */}
            <div className="space-y-1">
              <p className="text-blue-100 text-sm uppercase tracking-[0.2em]">Hosted by</p>
              <p className="text-white text-lg font-semibold">
                Ministry of Communications and Digital Economy (MOCDE) & GICTA
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl shadow-blue-900/30"
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
              <Button
                href="/media"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-blue-50 bg-white/10 border border-white/30 hover:bg-white/20"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-6 4V6a2 2 0 012-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-4a2 2 0 01-2-2z" />
                </svg>
                Watch Highlights
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-14 max-w-4xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅', accent: 'from-sky-400/30 via-blue-400/30 to-indigo-500/30' },
            { label: EVENT_STATS.speakers, icon: '🎤', accent: 'from-purple-400/30 via-indigo-400/30 to-blue-500/30' },
            { label: EVENT_STATS.sessions, icon: '💡', accent: 'from-amber-400/30 via-orange-400/20 to-pink-400/30' },
            { label: EVENT_STATS.participants, icon: '👥', accent: 'from-emerald-400/30 via-teal-400/30 to-blue-400/30' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-xl p-4 text-center backdrop-blur-md bg-white/10 border border-white/20 shadow-lg shadow-blue-950/20`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-60`} aria-hidden />
              <div className="relative space-y-2">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-lg font-semibold tracking-wide">{stat.label}</div>
                <div className="h-px bg-white/20 w-12 mx-auto" />
                <p className="text-sm text-blue-50/80">Future-ready inspiration from across Africa</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
