import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

const HERO_VIDEO = '/vid4.mp4';
const HIGHLIGHTS = [
  'Smart nation services and digital-first governance',
  'Inclusive skills for young Gambian innovators',
  'Partnerships that connect Banjul to the world',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/gicta.jpg"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/80 to-emerald-700/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.15),transparent_30%),radial-gradient(circle_at_60%_80%,rgba(59,130,246,0.18),transparent_28%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-blue-950/70 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex min-h-[80vh] flex-col justify-center px-4 md:px-6 lg:px-8 max-w-7xl py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr,0.9fr] items-center">
          <div>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-wide">
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/30">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                {EVENT_DATES.fullDisplay}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm ring-1 ring-white/30">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657 12 22l-5.657-5.343a8 8 0 1 1 11.314 0Z" />
                  <circle cx="12" cy="10" r="3" strokeWidth={2} />
                </svg>
                {VENUE.city}, {VENUE.country}
              </span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-blue-100 shadow-lg shadow-emerald-900/30 ring-1 ring-white/30">
              Innovate • Transform • Elevate The Gambia
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              National Digital Innovation Week
              <span className="mt-2 block text-emerald-200">The Gambia</span>
            </h1>

            <p className="mt-6 text-lg text-blue-50 md:text-xl md:leading-relaxed">
              {EVENT_THEME.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-blue-100">
              <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/25 backdrop-blur-sm">
                <Image src="/mocde.jpg" alt="MoCDE" width={36} height={36} className="h-9 w-9 rounded-full object-contain bg-white" />
                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-wide text-blue-200">Lead Host</p>
                  <p className="font-semibold text-white">Ministry of Communications &amp; Digital Economy</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-3 rounded-lg bg-white/10 px-3 py-2 ring-1 ring-white/25 backdrop-blur-sm">
                <Image src="/gicta.jpg" alt="GICTA" width={40} height={40} className="h-10 w-10 rounded-full object-contain bg-white" />
                <div className="leading-tight">
                  <p className="text-xs uppercase tracking-wide text-blue-200">Organized by</p>
                  <p className="font-semibold text-white">Gambia Information &amp; Communication Technology Agency</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 via-blue-600 to-green-500 text-white shadow-lg shadow-emerald-900/40 transition hover:shadow-emerald-800/50"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-5m-1.414-9.414a2 2 0 1 1 2.828 2.828L11.828 15H9v-2.828l8.586-8.586Z" />
                </svg>
                Register Now
              </Button>
              <Button
                href="/programme"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto border-2 border-white/60 bg-white/10 text-white backdrop-blur-sm transition hover:border-white hover:bg-white/20"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                </svg>
                View Programme
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {HIGHLIGHTS.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <p className="text-sm text-blue-50">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl bg-white/10 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-100">Hosted at</p>
                  <p className="text-xl font-semibold text-white">{VENUE.shortName}</p>
                  <p className="text-sm text-blue-100">{VENUE.address}</p>
                </div>
                <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-emerald-100 ring-1 ring-white/25">
                  {EVENT_STATS.days}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                {[
                  { label: EVENT_STATS.speakers, icon: '🎤' },
                  { label: EVENT_STATS.sessions, icon: '💡' },
                  { label: EVENT_STATS.participants, icon: '👥' },
                  { label: EVENT_STATS.days, icon: '📅' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/15 bg-white/5 p-3">
                    <div className="text-2xl">{stat.icon}</div>
                    <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-red-500/60 via-blue-600/70 to-green-500/60 p-4 text-sm text-white ring-1 ring-white/20">
                <p className="font-semibold uppercase tracking-wide">Gambian innovation on the world stage</p>
                <p className="mt-1 text-blue-50">
                  Join policymakers, creators, and investors shaping a connected, resilient digital future for every community across The Gambia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
