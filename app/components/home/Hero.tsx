import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover brightness-90"
          autoPlay
          loop
          muted
          playsInline
          poster="/file.svg"
        >
          <source
            src="https://cdn.pixabay.com/vimeo/337273253/ai-24133.mp4?width=1280&hash=a7026cb4a94933e0ad288c8edb32f70a0eade386"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/75 to-sky-800/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.2),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(14,165,233,0.25),transparent_35%)]" />
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-12 -left-24 w-80 h-80 bg-emerald-400/30 blur-[120px] animate-aurora" aria-hidden />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-sky-500/25 blur-[140px] animate-aurora-delay" aria-hidden />

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-14 left-10 w-24 h-24 md:w-28 md:h-28 opacity-30 animate-float">
          <div className="w-full h-full bg-white/90 rounded-2xl p-3 shadow-xl shadow-blue-900/40 backdrop-blur">
            <Image src="/gicta.jpg" alt="GICTA" width={112} height={112} className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="absolute top-24 right-16 w-20 h-20 md:w-24 md:h-24 opacity-30 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-2xl p-2.5 shadow-xl shadow-blue-900/40 backdrop-blur">
            <Image src="/mocde.jpg" alt="MoCDE" width={96} height={96} className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="absolute bottom-28 left-16 w-20 h-20 md:w-24 md:h-24 opacity-25 animate-float-slow">
          <div className="w-full h-full bg-white/90 rounded-2xl p-2.5 shadow-xl shadow-blue-900/40 backdrop-blur">
            <Image src="/wardip.jpg" alt="WARDIP" width={96} height={96} className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="hidden lg:block absolute top-1/2 right-10 w-16 h-16 opacity-30 animate-float">
          <div className="w-full h-full bg-white/80 rounded-2xl p-2 shadow-lg shadow-blue-900/30 backdrop-blur">
            <Image src="/gicta.jpg" alt="GICTA" width={64} height={64} className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-16 md:py-24">
          <div>
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg shadow-blue-900/40">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-2 animate-pulse" aria-hidden></span>
              <span className="text-sm font-semibold tracking-wide">{EVENT_DATES.fullDisplay}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="block">National Digital</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-200 via-white to-emerald-200">
                Innovation Week
              </span>
              <span className="block text-blue-100 text-2xl md:text-3xl mt-2">The Gambia</span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-6 max-w-2xl">
              {EVENT_THEME.tagline} Experience The Gambia&apos;s most vibrant gathering of innovators, investors, founders,
              and policymakers shaping the region&apos;s digital future.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              {["Immersive tech showcases", "Policy & investment dialogues", "Future-ready skills"].map((chip) => (
                <span
                  key={chip}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-blue-50 backdrop-blur hover:border-emerald-300/50 transition"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-lg shadow-blue-900/30"
              >
                <svg className="w-5 h-5 mr-2 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Register Now
              </Button>
              <Button
                href="/programme"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto border border-white/60 text-white hover:bg-white/10 font-semibold backdrop-blur shadow-lg shadow-sky-900/30"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>

            <div className="flex items-center gap-4 mt-8 text-sm text-blue-100/90">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6v6l4 2" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Fast-track networking</p>
                  <p className="text-xs text-blue-100/80">Curated matches for founders, investors & partners</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 border border-white/10">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 7h18M3 12h10m-6 5h14" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-white">Innovation expo</p>
                  <p className="text-xs text-blue-100/80">See Gambian solutions solving African challenges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-12 w-36 h-36 bg-gradient-to-br from-white/20 via-sky-200/20 to-emerald-200/20 rounded-full blur-3xl" aria-hidden></div>
            <div className="absolute bottom-2 -right-6 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl" aria-hidden></div>

            <div className="relative rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-blue-900/30 p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-100/80">Organized by</p>
                  <p className="text-lg font-semibold">Ministry of Communications and Digital Economy</p>
                </div>
                <div className="flex -space-x-3">
                  {["/gicta.jpg", "/mocde.jpg", "/wardip.jpg"].map((logo) => (
                    <span key={logo} className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                      <Image src={logo} alt="Event partner logo" width={32} height={32} className="object-contain" />
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                  <p className="text-xs uppercase tracking-wide text-blue-100/70">Venue</p>
                  <p className="text-base font-semibold text-white mt-1">{VENUE.name}</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/10">
                  <p className="text-xs uppercase tracking-wide text-blue-100/70">Theme</p>
                  <p className="text-base font-semibold text-white mt-1">{EVENT_THEME.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: EVENT_STATS.days, icon: '📅' },
                  { label: EVENT_STATS.speakers, icon: '🎤' },
                  { label: EVENT_STATS.sessions, icon: '💡' },
                  { label: EVENT_STATS.participants, icon: '👥' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white/10 border border-white/10 p-4 text-center hover:border-emerald-200/60 transition"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-sm font-semibold text-white/90">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-400/15 via-sky-400/15 to-blue-500/15 border border-white/10">
                <p className="text-sm text-blue-100/90">Tap into immersive demos, future-of-work sandboxes, startup showcases, and policy labs crafted for The Gambia&apos;s next wave of innovators.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
