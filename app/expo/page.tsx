import type { Metadata } from 'next';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardBody } from '../components/ui/Card';
import Button from '../components/ui/Button';

export const metadata: Metadata = {
  title: 'Innovation Expo | National Digital Innovation Week',
  description: 'Showcase your innovation at the National Digital Innovation Week Expo. Connect with stakeholders, investors, and tech enthusiasts.',
  openGraph: {
    title: 'Innovation Expo | National Digital Innovation Week',
    description: 'Showcase your innovation at the National Digital Innovation Week Expo.',
    images: ['/og-image.jpg'],
  },
};

export default function ExpoPage() {
  const benefits = [
    {
      icon: '👁️',
      title: 'High Visibility',
      description: 'Showcase your products and services to government officials, industry leaders, investors, and the public.',
    },
    {
      icon: '🤝',
      title: 'Networking Opportunities',
      description: 'Connect with potential partners, clients, and collaborators from diverse sectors.',
    },
    {
      icon: '📰',
      title: 'Media Exposure',
      description: 'Gain coverage from local and international media attending the event.',
    },
    {
      icon: '💡',
      title: 'Feedback & Insights',
      description: 'Receive valuable feedback from experts and potential users of your innovation.',
    },
    {
      icon: '🏆',
      title: 'Recognition',
      description: 'Get recognized as a key player in The Gambia\'s digital innovation ecosystem.',
    },
    {
      icon: '💰',
      title: 'Investment Opportunities',
      description: 'Attract investors and explore funding opportunities for your venture.',
    },
  ];

  const eligibleExhibitors = [
    'Technology startups and SMEs',
    'Software developers and tech companies',
    'Fintech and mobile money providers',
    'E-commerce platforms',
    'ICT training and education institutions',
    'Government agencies with digital initiatives',
    'International development partners',
    'Universities and research institutions',
    'Telecommunications companies',
    'Hardware and infrastructure providers',
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Innovation Expo 2025
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Showcase Your Innovation. Connect with Stakeholders. Shape The Gambia's Digital Future.
          </p>
          <Button variant="outline" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            Apply as Exhibitor
          </Button>
        </div>
      </Section>

      {/* About the Expo */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>About the Innovation Expo</SectionTitle>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The Innovation Expo is the centerpiece of the National Digital Innovation Week, bringing together 
              innovators, entrepreneurs, investors, and technology enthusiasts from across The Gambia and beyond. 
              This exhibition platform provides an opportunity to showcase cutting-edge digital solutions, products, 
              and services that are driving transformation in various sectors.
            </p>
            <p>
              Over three days, exhibitors will have the chance to demonstrate their innovations to a diverse audience 
              including government officials, policymakers, industry leaders, potential investors, and the general 
              public. The expo creates an environment for meaningful interactions, partnerships, and business 
              opportunities.
            </p>
            <p>
              Whether you're launching a new startup, demonstrating an established product, or showcasing research 
              and development initiatives, the Innovation Expo provides the perfect platform to gain visibility, 
              attract investment, and contribute to The Gambia's digital ecosystem.
            </p>
          </div>
        </div>
      </Section>

      {/* Who Can Exhibit */}
      <Section bgColor="gray">
        <SectionTitle>Who Can Exhibit?</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center">
            We welcome exhibitors from various sectors working on digital innovation and technology solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {eligibleExhibitors.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <SectionTitle subtitle="Why exhibit at the National Digital Innovation Week?">
          Exhibitor Benefits
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardBody>
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* What You Get */}
      <Section bgColor="blue">
        <div className="max-w-4xl mx-auto">
          <SectionTitle light>What's Included in Your Exhibition Package</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Exhibition Booth</h4>
                <p className="text-blue-100">Standard 3m x 3m booth space with basic furniture</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Branding Opportunities</h4>
                <p className="text-blue-100">Company logo in event materials and website</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Access Passes</h4>
                <p className="text-blue-100">Complimentary passes for exhibitor staff</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Networking Access</h4>
                <p className="text-blue-100">Entry to all networking sessions and events</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Promotional Materials</h4>
                <p className="text-blue-100">Space to display banners and distribute materials</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">Media Coverage</h4>
                <p className="text-blue-100">Opportunity for media interviews and features</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Showcase Your Innovation?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Applications for exhibitor booths are now open. Spaces are limited, so apply early to secure your spot 
            at The Gambia's premier digital innovation event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Apply as Exhibitor
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Contact Us for More Info
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Application deadline: 30 November 2025
          </p>
        </div>
      </Section>
    </>
  );
}
