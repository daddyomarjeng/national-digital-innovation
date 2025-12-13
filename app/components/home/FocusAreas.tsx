import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { FOCUS_AREAS } from '@/app/constants';

export default function FocusAreas() {
  return (
    <Section bgColor="white">
      <SectionTitle subtitle="Key thematic areas driving The Gambia's digital transformation">
        Focus Areas
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FOCUS_AREAS.map((area, idx) => (
          <div
            key={idx}
            className={`${area.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
            <p className="text-gray-700">{area.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
