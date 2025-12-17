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
    <Section bgColor="white">
      <SectionTitle subtitle="Join Africa's premier digital innovation gathering">
        Event at a Glance
      </SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {eventHighlights.map((highlight, idx) => (
          <div key={idx} className="text-center">
            <div className="text-5xl mb-3">{highlight.icon}</div>
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
              {highlight.number}
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">
              {highlight.label}
            </div>
            <p className="text-sm text-gray-600">{highlight.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
