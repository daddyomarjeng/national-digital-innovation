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
    <Section bgColor="pattern">
      <SectionTitle subtitle="An immersive, future-forward festival of ideas and experiences" className="text-white" light>
        Event at a Glance
      </SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {eventHighlights.map((highlight, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 text-center shadow-2xl backdrop-blur-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.3),transparent_35%)] opacity-50" aria-hidden="true" />
            <div className="absolute right-2 top-2 h-10 w-10 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
            <div className="relative text-4xl md:text-5xl mb-3 drop-shadow">{highlight.icon}</div>
            <div className="relative text-3xl md:text-4xl font-extrabold text-white mb-1 tracking-tight">
              {highlight.number}
            </div>
            <div className="relative text-base md:text-lg font-semibold text-blue-100 mb-2 uppercase tracking-wide">
              {highlight.label}
            </div>
            <p className="relative text-sm text-blue-100/80 leading-snug">{highlight.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
