import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

const highlightPillars = [
  {
    title: 'Digital progress powered by Gambian talent',
    icon: '🌍',
  },
  {
    title: 'Bold policies for inclusive connectivity',
    icon: '⚡',
  },
  {
    title: 'Partnerships that unlock new markets',
    icon: '🤝',
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/vid2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0c1c8c]/70 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(206,17,38,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(12,28,140,0.3),transparent_40%),radial-gradient(circle_at_40%_75%,rgba(58,157,35,0.25),transparent_35%)]" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='0.35' stroke-width='1'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M10 10h60v60H10z'/%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-14 py-20 md:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                <span className="flex h-2 w-2 animate-pulse rounded-full bg-[#3a9d23]" aria-hidden="true" />
                <span className="text-blue-50">{EVENT_DATES.fullDisplay}</span>
                <span className="text-white/60">•</span>
                <span className="text-blue-50">Banjul, The Gambia</span>
              </div>

              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-100">National Digital Innovation Week</p>
                <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
                  A bold digital future shaped in The Gambia
                  <span className="block bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23] bg-clip-text text-transparent">
                    {EVENT_THEME.tagline}
                  </span>
                </h1>
                <p className="text-lg text-blue-100 md:text-xl">
                  From riverfront cities to rural hubs, we are convening policy leaders, creators, investors, and innovators to
                  accelerate inclusive growth for every Gambian.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {highlightPillars.map((pillar) => (
                  <span
                    key={pillar.title}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm backdrop-blur"
                  >
                    <span className="text-lg" aria-hidden="true">
                      {pillar.icon}
                    </span>
                    <span className="text-blue-50">{pillar.title}</span>
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  href="/registration"
                  variant="ghost"
                  size="lg"
                  className="w-full rounded-xl border-0 bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23] text-white shadow-xl shadow-black/20 transition-transform hover:scale-[1.02] sm:w-auto"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Register for the Week
                </Button>
                <Button
                  href="/programme"
                  variant="ghost"
                  size="lg"
                  className="w-full rounded-xl border border-white/40 bg-white/5 text-white transition-colors hover:bg-white/15 sm:w-auto"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Programme
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-blue-50">
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-white/10 p-2 text-center text-lg" aria-hidden="true">
                    📍
                  </span>
                  <span>{VENUE.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-8 w-8 rounded-full bg-white/10 p-2 text-center text-lg" aria-hidden="true">
                    📅
                  </span>
                  <span>{EVENT_DATES.display}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Anchored by</p>
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-3 py-2 backdrop-blur">
                  <Image src="/mocde.jpg" alt="MoCDE" width={44} height={44} className="h-10 w-10 rounded-full object-cover" />
                  <Image src="/gicta.jpg" alt="GICTA" width={44} height={44} className="h-10 w-10 rounded-full object-cover" />
                  <Image src="/wardip.jpg" alt="WARDIP" width={44} height={44} className="h-10 w-10 rounded-full object-cover" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-6 -top-10 h-28 w-28 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
              <div className="absolute -left-8 bottom-10 h-24 w-24 rounded-full bg-[#3a9d23]/20 blur-3xl" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-100">This December in Banjul</p>
                    <h2 className="mt-2 text-2xl font-bold text-white">{EVENT_THEME.title}</h2>
                    <p className="text-sm text-blue-100">{EVENT_THEME.subtitle}</p>
                  </div>
                  <div className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/20">
                    Future Ready
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { label: 'Days of dialogue', value: EVENT_STATS.days },
                    { label: 'Speakers & storytellers', value: EVENT_STATS.speakers },
                    { label: 'Immersive sessions', value: EVENT_STATS.sessions },
                    { label: 'Participants', value: EVENT_STATS.participants },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm shadow-black/10"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-blue-100">{item.label}</p>
                      <p className="text-lg font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3 text-sm text-blue-50">
                  {["Tech for climate resilience", 'Seamless digital government services', 'A thriving startup and skills pipeline'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-base" aria-hidden="true">
                        ✨
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-blue-50">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-2xl" aria-hidden="true">
                      🌴
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em]">Where innovation meets the River Gambia</p>
                      <p className="text-sm font-semibold text-white">Sir Dawda Kairaba Jawara International Conference Center</p>
                    </div>
                  </div>
                  <div className="hidden rounded-full bg-gradient-to-r from-[#ce1126] via-[#0c1c8c] to-[#3a9d23] px-4 py-2 text-xs font-semibold shadow-lg shadow-black/20 sm:block">
                    Join in person
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pb-6 md:grid-cols-4">
            {[
              { label: EVENT_STATS.days, icon: '🗓️' },
              { label: EVENT_STATS.speakers, icon: '🎙️' },
              { label: EVENT_STATS.sessions, icon: '💡' },
              { label: EVENT_STATS.participants, icon: '🧑🏾‍🤝‍🧑🏻' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center shadow-lg shadow-black/20 transition-transform hover:-translate-y-1"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl">
                  {stat.icon}
                </div>
                <p className="mt-3 text-base font-semibold text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
