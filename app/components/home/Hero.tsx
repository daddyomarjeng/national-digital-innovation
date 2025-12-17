import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      {/* Immersive Technology Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
        >
          <source src="https://cdn.coverr.co/videos/coverr-digital-grid-9095/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/85 via-blue-900/75 to-sky-900/70 mix-blend-multiply" />
        <div className="absolute inset-x-8 -top-64 h-[36rem] rounded-full bg-blue-500/30 blur-3xl" aria-hidden />
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-24 h-24 md:w-28 md:h-28 opacity-20 animate-float">
          <div className="w-full h-full bg-white rounded-full p-4 shadow-lg shadow-blue-900/20">
            <Image
              src="/gicta.jpg"
              alt="GICTA"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="absolute bottom-24 right-10 w-20 h-20 md:w-24 md:h-24 opacity-20 animate-float-delayed">
          <div className="w-full h-full bg-white rounded-full p-3 shadow-lg shadow-blue-900/20">
            <Image
              src="/mocde.jpg"
              alt="MoCDE"
              width={112}
              height={112}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="hidden lg:block absolute top-1/3 right-24 w-16 h-16 opacity-25 animate-float-slow">
          <div className="w-full h-full bg-white rounded-full p-2 shadow-lg shadow-blue-900/20">
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
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28 lg:py-32">
          {/* Copy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-lg shadow-lg">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-100">{EVENT_DATES.fullDisplay}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-sky-500/20 border border-white/20 text-blue-50">Innovation Forward</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-white to-blue-200">
                  National Digital Innovation Week
                </span>
                <span className="text-blue-100 mt-2 block">The Gambia</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-50/90 leading-relaxed max-w-2xl">
                {EVENT_THEME.tagline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-blue-100/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-base font-semibold">{VENUE.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="text-sm uppercase tracking-[0.2em] text-blue-100/70">Ministry of Communications & Digital Economy</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg shadow-blue-200/60"
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
                className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white/10 font-semibold backdrop-blur-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>
          </div>

          {/* Experience Card */}
          <div className="relative">
            <div className="absolute -top-10 -left-8 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" aria-hidden />
            <div className="absolute -bottom-8 -right-12 h-28 w-28 rounded-full bg-blue-600/30 blur-3xl" aria-hidden />
            <div className="relative bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 backdrop-blur-2xl shadow-2xl shadow-blue-900/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-blue-50/80">This year&apos;s focus</p>
                  <h3 className="text-2xl font-semibold">Innovation in Motion</h3>
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-emerald-400/20 text-emerald-100 border border-emerald-200/30">Live</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[EVENT_STATS.days, EVENT_STATS.speakers, EVENT_STATS.sessions, EVENT_STATS.participants].map((item, idx) => (
                  <div key={idx} className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center text-lg">
                      {['📅', '🎤', '💡', '👥'][idx]}
                    </div>
                    <p className="text-sm font-semibold text-blue-50/90 leading-snug">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                {["Policy, innovation, and talent converging in Banjul", "Immersive expo showcasing Gambian solutions", "Regional collaboration for a connected future"].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" />
                    <p className="text-sm text-blue-50/80 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-16 max-w-5xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅' },
            { label: EVENT_STATS.speakers, icon: '🎤' },
            { label: EVENT_STATS.sessions, icon: '💡' },
            { label: EVENT_STATS.participants, icon: '👥' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/15 shadow-lg shadow-blue-900/20 hover:bg-white/15 transition"
            >
              <div className="text-3xl mb-2 drop-shadow-sm">{stat.icon}</div>
              <div className="text-lg font-semibold text-blue-50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
