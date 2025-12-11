import Image from 'next/image';
import Hero from './components/home/Hero';
import CountdownTimer from './components/home/CountdownTimer';
import Section from './components/ui/Section';
import SectionTitle from './components/ui/SectionTitle';
import Card, { CardBody } from './components/ui/Card';
import Button from './components/ui/Button';
import { EXPECTATIONS, FOCUS_AREAS, PARTNERS, EVENT_DATES } from './constants';

export default function HomePage() {
  // Event Highlights/Stats
  const eventHighlights = [
    {
      icon: '📅',
      number: '5',
      label: 'Days',
      description: 'of intensive learning and networking',
    },
    {
      icon: '🎤',
      number: '50+',
      label: 'Speakers',
      description: 'Industry experts and thought leaders',
    },
    {
      icon: '💡',
      number: '100+',
      label: 'Sessions',
      description: 'Workshops, panels, and presentations',
    },
    {
      icon: '👥',
      number: '1000+',
      label: 'Participants',
      description: 'From government, private sector & startups',
    },
    {
      icon: '🚀',
      number: '50+',
      label: 'Exhibitors',
      description: 'Showcasing innovative solutions',
    },
    {
      icon: '🌍',
      number: '10+',
      label: 'Countries',
      description: 'International participation & partnerships',
    },
  ];

  // Why Attend Section
  const whyAttend = [
    {
      icon: '🎓',
      title: 'Learn from Experts',
      description: 'Gain insights from industry leaders, policymakers, and innovators shaping Africa\'s digital future.',
    },
    {
      icon: '🤝',
      title: 'Network & Collaborate',
      description: 'Connect with entrepreneurs, investors, government officials, and tech professionals across West Africa.',
    },
    {
      icon: '💼',
      title: 'Business Opportunities',
      description: 'Discover investment opportunities, partnerships, and market access for your products and services.',
    },
    {
      icon: '🔍',
      title: 'Explore Innovations',
      description: 'Experience cutting-edge technologies and solutions at the Innovation Expo and demo sessions.',
    },
    {
      icon: '📈',
      title: 'Grow Your Skills',
      description: 'Participate in hands-on workshops on emerging technologies, digital marketing, and entrepreneurship.',
    },
    {
      icon: '🏆',
      title: 'Compete & Win',
      description: 'Join startup pitch competitions and hackathons with prizes and funding opportunities.',
    },
  ];

  // Who Should Attend
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

  const partners = PARTNERS;

  return (
    <>
      <Hero />

      {/* Countdown Timer */}
      <Section bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer targetDate={EVENT_DATES.start} />
        </div>
      </Section>

      {/* Event Highlights/Stats */}
      <Section bgColor="white">
        <SectionTitle subtitle="Join Africa's premier digital innovation gathering">
          Event at a Glance
        </SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {eventHighlights.map((highlight, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl mb-3">{highlight.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
                {highlight.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.label}
              </div>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* About the Week */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="Join us for an inspiring week of innovation, collaboration, and digital transformation">
            About the Week
          </SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The <strong>National Digital Innovation Week</strong> is The Gambia&apos;s premier event bringing together government leaders, 
              technology innovators, entrepreneurs, investors, development partners, and digital enthusiasts to accelerate the country&apos;s 
              digital transformation agenda.
            </p>
            <p>
              Over five days, participants will engage in keynote presentations, panel discussions, workshops, and networking sessions 
              focused on leveraging digital technologies to drive inclusive economic growth, improve public service delivery, and create 
              opportunities for all Gambians.
            </p>
            <p>
              This landmark event aligns with The Gambia&apos;s National Development Plan and the ECOWAS Digital Transformation Strategy, 
              demonstrating our commitment to building a digitally empowered nation that competes effectively in the global economy.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Attend */}
      <Section bgColor="gray">
        <SectionTitle subtitle="Discover the benefits of participating in this transformative event">
          Why Attend?
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyAttend.map((item, idx) => (
            <Card key={idx}>
              <CardBody>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* What to Expect */}
      <Section bgColor="gray">
        <SectionTitle subtitle="Experience innovation, learning, and collaboration throughout the week">
          What to Expect
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPECTATIONS.map((item, idx) => (
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

      {/* Presidential Message */}
      <Section bgColor="gradient">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Presidential Image */}
              <div className="shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/president.jpg"
                    alt="His Excellency Adama Barrow, President of The Gambia"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1 text-white">
                <div className="mb-4">
                  <p className="text-sm uppercase tracking-wider opacity-90 mb-2">Message from</p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-1">His Excellency Adama Barrow</h3>
                  <p className="text-lg opacity-90">President of the Republic of The Gambia</p>
                </div>

                <div className="relative">
                  <svg className="absolute -top-4 -left-2 w-12 h-12 text-white/20" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.2-.4 2.8-2.8 5.2-5.6 5.2v4c5.5 0 10-4.5 10-10V8h-8zm16 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.2-.4 2.8-2.8 5.2-5.6 5.2v4c5.5 0 10-4.5 10-10V8h-8z" />
                  </svg>
                  <blockquote className="text-lg md:text-xl leading-relaxed pl-8 italic">
                    Digital transformation is not just about technology; it is about empowering our people, creating opportunities for our youth, and building a prosperous future for all Gambians. The National Digital Innovation Week represents our commitment to positioning The Gambia as a leader in Africa&apos;s digital economy.
                  </blockquote>
                </div>

                <p className="mt-6 text-sm opacity-75">
                  Join us in this historic gathering as we chart the course for The Gambia&apos;s digital future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* All Speakers */}
      <Section bgColor="white">
        <SectionTitle subtitle="Meet the inspiring leaders, innovators, and experts driving digital transformation">
          Our Distinguished Speakers
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[
            {
              name: 'Hon. Ousman A. Bah',
              title: 'Minister',
              organization: 'Ministry of Communication & Digital Economy',
              photo: '👨‍💼',
              tags: ['Keynote', 'Government'],
            },
            {
              name: 'Dr. Amina Ibrahim',
              title: 'Regional Digital Economy Advisor',
              organization: 'ECOWAS Commission',
              photo: '👩‍💼',
              tags: ['Keynote', 'Regional Expert'],
            },
            {
              name: 'Michael Okonkwo',
              title: 'CEO & Founder',
              organization: 'AfriTech Innovations',
              photo: '👨‍💻',
              tags: ['Panelist', 'Entrepreneur'],
            },
            {
              name: 'Fatou Jallow',
              title: 'Director of Innovation',
              organization: 'WARDIP Gambia',
              photo: '👩‍💼',
              tags: ['Panelist', 'Moderator'],
            },
            {
              name: 'Prof. David Mensah',
              title: 'Professor of Computer Science',
              organization: 'University of Ghana',
              photo: '👨‍🏫',
              tags: ['Keynote', 'Academia'],
            },
            {
              name: 'Sarah Chen',
              title: 'Regional Director',
              organization: 'The World Bank',
              photo: '👩‍💼',
              tags: ['Panelist', 'Development Partner'],
            },
            {
              name: 'Baboucarr Njie',
              title: 'CEO',
              organization: 'GAMTEL',
              photo: '👨‍💼',
              tags: ['Panelist', 'Telecom'],
            },
            {
              name: 'Mariama Touray',
              title: 'Founder & CEO',
              organization: 'TechHer Gambia',
              photo: '👩‍💻',
              tags: ['Panelist', 'Women in Tech'],
            },
            {
              name: 'James Williams',
              title: 'Fintech Innovation Lead',
              organization: 'MasterCard Africa',
              photo: '👨‍💼',
              tags: ['Keynote', 'Fintech'],
            },
            {
              name: 'Aisha Sanneh',
              title: 'Director General',
              organization: 'GPPA',
              photo: '👩‍💼',
              tags: ['Panelist', 'E-Government'],
            },
            {
              name: 'Daniel Kofi Agyei',
              title: 'Co-Founder',
              organization: 'Ghana Tech Startup Hub',
              photo: '👨‍💻',
              tags: ['Panelist', 'Startup Ecosystem'],
            },
            {
              name: 'Isatou Barry',
              title: 'Cybersecurity Specialist',
              organization: 'Ministry of Communication & Digital Economy',
              photo: '👩‍💻',
              tags: ['Moderator', 'Cybersecurity'],
            },
          ].map((speaker, idx) => (
            <Card key={idx}>
              <CardBody className="text-center">
                <div className="text-6xl mb-4">{speaker.photo}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-sm text-blue-700 font-semibold mb-1">{speaker.title}</p>
                <p className="text-xs text-gray-600 mb-3">{speaker.organization}</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {speaker.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button href="/speakers" variant="outline">
            View Full Speaker Profiles
          </Button>
        </div>
      </Section>

      {/* Who Should Attend */}
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
            Register now and join us in shaping The Gambia&apos;s digital future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/registration"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold"
            >
              Register for Free
            </Button>
            <Button
              href="/about"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
