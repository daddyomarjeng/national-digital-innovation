import type { Metadata } from 'next';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Media Center | National Digital Innovation Week',
  description: 'Media resources, press releases, and coverage information for the National Digital Innovation Week.',
  openGraph: {
    title: 'Media Center | National Digital Innovation Week',
    description: 'Media resources and press information for journalists covering the event.',
    images: ['/og-image.jpg'],
  },
};

export default function MediaPage() {
  const pressReleases = [
    {
      date: '5 December 2025',
      title: 'National Digital Innovation Week Set to Transform The Gambia\'s Tech Landscape',
      excerpt: 'The Ministry of Communication and Digital Economy announces the inaugural National Digital Innovation Week, bringing together innovators, policymakers, and investors...',
    },
    {
      date: '1 December 2025',
      title: 'World Bank and WARDIP Gambia Partner to Support Digital Innovation Week',
      excerpt: 'Strategic partnership announced to strengthen The Gambia\'s digital infrastructure and promote inclusive growth through innovation...',
    },
    {
      date: '25 November 2025',
      title: 'Registration Opens for National Digital Innovation Week 2025',
      excerpt: 'Entrepreneurs, startups, and technology enthusiasts invited to participate in landmark event focusing on digital transformation...',
    },
    {
      date: '15 November 2025',
      title: 'Innovation Expo to Showcase The Gambia\'s Tech Talent',
      excerpt: 'Exhibition platform announced featuring local and international innovators presenting cutting-edge solutions in fintech, e-government, and digital infrastructure...',
    },
  ];

  const mediaKit = [
    {
      title: 'Event Logo & Branding',
      description: 'Official logos, color palettes, and branding guidelines',
      format: 'ZIP (PNG, SVG, PDF)',
    },
    {
      title: 'Event Fact Sheet',
      description: 'Key information about the event, dates, venue, and participants',
      format: 'PDF',
    },
    {
      title: 'Speaker Bios & Photos',
      description: 'High-resolution photos and biographical information',
      format: 'ZIP',
    },
    {
      title: 'Programme Schedule',
      description: 'Detailed agenda and session information',
      format: 'PDF',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Media Center
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Resources, Press Releases, and Coverage Information
          </p>
        </div>
      </Section>

      {/* For Journalists */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>For Journalists & Media</SectionTitle>
          <Card>
            <CardBody>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  The National Digital Innovation Week welcomes journalists, media professionals, and content creators 
                  to cover this landmark event. We are committed to providing comprehensive media support and access 
                  to help you tell the story of The Gambia's digital transformation.
                </p>
                <p>
                  Media representatives will have access to press conferences, interviews with speakers and exhibitors, 
                  photo opportunities, and dedicated press areas throughout the event. We can also arrange one-on-one 
                  interviews with key stakeholders, government officials, and innovation leaders.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Media Accreditation</h3>
                  <p className="text-gray-700 mb-4">
                    To receive media accreditation and access, please register through our media portal or contact 
                    our press office directly.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:media@mocde.gov.gm" className="text-blue-600 hover:text-blue-800">
                        media@mocde.gov.gm
                      </a>
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">Press Hotline:</span>{' '}
                      <a href="tel:+2204321234" className="text-blue-600 hover:text-blue-800">
                        +220 432 1234
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Press Releases */}
      <Section bgColor="gray">
        <SectionTitle>Press Releases</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-4">
          {pressReleases.map((release, index) => (
            <Card key={index} hover>
              <CardBody className="md:flex md:items-start md:space-x-6">
                <div className="md:flex-shrink-0 mb-4 md:mb-0">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-semibold">
                    {release.date}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center">
                    Read full release
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Media Kit */}
      <Section>
        <SectionTitle subtitle="Download official resources for your coverage">
          Media Kit
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {mediaKit.map((item, index) => (
            <Card key={index}>
              <CardBody>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <p className="text-sm text-gray-500 mb-3">Format: {item.format}</p>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="primary" size="lg">
            Download Complete Media Kit
          </Button>
        </div>
      </Section>

      {/* Livestream */}
      <Section bgColor="blue">
        <div className="max-w-5xl mx-auto">
          <SectionTitle light subtitle="Watch the main sessions and keynotes online">
            Event Livestream
          </SectionTitle>
          <Card>
            <CardBody className="p-0">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <svg className="w-20 h-20 mb-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <h3 className="text-2xl font-bold mb-2">Livestream Coming Soon</h3>
                  <p className="text-blue-200 max-w-md">
                    The livestream will be available during the event (8-12 December 2025). 
                    Check back here to watch key sessions live.
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          <div className="mt-6 text-center text-white">
            <p className="mb-4">
              Can't attend in person? Watch our main sessions and keynote speeches online.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="inline-flex items-center space-x-2 text-white hover:text-blue-200" aria-label="Watch on YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
              <a href="#" className="inline-flex items-center space-x-2 text-white hover:text-blue-200" aria-label="Watch on Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Live</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact for Media */}
      <Section bgColor="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need More Information?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our press office is here to assist with media inquiries, interview requests, and additional resources.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Contact Press Office
          </Button>
        </div>
      </Section>
    </>
  );
}
