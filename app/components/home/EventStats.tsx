import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function EventStats() {
  const eventHighlights = [
    {
      icon: '📅',
      number: '5',
      label: 'Days',
      description: 'of intensive learning and networking',
    },
    {
      icon: '🎤',
      number: '50+',
      label: 'Speakers',
      description: 'Industry experts and thought leaders',
    },
    {
      icon: '💡',
      number: '100+',
      label: 'Sessions',
      description: 'Workshops, panels, and presentations',
    },
    {
      icon: '👥',
      number: '1000+',
      label: 'Participants',
      description: 'From government, private sector & startups',
    },
    {
      icon: '🚀',
      number: '50+',
      label: 'Exhibitors',
      description: 'Showcasing innovative solutions',
    },
    {
      icon: '🌍',
      number: '10+',
      label: 'Countries',
      description: 'International participation & partnerships',
    },
  ];

  return (
    <Section className="relative overflow-hidden" bgColor="gradient">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#7dd3fc_0,transparent_35%),radial-gradient(circle_at_80%_10%,#a5b4fc_0,transparent_30%),radial-gradient(circle_at_30%_80%,#f472b6_0,transparent_25%)]" aria-hidden />
      <div className="absolute inset-x-0 -top-24 h-48 bg-white/10 blur-3xl" aria-hidden />

      <SectionTitle subtitle="Join Africa's premier digital innovation gathering">
        Event at a Glance
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
        {eventHighlights.map((highlight, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur-xl shadow-xl shadow-blue-950/10 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-80" aria-hidden />
            <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(circle_at_center,#ffffff30,transparent_45%)]" aria-hidden />
            <div className="relative space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 text-2xl shadow-inner shadow-blue-900/40">
                {highlight.icon}
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-sm">
                {highlight.number}
              </div>
              <div className="text-lg font-semibold text-blue-50">{highlight.label}</div>
              <p className="text-sm text-blue-100/80 leading-relaxed">{highlight.description}</p>
            </div>
            <div className="absolute -bottom-10 inset-x-0 h-20 bg-gradient-to-t from-white/15 via-white/5 to-transparent blur-xl transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
          </div>
        ))}
      </div>
    </Section>
  );
}
