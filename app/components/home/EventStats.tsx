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
    <Section bgColor="white" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50/60" aria-hidden="true" />
      <div className="absolute -left-24 top-10 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute -right-24 bottom-0 w-80 h-80 bg-cyan-200/40 blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, #dbeafe 0%, transparent 30%), radial-gradient(circle at 90% 30%, #e0f2fe 0%, transparent 28%)' }} aria-hidden="true" />

      <div className="relative">
        <SectionTitle subtitle="Join Africa's premier digital innovation gathering">
          Event at a Glance
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {eventHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm shadow-lg shadow-blue-50 hover:-translate-y-1 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white" aria-hidden="true" />
              <div className="absolute -right-6 -top-6 w-20 h-20 bg-blue-200/50 rounded-full blur-2xl group-hover:scale-110 transition-transform" aria-hidden="true" />
              <div className="relative text-center p-6">
                <div className="text-5xl mb-3 drop-shadow-sm">{highlight.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
                  {highlight.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.label}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
