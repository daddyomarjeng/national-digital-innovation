import Button from '../ui/Button';
import Image from 'next/image';
import { EVENT_DATES, EVENT_THEME, VENUE, EVENT_STATS } from '@/app/constants';

export default function Hero() {
  const highlightPills = [
    'Immersive Expo Arena',
    'Ministerial Roundtables',
    'Innovation Labs & Demos',
    'Start-up Pitches & Investor Hours',
    'Digital Skills Masterclasses',
  ];

  return (
    <section className="relative overflow-hidden text-white bg-slate-950">
      {/* Immersive Background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/75 to-slate-950/85" />
        <div
          className="absolute inset-0 opacity-70 mix-blend-screen"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 30%), radial-gradient(circle at 80% 0%, rgba(56,189,248,0.25), transparent 30%), radial-gradient(circle at 60% 70%, rgba(99,102,241,0.25), transparent 32%)',
          }}
        />
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

      {/* Accent Glows */}
      <div className="absolute -top-24 -left-16 w-80 h-80 bg-blue-500/25 blur-3xl rounded-full animate-pulse-soft" />
      <div className="absolute -bottom-32 -right-16 w-96 h-96 bg-cyan-400/25 blur-3xl rounded-full animate-pulse-soft" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-lg shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">{EVENT_DATES.fullDisplay}</span>
            </div>

            <div className="inline-flex items-center px-4 py-2 bg-black/20 rounded-full border border-white/15 text-sm uppercase tracking-[0.2em] mb-4 backdrop-blur">
              Inspired by West Africa’s most iconic innovation weeks
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-xl">
              National Digital Innovation Week
              <span className="block text-blue-100 mt-2">The Gambia</span>
            </h1>

            {/* Theme */}
            <p className="text-xl md:text-2xl text-blue-50/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              {EVENT_THEME.tagline}
            </p>

            {/* Venue */}
            <div className="flex items-center justify-center mb-4 text-blue-50/90">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">{VENUE.name}</span>
            </div>

            {/* Organized by GICTA */}
            <div className="mb-10">
              <p className="text-blue-200 text-sm mb-2">Organized by</p>
              <p className="text-white text-lg font-semibold drop-shadow-lg">
                Ministry of Communications and Digital Economy(MOCDE)
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/registration"
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-xl"
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
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold backdrop-blur shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-10">
              {highlightPills.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm backdrop-blur-lg shadow-lg"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mt-8 text-sm text-blue-50/80 max-w-3xl mx-auto leading-relaxed bg-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-lg">
              <p className="font-semibold text-blue-50">Recommended cinematic loop for a self-hosted hero video:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>
                  <a
                    href="https://videos.pexels.com/video-files/3129671/3129671-uhd_3840_2160_25fps.mp4"
                    className="underline decoration-blue-200 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Futuristic city lights (Pexels #3129671)
                  </a>
                </li>
                <li>
                  <a
                    href="https://videos.pexels.com/video-files/14645738/14645738-uhd_2560_1440_25fps.mp4"
                    className="underline decoration-blue-200 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tech innovation hub b-roll (Pexels #14645738)
                  </a>
                </li>
              </ul>
              <p className="mt-2 text-xs text-blue-100/80">
                Download and place in <code className="bg-black/30 px-1 py-0.5 rounded">public/media/hero.mp4</code> for offline use, then
                point the <span className="font-semibold">Hero</span> component to that path.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 pb-16 max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl" />
          {[
            { label: EVENT_STATS.days, icon: '📅' },
            { label: EVENT_STATS.speakers, icon: '🎤' },
            { label: EVENT_STATS.sessions, icon: '💡' },
            { label: EVENT_STATS.participants, icon: '👥' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="relative text-center p-5 bg-gradient-to-br from-white/15 via-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-white/15 shadow-lg"
            >
              <div className="absolute inset-0 rounded-2xl border border-white/10" />
              <div className="text-3xl mb-2 drop-shadow-lg">{stat.icon}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
