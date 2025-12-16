import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';
import { ORGANIZERS } from '@/app/constants';

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

export default function OrganisersGovernance() {
  const organisers = ORGANIZERS.map(org => ({
    name: org.name,
    role: org.role,
    description: org.description,
    isPrimary: org.isPrimary || false,
  }));

  return (
    <Section bgColor="white">
      <SectionTitle subtitle="The organizations driving National Digital Innovation Week">
        Organisers & Governance
      </SectionTitle>
      <div className="space-y-8 max-w-5xl mx-auto">
        {organisers.map((org, idx) => (
          <Card key={idx} hover={false} className={org.isPrimary ? 'border-4 border-blue-500 shadow-xl' : ''}>
            <CardBody className="lg:flex lg:items-start lg:gap-6">
              <div className="shrink-0 mb-4 lg:mb-0">
                <div className={`w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden ${
                  org.isPrimary 
                    ? 'bg-white border-4 border-blue-700 shadow-lg' 
                    : 'bg-white border-2 border-gray-200'
                }`}>
                  <div className="relative w-16 h-16">
                    <Image
                      src={getOrganizerImage(org.name)}
                      alt={`${org.name} logo`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <h3 className={`text-xl font-bold ${org.isPrimary ? 'text-blue-700' : 'text-gray-900'}`}>
                    {org.name}
                  </h3>
                  <span className={`inline-block mt-1 text-sm font-semibold px-3 py-1 rounded-full ${
                    org.isPrimary 
                      ? 'bg-blue-700 text-white' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {org.role}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{org.description}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
