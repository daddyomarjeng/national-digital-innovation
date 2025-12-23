import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

const STATS = [
  { label: EVENT_STATS.days, icon: '📅', hint: 'Immersive agenda' },
  { label: EVENT_STATS.speakers, icon: '🎤', hint: 'Visionary leaders' },
  { label: EVENT_STATS.sessions, icon: '💡', hint: 'Hands-on experiences' },
  { label: EVENT_STATS.participants, icon: '👥', hint: 'Across Africa' },
];

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/vid3.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/vid1.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-blue-900/75 to-emerald-800/70" aria-hidden="true" />
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.35),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.35),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(248,113,113,0.28),transparent_35%)]" aria-hidden="true" />
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-6 w-20 h-20 md:w-28 md:h-28 opacity-30 animate-float">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-xl shadow-blue-300/30">
            <Image src="/gicta.jpg" alt="GICTA" width={112} height={112} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="absolute top-28 right-10 w-16 h-16 md:w-24 md:h-24 opacity-35 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-lg shadow-emerald-200/40">
            <Image src="/mocde.jpg" alt="MoCDE" width={96} height={96} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="absolute bottom-28 left-16 w-16 h-16 md:w-24 md:h-24 opacity-25 animate-float-slow">
          <div className="w-full h-full bg-white/90 rounded-full p-2 shadow-lg shadow-slate-900/20">
            <Image src="/wardip.jpg" alt="WARDIP" width={96} height={96} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="absolute bottom-20 right-6 w-20 h-20 md:w-28 md:h-28 opacity-30 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-lg shadow-blue-200/30">
            <Image src="/gicta.jpg" alt="GICTA" width={112} height={112} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-16 md:py-24 lg:py-28">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-blue-200/30 shadow-lg shadow-blue-900/20">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                <span className="text-sm font-semibold tracking-wide uppercase">{EVENT_DATES.fullDisplay}</span>
                <span className="hidden sm:inline-flex h-1 w-10 rounded-full bg-white/30" aria-hidden="true" />
                <span className="hidden sm:inline text-sm font-medium text-blue-100">Banjul · The Smiling Coast of Africa</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-blue-100 uppercase tracking-[0.2em]">
                  <span className="h-[1px] w-10 bg-gradient-to-r from-emerald-300 to-blue-200" aria-hidden="true" />
                  National Digital Innovation Week
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-[0_15px_45px_rgba(0,0,0,0.35)]">
                  Igniting The Gambia&apos;s Digital Future
                  <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 text-emerald-200 font-semibold">{EVENT_THEME.tagline}</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl leading-relaxed">
                  Join policymakers, innovators, and investors in Banjul as we advance inclusive connectivity, spotlight Gambian startups, and co-create resilient digital infrastructure for the sub-region.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 max-w-2xl">
                <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 p-4 shadow-lg shadow-slate-900/30">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-slate-900 font-black">SDKJ</div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-blue-100">Venue</p>
                    <p className="text-base md:text-lg font-semibold">{VENUE.name}</p>
                    <p className="text-sm text-blue-100/90">{VENUE.city}, {VENUE.country}</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-white text-slate-900 p-4 border border-blue-50 shadow-xl shadow-emerald-200/40">
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-700">Hosted By</p>
                  <p className="font-semibold">Ministry of Communications &amp; Digital Economy</p>
                  <p className="text-sm text-slate-600">With GICTA &amp; WARDIP partners</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button
                  href="/registration"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-blue-900 hover:bg-slate-100 font-semibold shadow-lg shadow-blue-200/50"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Register Now
                </Button>
                <Button
                  href="/programme"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/15 font-semibold backdrop-blur"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Explore Programme
                </Button>
              </div>
            </div>

            <div className="space-y-5 lg:space-y-6">
              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/15 p-6 shadow-2xl shadow-blue-900/30">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-100">The Gambia 2025</p>
                    <p className="text-xl font-semibold">Innovation for inclusive growth</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400/90 to-blue-500/90 text-slate-900 font-black">NDI</div>
                </div>
                <p className="text-sm text-blue-50/90 leading-relaxed">
                  Experience a reimagined digital week featuring live demos, coastal startup stories, and collaborative labs aligned to The Gambia&apos;s Vision 2050.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-blue-50/80">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">🇬🇲 Smiling Coast innovation energy</div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">🌊 Atlantic-ready connectivity</div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">🤝 Policy, talent &amp; investment bridges</div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">🚀 Expo spotlighting local creators</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white text-slate-900 p-4 border border-blue-50 shadow-xl shadow-blue-100/70">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-lg font-bold">{stat.label}</div>
                    <p className="text-xs text-slate-500">{stat.hint}</p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-emerald-500/25 via-blue-600/25 to-slate-900/30 border border-white/15 p-4 text-blue-50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">🛰️</div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-blue-100">Connectivity Trail</p>
                    <p className="text-sm leading-relaxed">
                      Discover coast-to-hinterland projects linking youth talent, tourism, and agriculture to new digital rails across The Gambia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
