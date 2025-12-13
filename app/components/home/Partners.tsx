import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { PARTNERS } from '@/app/constants';

export default function Partners() {
  // Helper function to get partner abbreviation
  const getPartnerAbbreviation = (partner: string): string => {
    const abbreviations: { [key: string]: string } = {
      'Gambia Information and Communication Technology Agency (GICTA)': 'GICTA',
      'Ministry of Communication and Digital Economy': 'MoCDE',
      'WARDIP Gambia': 'WARDIP',
      'The World Bank': 'WB',
      'African Development Bank': 'ADB',
      'ECOWAS Commission': 'ECOWAS',
      'International Telecommunication Union (ITU)': 'ITU',
      'African Union': 'AU',
    };
    return abbreviations[partner] || partner.substring(0, 2).toUpperCase();
  };

  return (
    <Section bgColor="white">
      <SectionTitle subtitle="In collaboration with our esteemed partners">
        Our Partners
      </SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {PARTNERS.map((partner, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-blue-400 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-sm">
                {getPartnerAbbreviation(partner)}
              </div>
              <p className="text-xs font-medium text-gray-700">{partner}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
