import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/dg.jpg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-cyber-lights-6236/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-br from-blue-950/70 via-blue-900/70 to-blue-800/60" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(76,201,240,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(129,140,248,0.18),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(45,212,191,0.18),transparent_30%)]" aria-hidden="true" />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-12 w-28 h-28 md:w-36 md:h-36 opacity-30 animate-float">
          <div className="w-full h-full bg-white/80 rounded-3xl p-4 shadow-xl shadow-blue-900/30 backdrop-blur">
            <Image
              src="/gicta.jpg"
              alt="GICTA"
              width={144}
              height={144}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="absolute -right-4 top-24 w-24 h-24 md:w-32 md:h-32 opacity-35 animate-float-delayed">
          <div className="w-full h-full bg-white/80 rounded-3xl p-3 shadow-xl shadow-blue-900/30 backdrop-blur">
            <Image
              src="/mocde.jpg"
              alt="MoCDE"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="absolute -left-6 bottom-24 w-24 h-24 md:w-32 md:h-32 opacity-25 animate-float-slow">
          <div className="w-full h-full bg-white/80 rounded-3xl p-3 shadow-xl shadow-blue-900/30 backdrop-blur">
            <Image
              src="/wardip.jpg"
              alt="WARDIP"
              width={128}
              height={128}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="hidden lg:block absolute right-10 bottom-10 w-28 h-28 opacity-25 animate-float-delayed">
          <div className="w-full h-full bg-white/80 rounded-3xl p-4 shadow-xl shadow-blue-900/30 backdrop-blur">
            <Image
              src="/gicta.jpg"
              alt="GICTA"
              width={144}
              height={144}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl z-10">
        <div className="pt-20 pb-16 md:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/10 border border-white/20 rounded-full backdrop-blur-lg shadow-lg shadow-blue-900/30">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="text-sm font-semibold tracking-wide text-blue-100">{EVENT_DATES.fullDisplay}</span>
              <span className="text-xs uppercase tracking-[0.2em] text-blue-200">Innovation • Impact • Inclusion</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-[0_10px_40px_rgba(30,64,175,0.35)]">
              National Digital Innovation Week
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-100 via-cyan-100 to-emerald-100 mt-2">
                The Gambia
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-blue-50/90 leading-relaxed max-w-3xl mx-auto">
              {EVENT_THEME.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-100/90">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/15 backdrop-blur">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-base font-semibold">{VENUE.name}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/15 backdrop-blur">
                <span className="text-xs uppercase tracking-[0.2em] text-blue-200">Organized by</span>
                <span className="font-semibold text-white">Ministry of Communications and Digital Economy</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold shadow-lg shadow-blue-900/20"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12">
          {[
            { label: EVENT_STATS.days, title: 'Days of inspiration' },
            { label: EVENT_STATS.speakers, title: 'Visionary speakers' },
            { label: EVENT_STATS.sessions, title: 'Curated sessions' },
            { label: EVENT_STATS.participants, title: 'Participants' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 shadow-lg shadow-blue-900/30"
            >
              <div className="absolute inset-0 bg-linear-to-r from-white/0 via-white/5 to-white/0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" aria-hidden="true" />
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl">
                  {['📅', '🎤', '💡', '👥'][idx]}
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">{stat.label}</p>
                  <p className="text-sm text-blue-100/80">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
