import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardBody } from '../components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | National Digital Innovation Week – The Gambia',
  description: 'Learn about National Digital Innovation Week, our vision, mission, and the organizations behind this landmark event.',
};

export default function AboutPage() {
  const organisers = [
    {
      name: 'Ministry of Communication and Digital Economy (MoCDE)',
      role: 'Lead Organiser',
      description:
        'The Ministry of Communication and Digital Economy is responsible for formulating and implementing policies that promote the development and use of ICT in The Gambia. MoCDE leads the national digital transformation agenda.',
      icon: '🏛️',
    },
    {
      name: 'WARDIP Gambia',
      role: 'Implementation Partner',
      description:
        'The West Africa Regional Digital Integration Project (WARDIP) supports the development of digital infrastructure and services across West Africa, including The Gambia, fostering regional integration and connectivity.',
      icon: '🌐',
    },
    {
      name: 'The World Bank',
      role: 'Development Partner',
      description:
        'The World Bank provides financial and technical support for digital development initiatives in The Gambia, working to expand broadband access and strengthen the enabling environment for digital transformation.',
      icon: '🏦',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About National Digital Innovation Week
          </h1>
          <p className="text-xl text-blue-100">
            Building a digitally empowered Gambia through innovation, collaboration, and inclusive growth
          </p>
        </div>
      </Section>

      {/* What is NDIW */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>What is National Digital Innovation Week?</SectionTitle>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              <strong>National Digital Innovation Week (NDIW)</strong> is The Gambia's flagship annual event dedicated to 
              accelerating digital transformation and fostering innovation across all sectors of the economy. Launched in 2025, 
              the event brings together government officials, technology leaders, entrepreneurs, investors, development partners, 
              academia, civil society, and citizens to shape the country's digital future.
            </p>
            <p>
              The week-long programme features keynote speeches, panel discussions, technical workshops, an innovation expo, 
              startup competitions, networking sessions, and policy dialogues. It serves as a platform for showcasing local 
              innovation, attracting investment, building partnerships, and creating awareness about the opportunities and 
              challenges of the digital economy.
            </p>
            <p>
              NDIW aligns with The Gambia's National Development Plan (NDP) 2023-2027 and the ECOWAS Digital Transformation 
              Strategy, positioning the country as a hub for digital innovation in West Africa. The event demonstrates the 
              government's commitment to leveraging technology for inclusive economic growth, improved public service delivery, 
              and enhanced quality of life for all Gambians.
            </p>
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section bgColor="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card>
            <CardBody>
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To position The Gambia as a leading digital economy in West Africa, where technology drives innovation, 
                creates opportunities, and improves the lives of all citizens, leaving no one behind in the digital revolution.
              </p>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create an annual platform that inspires collaboration, showcases innovation, builds digital capacity, 
                attracts investment, and accelerates the adoption of digital technologies for sustainable and inclusive 
                development across The Gambia.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Organisers & Governance */}
      <Section bgColor="white">
        <SectionTitle subtitle="The organizations driving National Digital Innovation Week">
          Organisers & Governance
        </SectionTitle>
        <div className="space-y-8 max-w-5xl mx-auto">
          {organisers.map((org, idx) => (
            <Card key={idx} hover={false}>
              <CardBody className="lg:flex lg:items-start lg:gap-6">
                <div className="flex-shrink-0 mb-4 lg:mb-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-4xl">
                    {org.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{org.name}</h3>
                    <span className="inline-block mt-1 text-sm font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
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

      {/* Key Objectives */}
      <Section bgColor="gradient">
        <div className="max-w-4xl mx-auto">
          <SectionTitle light>Key Objectives of National Digital Innovation Week</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Foster collaboration between government, private sector, and civil society',
              'Showcase local and international digital innovations and solutions',
              'Attract investment and partnerships for the digital ecosystem',
              'Build awareness and capacity in emerging technologies',
              'Support entrepreneurship and startup development',
              'Promote digital inclusion and accessibility for all',
              'Facilitate policy dialogue on digital transformation',
              'Strengthen regional and international cooperation',
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold">
                  {idx + 1}
                </div>
                <p className="text-blue-50 pt-1">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
