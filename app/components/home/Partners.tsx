import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import { PARTNERS } from '@/app/constants';

export default function Partners() {
  // Helper function to get partner image path
  const getPartnerImage = (partner: string): string => {
    const imageMap: { [key: string]: string } = {
      'Gambia Information and Communication Technology Agency (GICTA)': '/gicta.jpg',
      'Ministry of Communication and Digital Economy': '/mocde.jpg',
      'WARDIP Gambia': '/wardip.jpg',
      'The World Bank': '/wb.jpg',
      'African Development Bank': '/adb.jpg',
      'ECOWAS Commission': '/ecowas.png',
      'International Telecommunication Union (ITU)': '/itu.jpg',
      'African Union': '/au.png',
    };
    return imageMap[partner] || '/file.svg'; // fallback image
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
              <div className="w-16 h-16 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center overflow-hidden border border-gray-100">
                <Image
                  src={getPartnerImage(partner)}
                  alt={partner}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <p className="text-xs font-medium text-gray-700">{partner}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
