import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function EventStats() {
  const eventHighlights = [
    {
      icon: '📅',
      number: '5',
      label: 'Days',
      description: 'immersive programming inspired by regional innovation weeks',
      accent: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🎤',
      number: '50+',
      label: 'Speakers',
      description: 'visionaries, founders and policymakers from The Gambia & beyond',
      accent: 'from-indigo-500 to-blue-600',
    },
    {
      icon: '💡',
      number: '100+',
      label: 'Sessions',
      description: 'labs, panels and showcases covering frontier tech',
      accent: 'from-purple-500 to-indigo-500',
    },
    {
      icon: '👥',
      number: '1000+',
      label: 'Participants',
      description: 'entrepreneurs, investors, creatives and students',
      accent: 'from-cyan-500 to-teal-500',
    },
    {
      icon: '🚀',
      number: '50+',
      label: 'Exhibitors',
      description: 'Afrocentric startups and global partners unveiling products',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      icon: '🌍',
      number: '10+',
      label: 'Countries',
      description: 'regional delegations building bridges across Africa',
      accent: 'from-emerald-400 to-cyan-500',
    },
  ];

  return (
    <Section bgColor="white" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-70" aria-hidden />
      <div className="relative">
        <SectionTitle subtitle="Join Africa's premier digital innovation gathering with the same energy seen in Ghana and Nigeria"> Event at a Glance </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventHighlights.map((highlight, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-blue-100 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.accent} opacity-10`} aria-hidden />
              <div className="relative p-6 flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-md shadow-blue-100">
                  {highlight.icon}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-blue-700/70">{highlight.label}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-blue-900">{highlight.number}</span>
                    <span className="h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
