import Hero from './components/home/Hero';
import Section from './components/ui/Section';
import SectionTitle from './components/ui/SectionTitle';
import Card, { CardBody } from './components/ui/Card';
import Button from './components/ui/Button';

export default function HomePage() {
  const expectations = [
    {
      icon: '🎤',
      title: 'Keynote Speeches',
      description: 'Inspiring talks from industry leaders and government officials on digital innovation.',
    },
    {
      icon: '💬',
      title: 'Panel Discussions',
      description: 'Expert panels addressing key challenges and opportunities in digital transformation.',
    },
    {
      icon: '🚀',
      title: 'Innovation Expo',
      description: 'Showcase of cutting-edge technologies and solutions from local and international innovators.',
    },
    {
      icon: '🎓',
      title: 'Workshops',
      description: 'Hands-on training sessions on emerging technologies and digital skills.',
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with entrepreneurs, investors, policymakers, and tech enthusiasts.',
    },
  ];

  const focusAreas = [
    {
      title: 'Digital Infrastructure',
      description: 'Expanding broadband connectivity and strengthening ICT infrastructure nationwide.',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      title: 'E-Government',
      description: 'Digitizing public services for efficient and transparent governance.',
      color: 'bg-indigo-50 border-indigo-200',
    },
    {
      title: 'Fintech & Digital Payments',
      description: 'Promoting financial inclusion through digital payment solutions.',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      title: 'Startups & Innovation',
      description: 'Supporting the local tech ecosystem and entrepreneurship development.',
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      title: 'Digital Skills & Jobs',
      description: 'Building capacity and creating opportunities in the digital economy.',
      color: 'bg-teal-50 border-teal-200',
    },
  ];

  const updates = [
    {
      date: 'December 5, 2025',
      title: 'Registration Now Open',
      excerpt: 'Secure your spot at National Digital Innovation Week. Early bird registration available until November 30.',
      tag: 'Announcement',
    },
    {
      date: 'December 1, 2025',
      title: 'International Speakers Confirmed',
      excerpt: 'We are excited to announce confirmed speakers from leading tech companies and international organizations.',
      tag: 'Speakers',
    },
    {
      date: 'November 28, 2025',
      title: 'Innovation Expo Applications Open',
      excerpt: 'Startups and tech companies can now apply to exhibit at the Innovation Expo. Limited spaces available.',
      tag: 'Expo',
    },
    {
      date: 'November 25, 2025',
      title: 'Programme Details Released',
      excerpt: 'Full programme schedule now available. Explore sessions across 5 thematic areas over 5 days.',
      tag: 'Programme',
    },
  ];

  const partners = [
    'Ministry of Communication and Digital Economy',
    'WARDIP Gambia',
    'The World Bank',
    'African Development Bank',
    'ECOWAS Commission',
    'ITU',
  ];

  return (
    <>
      <Hero />

      {/* About the Week */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Join us for an inspiring week of innovation, collaboration, and digital transformation">
            About the Week
          </SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The <strong>National Digital Innovation Week</strong> is The Gambia's premier event bringing together government leaders, 
              technology innovators, entrepreneurs, investors, development partners, and digital enthusiasts to accelerate the country's 
              digital transformation agenda.
            </p>
            <p>
              Over five days, participants will engage in keynote presentations, panel discussions, workshops, and networking sessions 
              focused on leveraging digital technologies to drive inclusive economic growth, improve public service delivery, and create 
              opportunities for all Gambians.
            </p>
            <p>
              This landmark event aligns with The Gambia's National Development Plan and the ECOWAS Digital Transformation Strategy, 
              demonstrating our commitment to building a digitally empowered nation that competes effectively in the global economy.
            </p>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section bgColor="gray">
        <SectionTitle subtitle="Experience innovation, learning, and collaboration throughout the week">
          What to Expect
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expectations.map((item, idx) => (
            <Card key={idx}>
              <CardBody className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Focus Areas */}
      <Section bgColor="white">
        <SectionTitle subtitle="Key thematic areas driving The Gambia's digital transformation">
          Focus Areas
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, idx) => (
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

      {/* Latest Updates */}
      <Section bgColor="gray">
        <SectionTitle subtitle="Stay informed with the latest news and announcements">
          Latest Updates
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {updates.map((update, idx) => (
            <Card key={idx}>
              <CardBody>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {update.tag}
                  </span>
                  <span className="text-sm text-gray-500">{update.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{update.title}</h3>
                <p className="text-gray-600 mb-4">{update.excerpt}</p>
                <button className="text-blue-800 font-semibold hover:text-blue-900 transition-colors">
                  Read more →
                </button>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button href="/media" variant="outline">
            View All Updates
          </Button>
        </div>
      </Section>

      {/* Partners */}
      <Section bgColor="white">
        <SectionTitle subtitle="In collaboration with our esteemed partners">
          Our Partners
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-blue-400 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-xl">
                  {partner.substring(0, 2)}
                </div>
                <p className="text-xs font-medium text-gray-700">{partner}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Be Part of Digital Innovation Week?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Register now and join us in shaping The Gambia's digital future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/registration"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50"
            >
              Register for Free
            </Button>
            <Button
              href="/about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
