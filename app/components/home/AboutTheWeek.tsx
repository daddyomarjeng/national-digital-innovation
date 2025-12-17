import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function AboutTheWeek() {
  const highlights = [
    'Inspired by the vibrancy of Ghana and Nigeria digital innovation weeks',
    'Curated experiences across policy, talent, investment, and creativity',
    'Designed for founders, students, public servants, and global partners',
  ];

  return (
    <Section bgColor="white">
      <div className="max-w-6xl mx-auto">
        <SectionTitle subtitle="Join us for an inspiring week of innovation, collaboration, and digital transformation">
          About the Week
        </SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The <strong>National Digital Innovation Week</strong> is The Gambia&apos;s premier event bringing together government leaders,
              technology innovators, entrepreneurs, investors, development partners, and digital enthusiasts to accelerate the country&apos;s
              digital transformation agenda.
            </p>
            <p>
              Over five days, participants will engage in keynote presentations, panel discussions, workshops, and networking sessions
              focused on leveraging digital technologies to drive inclusive economic growth, improve public service delivery, and create
              opportunities for all Gambians.
            </p>
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 border border-blue-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">What makes this year special?</h3>
              <ul className="space-y-2 text-gray-700">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p>
              This landmark event aligns with The Gambia&apos;s National Development Plan and the ECOWAS Digital Transformation Strategy,
              demonstrating our commitment to building a digitally empowered nation that competes effectively in the global economy.
            </p>
          </div>

          <div className="h-full">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white p-8 shadow-xl">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.4),_transparent_45%)]" aria-hidden />
              <div className="relative space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Gambian spotlight</p>
                <h3 className="text-2xl font-bold leading-tight">
                  A bold, immersive platform to showcase The Gambia&apos;s creativity, resilience, and tech talent.
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Expect cinematic storytelling, live demos, innovation studios, and vibrant cultural moments that celebrate our unique perspective on digital transformation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Policy Dialogues", "Founders' Labs", "Innovation Expo", "Investor Circles"].map((pill) => (
                    <span key={pill} className="px-3 py-1 rounded-full bg-white/15 border border-white/20 text-sm">
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
