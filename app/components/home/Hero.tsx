import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Technology Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://cdn.coverr.co/videos/coverr-technology-network-connection-8085/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/75 to-blue-700/70" aria-hidden="true"></div>
        <div className="absolute inset-0 hero-grid-overlay" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.2),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.25),transparent_30%)]" aria-hidden="true"></div>
      </div>

      {/* Floating Logos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* GICTA Logo - Top Left */}
        <div className="absolute top-16 left-6 md:left-10 w-24 h-24 md:w-32 md:h-32 opacity-30 animate-float">
          <div className="w-full h-full bg-white/90 rounded-full p-4 shadow-xl shadow-blue-900/25">
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
        <div className="absolute top-28 right-6 md:right-16 w-20 h-20 md:w-28 md:h-28 opacity-35 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-xl shadow-blue-900/25">
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
        <div className="absolute bottom-32 left-10 md:left-20 w-20 h-20 md:w-28 md:h-28 opacity-25 animate-float-slow">
          <div className="w-full h-full bg-white/90 rounded-full p-3 shadow-xl shadow-blue-900/25">
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
        <div className="absolute bottom-24 right-6 md:right-12 w-24 h-24 md:w-32 md:h-32 opacity-20 animate-float-delayed">
          <div className="w-full h-full bg-white/90 rounded-full p-4 shadow-xl shadow-blue-900/25">
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

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32 space-y-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-600/40 rounded-full blur-2xl" aria-hidden="true"></div>
              {/* Event Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-blue-300/30 rounded-full mb-6 backdrop-blur-xl shadow-lg shadow-blue-900/20">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-semibold tracking-tight text-blue-50">{EVENT_DATES.fullDisplay}</span>
                <span className="ml-3 px-3 py-1 rounded-full bg-blue-500/30 text-xs uppercase tracking-widest">The Gambia</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-lg">
                National Digital Innovation Week
                <span className="block text-blue-100 mt-2 text-3xl md:text-4xl font-semibold">Unleashing The Gambia's Digital Future</span>
              </h1>

              {/* Theme */}
              <p className="text-lg md:text-xl text-blue-50/90 mb-8 leading-relaxed max-w-3xl">
                {EVENT_THEME.tagline}. Experience immersive showcases, strategic dialogues, and boundary-pushing innovations crafted for the heart of West Africa.
              </p>

              {/* Venue & Organizer */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 mb-10 text-blue-50">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-blue-200/30 backdrop-blur">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm md:text-base font-semibold">{VENUE.name}</span>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur">
                  <div className="w-2 h-2 rounded-full bg-cyan-300 mr-2 animate-ping"></div>
                  <span className="text-sm md:text-base font-semibold">Organized by the Ministry of Communications & Digital Economy</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-start gap-4">
                <Button
                  href="/registration"
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-50 to-cyan-100 text-blue-900 hover:from-white hover:to-blue-50 font-semibold shadow-lg shadow-blue-900/20"
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
                  className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white/10 font-semibold backdrop-blur shadow-lg shadow-blue-900/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  View Programme
                </Button>
              </div>

              {/* Innovation Tags */}
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-50/90">
                {["Smart Government", "Future Connectivity", "Inclusive Innovation", "Gambian Tech Talent", "Investment Ready"].map((pill) => (
                  <span key={pill} className="px-3 py-1 rounded-full bg-white/5 border border-blue-200/30 backdrop-blur-sm hover:border-white/60 transition-colors">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlight Card */}
            <div className="bg-white/10 backdrop-blur-2xl border border-blue-200/20 rounded-3xl p-6 md:p-8 shadow-2xl shadow-blue-900/30 relative overflow-hidden">
              <div className="absolute -right-8 -top-10 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-600/20 rounded-full blur-3xl" aria-hidden="true"></div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-blue-100/80">Innovation Pulse</p>
                  <h3 className="text-2xl font-bold text-white">Week at a Glance</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-xs font-semibold text-blue-950">Live</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {[{ label: 'Days', value: EVENT_STATS.days }, { label: 'Speakers', value: EVENT_STATS.speakers }, { label: 'Sessions', value: EVENT_STATS.sessions }, { label: 'Participants', value: EVENT_STATS.participants }].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                    <p className="text-xs uppercase tracking-widest text-blue-100/70">{stat.label}</p>
                    <p className="text-xl font-bold mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {["Government, private sector & partners co-creating a connected future", "Hands-on expo with frontier technologies & Gambian innovations", "Actionable sessions on policy, finance, talent, and infrastructure"].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-cyan-300"></span>
                    <p className="text-sm text-blue-50/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-6">
            {[
              { label: EVENT_STATS.days, icon: '📅' },
              { label: EVENT_STATS.speakers, icon: '🎤' },
              { label: EVENT_STATS.sessions, icon: '💡' },
              { label: EVENT_STATS.participants, icon: '👥' },
            ].map((stat, idx) => (
              <div key={idx} className="group text-center p-4 md:p-5 bg-white/10 border border-white/15 backdrop-blur-xl rounded-2xl shadow-lg shadow-blue-900/20 transition-transform hover:-translate-y-1 hover:border-white/40">
                <div className="text-3xl mb-2 drop-shadow-md">{stat.icon}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="mt-1 h-1 w-12 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 opacity-70 group-hover:opacity-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
