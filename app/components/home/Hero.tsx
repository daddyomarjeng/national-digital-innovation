import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

const highlightCards = [
  {
    title: 'Innovation Expo',
    description: 'Showcase frontier solutions from Gambian innovators and regional partners.',
    icon: '🚀',
  },
  {
    title: 'Policy & Investment Dialogues',
    description: 'Forge partnerships that accelerate inclusive digital transformation.',
    icon: '🤝',
  },
  {
    title: 'Skills for the Future',
    description: 'Hands-on masterclasses on AI, connectivity, and resilient infrastructure.',
    icon: '📚',
  },
];

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/gicta.jpg"
        >
          <source src="/vid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-900/70 to-emerald-900/60" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25)_0,transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 via-blue-600 to-red-500" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-20 md:py-28 lg:py-32">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-white/15 border border-white/20 rounded-full backdrop-blur">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden />
              <span className="text-sm font-semibold tracking-wide uppercase">The Gambia • {EVENT_DATES.fullDisplay}</span>
            </div>

            <div className="space-y-4">
              <p className="text-sm md:text-base text-blue-100 uppercase tracking-[0.18em]">National Digital Innovation Week</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Igniting Inclusive Transformation
                <span className="block text-emerald-200">Across The Gambia</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                {EVENT_THEME.tagline}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-4 py-3 backdrop-blur">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-2xl">📍</div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-100">Venue</p>
                  <p className="font-semibold">{VENUE.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-4 py-3 backdrop-blur">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-2xl">🗓️</div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-100">Dates</p>
                  <p className="font-semibold">{EVENT_DATES.fullDisplay}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-2xl px-4 py-3 backdrop-blur">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-2xl">🇬🇲</div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-100">Hosted by</p>
                  <p className="font-semibold">Ministry of Communications & Digital Economy</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-green-500 via-blue-700 to-red-500 text-white hover:shadow-lg border-0"
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
                className="w-full sm:w-auto border-2 border-white text-white/90 hover:bg-white/10 font-semibold backdrop-blur"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
              {highlightCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-lg shadow-lg hover:bg-white/15 transition-colors"
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="font-semibold">{card.title}</p>
                  <p className="text-sm text-blue-100 leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 border border-white/15 rounded-3xl p-6 lg:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-100">Event Overview</p>
                  <p className="text-2xl font-bold">Digital Innovation Week 2025</p>
                  <p className="text-blue-100">Championing technology for inclusive growth</p>
                </div>
                <div className="flex -space-x-3">
                  {[{ src: '/gicta.jpg', alt: 'GICTA' }, { src: '/mocde.jpg', alt: 'MoCDE' }].map((logo) => (
                    <div key={logo.alt} className="w-12 h-12 rounded-full bg-white shadow-lg overflow-hidden border border-white/60">
                      <Image src={logo.src} alt={logo.alt} width={48} height={48} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[EVENT_STATS.days, EVENT_STATS.speakers, EVENT_STATS.sessions, EVENT_STATS.participants].map((item, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/15 rounded-2xl px-4 py-3 text-center">
                    <p className="text-lg font-semibold">{item}</p>
                    <p className="text-xs text-blue-100">Key highlight</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-4 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-2xl">🌍</div>
                <div className="space-y-1">
                  <p className="text-sm uppercase tracking-wide text-blue-100">Why The Gambia</p>
                  <p className="font-semibold">Gateway for regional innovation and resilient connectivity.</p>
                  <p className="text-sm text-blue-100">Join leaders, creators, and investors shaping the country’s digital future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
