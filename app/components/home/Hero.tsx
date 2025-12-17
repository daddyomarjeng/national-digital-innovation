import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      {/* Immersive background video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-fallback.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-connecting-the-dots-1599/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/70 to-blue-800/80" />
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-cyan-500/20 blur-3xl" aria-hidden />
        <div className="absolute -right-10 top-12 w-80 h-80 bg-blue-400/30 blur-3xl" aria-hidden />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.25),transparent_45%)]" aria-hidden />
      </div>

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
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">{EVENT_DATES.fullDisplay}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              National Digital Innovation Week
              <span className="block text-blue-100 mt-2">The Gambia</span>
            </h1>

            {/* Theme */}
            <p className="text-xl md:text-2xl text-blue-50 mb-8 leading-relaxed max-w-3xl mx-auto">
              {EVENT_THEME.tagline}
            </p>

            {/* Venue */}
            <div className="flex items-center justify-center gap-3 mb-6 text-blue-50">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg font-semibold">{VENUE.name}</span>
              <span className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/20">
                Coastline views • World-class venue
              </span>
            </div>

            {/* Organized by GICTA */}
            <div className="mb-10">
              <p className="text-blue-100 text-sm mb-2">Organized by</p>
              <p className="text-white text-lg font-semibold">
                Ministry of Communications and Digital Economy (MoCDE)
              </p>
              <p className="text-blue-100 text-sm">In partnership with GICTA, WARDIP Gambia, and global allies</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl shadow-blue-900/20"
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/15 font-semibold backdrop-blur"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {["Innovation Expo", "Pan-African Collaborations", "Showcase of frontier tech from The Gambia"].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-blue-950 font-bold shadow-lg shadow-blue-900/30">
                    ✨
                  </span>
                  <p className="text-sm md:text-base text-blue-50">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 max-w-5xl mx-auto">
          {[
            { label: EVENT_STATS.days, icon: '📅' },
            { label: EVENT_STATS.speakers, icon: '🎤' },
            { label: EVENT_STATS.sessions, icon: '💡' },
            { label: EVENT_STATS.participants, icon: '👥' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-5 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/15 shadow-lg shadow-blue-900/20"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-lg font-semibold text-white">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
