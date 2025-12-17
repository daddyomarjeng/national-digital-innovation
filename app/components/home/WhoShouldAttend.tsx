import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function WhoShouldAttend() {
  const whoShouldAttend = [
    'Government Officials & Policymakers',
    'Tech Entrepreneurs & Startups',
    'ICT Professionals & Developers',
    'Investors & Venture Capitalists',
    'Students & Young Professionals',
    'Development Partners & NGOs',
    'Corporate Executives & Business Leaders',
    'Academia & Research Institutions',
    'Media & Content Creators',
    'Civil Society Organizations',
  ];

  return (
    <Section bgColor="white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="This event is designed for a diverse audience of digital stakeholders">
          Who Should Attend?
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {whoShouldAttend.map((audience, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <div className="shrink-0">
                <svg className="w-5 h-5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-800">{audience}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
