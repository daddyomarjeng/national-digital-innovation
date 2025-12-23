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
          poster="/dg.jpg"
        >
          <source src="/vid3.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-emerald-900/40" />
      <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{
        backgroundImage: 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(16, 185, 129, 0.35), transparent 55%)',
      }} />
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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-24 md:py-32 lg:py-36">
          <div className="max-w-5xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>{EVENT_DATES.fullDisplay}</span>
              <span className="text-white/60">|</span>
              <span className="text-white/80">Banjul • The Gambia</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              National Digital Innovation Week
              <span className="block text-emerald-200 mt-3 text-3xl md:text-4xl lg:text-5xl">
                Powering The Gambia&apos;s Digital Future
              </span>
            </h1>

            {/* Theme */}
            <p className="text-lg md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-3xl mx-auto">
              {EVENT_THEME.tagline}
            </p>

            {/* Venue */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-slate-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg font-medium">{EVENT_DATES.fullDisplay}</span>
              </div>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{VENUE.name}</span>
            </div>

            {/* Organized by GICTA */}
            <div className="mb-10">
              <p className="text-emerald-200 text-sm uppercase tracking-[0.3em] mb-2">Organized by</p>
              <p className="text-white text-lg font-semibold">
                {/* Gambia Information and Communication Technology Agency (GICTA) */}
                Ministry of Communications and Digital Economy (MoCDE)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-emerald-400 text-slate-900 hover:bg-emerald-300 font-semibold shadow-lg shadow-emerald-500/30"
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

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">Innovation</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">Policy</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">Startups</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur">Talent</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 max-w-4xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅' },
            { label: EVENT_STATS.speakers, icon: '🎤' },
            { label: EVENT_STATS.sessions, icon: '💡' },
            { label: EVENT_STATS.participants, icon: '👥' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg shadow-slate-900/40">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
