import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { ORGANIZERS } from '../../constants';

// Map organizer names to their logo images
const getOrganizerImage = (name: string): string => {
  const imageMap: { [key: string]: string } = {
    'GICTA': '/gicta.jpg',
    'Ministry': '/mocde.jpg',
    'WARDIP': '/wardip.jpg',
    'World Bank': '/wb.jpg',
  };
  
  for (const [key, value] of Object.entries(imageMap)) {
    if (name.includes(key)) {
      return value;
    }
  }
  
  return '/gicta.jpg'; // fallback
};

export default function Organizers() {
  return (
    <Section bgColor="gray">
      <SectionTitle subtitle="Driving digital transformation together">
        Event Organizers
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {ORGANIZERS.map((org, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-xl p-6 text-center transition-all ${
              org.isPrimary 
                ? 'border-4 border-blue-600 shadow-xl transform hover:scale-105' 
                : 'border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
            }`}
          >
            <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden ${
              org.isPrimary 
                ? 'bg-blue-50 border-4 border-blue-600 shadow-md' 
                : 'bg-gray-50 border-2 border-gray-200'
            }`}>
              <div className="relative w-20 h-20">
                <Image
                  src={getOrganizerImage(org.name)}
                  alt={`${org.name} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
            <h3 className={`text-lg font-bold mb-2 ${org.isPrimary ? 'text-blue-700' : 'text-gray-900'}`}>
              {org.shortName}
            </h3>
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
              org.isPrimary 
                ? 'bg-blue-700 text-white' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {org.role}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
