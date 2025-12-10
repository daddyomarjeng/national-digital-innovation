import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="py-20 md:py-28 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-700/50 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">December 8-12, 2025</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              National Digital Innovation Week
              <span className="block text-blue-200 mt-2">The Gambia</span>
            </h1>

            {/* Theme */}
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
              Accelerating Digital Transformation and Strengthening Connectivity for Inclusive Growth in The Gambia
            </p>

            {/* Venue */}
            <div className="flex items-center justify-center mb-10 text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-lg">Sir Dawda Kairaba Jawara International Conference Center</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="/registration"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Register Now
              </Button>
              <Button
                href="/programme"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Programme
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 max-w-4xl mx-auto">
          {[
            { label: '5 Days', icon: '📅' },
            { label: '50+ Speakers', icon: '🎤' },
            { label: '100+ Sessions', icon: '💡' },
            { label: '1000+ Participants', icon: '👥' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-lg font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
