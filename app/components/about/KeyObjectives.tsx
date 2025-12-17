import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function KeyObjectives() {
  const objectives = [
    'Foster collaboration between government, private sector, and civil society',
    'Showcase local and international digital innovations and solutions',
    'Attract investment and partnerships for the digital ecosystem',
    'Build awareness and capacity in emerging technologies',
    'Support entrepreneurship and startup development',
    'Promote digital inclusion and accessibility for all',
    'Facilitate policy dialogue on digital transformation',
    'Strengthen regional and international cooperation',
  ];

  return (
    <Section bgColor="gradient">
      <div className="max-w-4xl mx-auto">
        <SectionTitle light>Key Objectives of National Digital Innovation Week</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objectives.map((objective, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                {idx + 1}
              </div>
              <p className="text-blue-50 pt-1">{objective}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
