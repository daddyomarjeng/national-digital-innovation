import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Theme & Objectives | National Digital Innovation Week – The Gambia',
  description: 'Accelerating Digital Transformation and Strengthening Connectivity for Inclusive Growth in The Gambia.',
};

export default function ThemePage() {
  const objectives = [
    {
      title: 'Expand Digital Infrastructure',
      description:
        'Accelerate broadband deployment and strengthen ICT infrastructure to ensure nationwide connectivity, bridging the digital divide between urban and rural areas.',
    },
    {
      title: 'Promote Digital Financial Inclusion',
      description:
        'Expand access to digital financial services, mobile money, and fintech solutions to bring more Gambians into the formal financial system.',
    },
    {
      title: 'Enhance E-Government Services',
      description:
        'Digitize public services to improve efficiency, transparency, and citizen engagement, making government more accessible and responsive.',
    },
    {
      title: 'Support Digital Entrepreneurship',
      description:
        'Foster a thriving startup ecosystem through capacity building, funding opportunities, mentorship, and enabling policies that support innovation.',
    },
    {
      title: 'Build Digital Skills and Capacity',
      description:
        'Equip Gambians with the digital skills needed for the 21st century workforce through training programs, partnerships with educational institutions, and industry collaboration.',
    },
    {
      title: 'Strengthen Cybersecurity and Data Protection',
      description:
        'Develop robust frameworks for cybersecurity, data protection, and digital trust to create a safe and secure digital environment.',
    },
    {
      title: 'Leverage Technology for Social Impact',
      description:
        'Apply digital solutions to address challenges in health, education, agriculture, and other critical sectors for sustainable development.',
    },
    {
      title: 'Foster Regional and International Collaboration',
      description:
        'Strengthen partnerships with regional and international organizations to share knowledge, attract investment, and integrate The Gambia into the global digital economy.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
            <span className="text-sm font-semibold">Official Theme 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Accelerating Digital Transformation and Strengthening Connectivity for Inclusive Growth in The Gambia
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            A national commitment to harnessing the power of digital technologies for economic prosperity, 
            social inclusion, and sustainable development.
          </p>
        </div>
      </Section>

      {/* Context & Rationale */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Context & Rationale</SectionTitle>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              The Gambia stands at a critical juncture in its development journey. As the world rapidly transitions 
              into the digital age, leveraging technology is no longer optional—it is essential for economic competitiveness, 
              social progress, and national resilience. The theme for National Digital Innovation Week 2025 reflects our 
              collective ambition to accelerate digital transformation while ensuring that its benefits reach every Gambian, 
              regardless of location, income level, or background.
            </p>
            <p>
              <strong>Digital transformation</strong> encompasses the adoption and integration of digital technologies across 
              government, businesses, and society. It involves modernizing infrastructure, digitizing services, developing 
              new business models, and building a digitally literate population. For The Gambia, this transformation is key 
              to unlocking new economic opportunities, improving public service delivery, enhancing productivity, and creating 
              jobs for our youth.
            </p>
            <p>
              <strong>Connectivity</strong> forms the foundation of digital transformation. Reliable, affordable, and 
              widespread broadband access is essential for citizens to participate in the digital economy, access online 
              services, engage in e-learning, and benefit from telemedicine. Strengthening connectivity—especially in 
              rural and underserved areas—is a top priority for achieving inclusive growth.
            </p>
            <p>
              <strong>Inclusive growth</strong> ensures that the benefits of digital transformation are shared equitably 
              across all segments of society. It means creating opportunities for women, youth, persons with disabilities, 
              and rural communities to participate in and benefit from the digital economy. It requires deliberate policies 
              and programs that address barriers to digital access, build digital skills, and promote digital entrepreneurship 
              among marginalized groups.
            </p>
            <p>
              This theme aligns with The Gambia's National Development Plan (NDP) 2023-2027, the ECOWAS Digital Transformation 
              Strategy, and the African Union's Digital Transformation Strategy for Africa (2020-2030). It demonstrates our 
              commitment to regional integration and our vision of becoming a leading digital economy in West Africa.
            </p>
          </div>
        </div>
      </Section>

      {/* Objectives */}
      <Section bgColor="gray">
        <SectionTitle subtitle="Strategic priorities guiding our digital transformation journey">
          Key Objectives
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{obj.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{obj.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Expected Outcomes */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Expected Outcomes</SectionTitle>
          <div className="space-y-4">
            {[
              'Increased awareness and commitment to digital transformation among government, private sector, and citizens',
              'New partnerships and investments in digital infrastructure and services',
              'Launch of innovative products, services, and pilot projects showcased at the Innovation Expo',
              'Enhanced digital skills and capacity among participants through workshops and training',
              'Policy recommendations and action plans to accelerate digital transformation',
              'Strengthened ecosystem for startups and digital entrepreneurs',
              'Greater regional and international collaboration in digital development',
              'Improved public understanding of the opportunities and challenges of the digital economy',
            ].map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-800">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Shaping The Gambia's Digital Future
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Be part of this transformative journey. Register today and contribute to building a digitally empowered nation.
          </p>
          <a
            href="/registration"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Register Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </Section>
    </>
  );
}
