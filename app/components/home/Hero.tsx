import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  const heroVideoUrl = 'https://cdn.coverr.co/videos/coverr-fiber-lights-1607/1080p.mp4';
  const heroPosterUrl = 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1600&q=80';
  const heroHighlights = [
    { label: 'Inspired by GDIW Accra', detail: 'Immersive storytelling & networking moments' },
    { label: 'Built for The Gambia', detail: 'Showcasing innovators, creatives & policymakers' },
    { label: 'Connected to Digital Nigeria', detail: 'Regional partnerships and investment bridges' },
  ];

  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroVideoUrl}
          poster={heroPosterUrl}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-800/90" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.25),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(14,165,233,0.2),transparent_30%)]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%),linear-gradient(-135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_35%)] opacity-20"
          aria-hidden="true"
        />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GICTA Logo - Top Left */}
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 opacity-20 animate-float">
          <div className="w-full h-full bg-white/80 rounded-full p-4 shadow-lg backdrop-blur">
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
          <div className="w-full h-full bg-white/80 rounded-full p-3 shadow-lg backdrop-blur">
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
          <div className="w-full h-full bg-white/80 rounded-full p-3 shadow-lg backdrop-blur">
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
          <div className="w-full h-full bg-white/70 rounded-full p-4 shadow-lg backdrop-blur">
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
          <div className="w-full h-full bg-white/70 rounded-full p-2 shadow-lg backdrop-blur">
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
          <div className="w-full h-full bg-white/70 rounded-full p-2 shadow-lg backdrop-blur">
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
        <div className="py-16 md:py-24 lg:py-28 grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium tracking-wide uppercase">{EVENT_DATES.fullDisplay}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              National Digital Innovation Week
              <span className="block text-blue-100 mt-2">The Gambia</span>
            </h1>

            {/* Theme */}
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              {EVENT_THEME.tagline}
            </p>

            {/* Venue */}
            <div className="flex items-center justify-center lg:justify-start mb-4 text-blue-50">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg font-semibold">{VENUE.name}</span>
            </div>

            {/* Organized by GICTA */}
            <div className="mb-10">
              <p className="text-blue-100 text-sm mb-2">Organized by</p>
              <p className="text-white text-lg font-semibold">
                Ministry of Communications and Digital Economy(MOCDE)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {heroHighlights.map((highlight, idx) => (
                <div
                  key={highlight.label}
                  className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-left shadow-lg backdrop-blur"
                >
                  <div className="text-sm text-blue-100/80">{highlight.label}</div>
                  <div className="text-base font-semibold text-white">{highlight.detail}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.25),transparent_35%)] opacity-60" aria-hidden="true" />
              <div className="absolute inset-x-10 top-4 h-1 rounded-full bg-gradient-to-r from-green-400 via-cyan-300 to-blue-200" aria-hidden="true" />
              <div className="relative space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Digital Innovation Week 2025</p>
                <h2 className="text-2xl font-bold leading-tight">A future-ready stage for The Gambia's boldest ideas</h2>
                <p className="text-blue-100 leading-relaxed">
                  From moonshot keynotes to hands-on labs, join a week of experience-driven storytelling inspired by Ghana and Nigeria's standout digital festivals.
                </p>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-blue-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{EVENT_DATES.display}</span>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-200">Registrations live</span>
                  </div>
                  <div className="flex items-center text-blue-50">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {VENUE.shortName} — {VENUE.city}, {VENUE.country}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[EVENT_STATS.speakers, EVENT_STATS.sessions, EVENT_STATS.participants].map((detail) => (
                    <span key={detail} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-50">
                      {detail}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-blue-100/80">
                  Tip: Host the background video locally as <code className="font-semibold">public/media/hero-video.mp4</code> for the smoothest load time on the live site.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 max-w-4xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅' },
            { label: EVENT_STATS.speakers, icon: '🎤' },
            { label: EVENT_STATS.sessions, icon: '💡' },
            { label: EVENT_STATS.participants, icon: '👥' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative text-center p-4 bg-white/10 border border-white/15 backdrop-blur-md rounded-xl shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_35%)] opacity-50" aria-hidden="true" />
              <div className="relative text-3xl mb-2 drop-shadow">{stat.icon}</div>
              <div className="relative text-lg font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
