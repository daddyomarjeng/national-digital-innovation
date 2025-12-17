import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function EventStats() {
  const eventHighlights = [
    {
      icon: '📅',
      number: '5',
      label: 'Days',
      description: 'of intensive learning and networking',
      accent: 'from-blue-500/10 via-blue-500/5 to-transparent',
    },
    {
      icon: '🎤',
      number: '50+',
      label: 'Speakers',
      description: 'Industry experts and thought leaders',
      accent: 'from-cyan-500/10 via-cyan-500/5 to-transparent',
    },
    {
      icon: '💡',
      number: '100+',
      label: 'Sessions',
      description: 'Workshops, panels, and presentations',
      accent: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
    },
    {
      icon: '👥',
      number: '1000+',
      label: 'Participants',
      description: 'From government, private sector & startups',
      accent: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    },
    {
      icon: '🚀',
      number: '50+',
      label: 'Exhibitors',
      description: 'Showcasing innovative solutions',
      accent: 'from-purple-500/10 via-purple-500/5 to-transparent',
    },
    {
      icon: '🌍',
      number: '10+',
      label: 'Countries',
      description: 'International participation & partnerships',
      accent: 'from-amber-500/10 via-amber-500/5 to-transparent',
    },
  ];

  return (
    <Section bgColor="white" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 pointer-events-none" />
      <div className="absolute -left-10 top-24 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -right-10 bottom-16 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative">
        <SectionTitle subtitle="Join Africa's premier digital innovation gathering">
          Event at a Glance
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {eventHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-blue-100/70 bg-white/80 p-4 shadow-lg shadow-blue-100/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.accent}`} aria-hidden="true" />
              <div className="relative z-10 text-center space-y-2">
                <div className="flex items-center justify-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-inner shadow-blue-200">
                    {highlight.icon}
                  </span>
                </div>
                <div className="text-3xl md:text-4xl font-extrabold text-blue-800 tracking-tight">
                  {highlight.number}
                </div>
                <div className="text-base md:text-lg font-semibold text-gray-900">{highlight.label}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
