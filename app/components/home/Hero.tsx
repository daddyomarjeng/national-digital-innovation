import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=1600&q=80"
      >
        <source src="https://storage.coverr.co/videos/coverr-dreaming-in-digital-0890/1080p.mp4" type="video/mp4" />
      </video>

      {/* Layered gradient masks for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-900/80 to-blue-900/95" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-600/40 via-blue-700/30 to-transparent" />

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        {/* GICTA Logo - Top Left */}
        <div className="absolute top-16 left-10 w-24 h-24 md:w-32 md:h-32 opacity-60 animate-float">
          <div className="w-full h-full bg-white/90 rounded-2xl p-4 shadow-2xl shadow-blue-900/30">
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
        <div className="absolute top-32 right-16 w-20 h-20 md:w-28 md:h-28 opacity-70 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-2xl p-3 shadow-2xl shadow-blue-900/30">
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
        <div className="absolute bottom-32 left-12 w-20 h-20 md:w-28 md:h-28 opacity-60 animate-float-slow">
          <div className="w-full h-full bg-white/90 rounded-2xl p-3 shadow-2xl shadow-blue-900/30">
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
        <div className="absolute bottom-28 right-8 w-24 h-24 md:w-32 md:h-32 opacity-50 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-2xl p-4 shadow-2xl shadow-blue-900/30">
            <Image
              src="/gicta.jpg"
              alt="GICTA"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15 mix-blend-screen">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23bde1ff' stroke-width='2' opacity='0.5'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='40' cy='10' r='2'/%3E%3Ccircle cx='70' cy='10' r='2'/%3E%3Ccircle cx='10' cy='40' r='2'/%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='70' cy='40' r='2'/%3E%3Ccircle cx='10' cy='70' r='2'/%3E%3Ccircle cx='40' cy='70' r='2'/%3E%3Ccircle cx='70' cy='70' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-blue-900/30">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-100">{EVENT_DATES.fullDisplay}</span>
            </div>

            {/* Main Title */}
            <div className="mx-auto max-w-3xl rounded-3xl bg-white/5 p-6 md:p-8 backdrop-blur-lg border border-white/10 shadow-2xl shadow-blue-900/40">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
                National Digital Innovation Week
                <span className="block text-blue-100 mt-1">The Gambia</span>
              </h1>

              {/* Theme */}
              <p className="text-lg md:text-xl text-blue-50 mb-6 leading-relaxed">
                {EVENT_THEME.tagline}
              </p>

              {/* Venue */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mb-6 text-blue-100">
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-semibold">{VENUE.name}</span>
                </div>
                <span className="hidden sm:block h-5 w-px bg-white/20" aria-hidden="true" />
                <p className="text-sm md:text-base text-blue-100/80">
                  Curated for policymakers, creators, investors, startups, and changemakers across West Africa.
                </p>
              </div>

              {/* Organized by */}
              <div className="mb-8 text-blue-100">
                <p className="text-xs uppercase tracking-[0.25em] text-blue-100/70">Organized by</p>
                <p className="text-lg md:text-xl font-semibold mt-1">Ministry of Communications and Digital Economy (MoCDE)</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  href="/registration"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg shadow-blue-900/20"
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
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold backdrop-blur"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Programme
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-12 max-w-5xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅', accent: 'from-blue-400/30 via-blue-300/20 to-blue-100/10' },
            { label: EVENT_STATS.speakers, icon: '🎤', accent: 'from-cyan-400/30 via-blue-300/20 to-blue-100/10' },
            { label: EVENT_STATS.sessions, icon: '💡', accent: 'from-indigo-400/30 via-blue-300/20 to-blue-100/10' },
            { label: EVENT_STATS.participants, icon: '👥', accent: 'from-emerald-400/30 via-blue-300/20 to-blue-100/10' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden text-center p-4 md:p-5 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-lg shadow-xl shadow-blue-900/30`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-80 pointer-events-none`}
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl mb-2 drop-shadow-sm">{stat.icon}</div>
                <div className="text-base md:text-lg font-semibold tracking-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
