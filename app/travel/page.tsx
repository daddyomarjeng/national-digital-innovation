import type { Metadata } from 'next';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardBody, CardHeader } from '../components/ui/Card';

export const metadata: Metadata = {
  title: 'Travel & Visitor Info | National Digital Innovation Week',
  description: 'Plan your visit to the National Digital Innovation Week in Banjul, The Gambia. Information on accommodation, transport, and visitor services.',
  openGraph: {
    title: 'Travel & Visitor Info | National Digital Innovation Week',
    description: 'Essential travel information for visitors to the National Digital Innovation Week.',
    images: ['/og-image.jpg'],
  },
};

export default function TravelPage() {
  const hotels = [
    {
      name: 'Coco Ocean Resort & Spa',
      category: 'Luxury',
      distance: '15 km from venue',
      description: 'Five-star beachfront resort with conference facilities and spa.',
    },
    {
      name: 'The Kairaba Beach Hotel',
      category: 'Upscale',
      distance: '12 km from venue',
      description: 'Modern hotel with ocean views and excellent dining options.',
    },
    {
      name: 'Laico Atlantic Hotel',
      category: 'Business',
      distance: '8 km from venue',
      description: 'Business hotel in central Banjul with meeting rooms.',
    },
    {
      name: 'Djeliba Hotel',
      category: 'Mid-range',
      distance: '5 km from venue',
      description: 'Comfortable accommodation with pool and restaurant.',
    },
    {
      name: 'Kombo Beach Hotel',
      category: 'Mid-range',
      distance: '18 km from venue',
      description: 'Beach hotel with traditional Gambian hospitality.',
    },
    {
      name: 'Peninsula Residence',
      category: 'Budget',
      distance: '6 km from venue',
      description: 'Clean and affordable guesthouse near city center.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Travel & Visitor Information
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Plan Your Visit to Banjul, The Gambia
          </p>
        </div>
      </Section>

      {/* Getting to The Gambia */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Getting to The Gambia</SectionTitle>
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Banjul International Airport</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4 text-gray-700">
                <p>
                  Banjul International Airport (BJL) is the main gateway to The Gambia, located approximately 25 
                  kilometers from the capital city of Banjul and about 20 kilometers from the conference venue.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Airlines & Routes</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Direct flights from major European cities (Brussels, London, Paris)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Regional connections via Dakar, Casablanca, and other West African hubs</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Carriers: Brussels Airlines, TUI, Air Senegal, Royal Air Maroc</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3">Visa Requirements</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>ECOWAS nationals: No visa required</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Commonwealth citizens: Entry permit on arrival</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Other visitors: Check with Gambian embassy for visa requirements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Yellow fever vaccination certificate required from endemic areas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Accommodation */}
      <Section bgColor="gray">
        <SectionTitle subtitle="We recommend booking early as hotels fill up quickly during the event">
          Accommodation Options
        </SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <Card key={index}>
              <CardBody>
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                    {hotel.category}
                  </span>
                  <span className="text-xs text-gray-500">{hotel.distance}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{hotel.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center">
                  View details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Hotel recommendations are provided for convenience. Participants are responsible for their own bookings.
          </p>
        </div>
      </Section>

      {/* Local Transport */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Getting Around</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardBody>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Airport Transfers</h3>
                <p className="text-gray-600 mb-4">
                  Taxi services are available at the airport. Official taxis are green with yellow roofs. 
                  The journey to central Banjul takes approximately 30-40 minutes depending on traffic.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Estimated fare:</span> D500-700 (approximately $8-10)
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Taxis & Ride Services</h3>
                <p className="text-gray-600 mb-4">
                  Green tourist taxis are widely available. Always negotiate the fare before starting your journey. 
                  Local ride-hailing apps are also available for convenience.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Tip:</span> Ask your hotel to arrange reliable taxi services
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Conference Venue</h3>
                <p className="text-gray-600 mb-4">
                  Sir Dawda Kairaba Jawara International Conference Center is centrally located and easily 
                  accessible from major hotels. Dedicated shuttle services will be available during the event.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Address:</span> Independence Drive, Banjul
                </p>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Event Shuttle Service</h3>
                <p className="text-gray-600 mb-4">
                  Complimentary shuttle buses will run between major hotels and the conference center during 
                  event hours. Schedules will be shared with registered participants closer to the event date.
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Operating hours:</span> 7:00 AM - 7:00 PM
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </Section>

      {/* Practical Information */}
      <Section bgColor="blue">
        <div className="max-w-4xl mx-auto">
          <SectionTitle light>Practical Information</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6 text-white">
            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Currency & Payments</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local currency: Gambian Dalasi (GMD)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Major hotels and restaurants accept credit cards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>ATMs available in Banjul and major tourist areas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>US Dollars and Euros widely accepted</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Language & Communication</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Official language: English</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Local languages: Mandinka, Wolof, Fula</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mobile networks: Africell, Gamcel, QCell</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tourist SIM cards available at the airport</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Climate & What to Pack</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>December is dry season with pleasant temperatures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Daytime: 25-30°C (77-86°F)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pack light, breathable business attire</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Sunscreen and sunglasses recommended</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Health & Safety</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Yellow fever vaccination certificate required</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Malaria prophylaxis recommended</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Drink bottled water</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The Gambia is generally safe for tourists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* International Participants Support */}
      <Section bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <SectionTitle>Support for International Participants</SectionTitle>
          <Card>
            <CardBody>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  We understand that traveling to The Gambia may be a new experience for many international 
                  participants. Our team is here to provide support and assistance to ensure your visit is 
                  comfortable and productive.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">We Can Help With:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Visa invitation letters for event participants</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Hotel recommendations and booking assistance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Airport meet-and-greet service (on request)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Local orientation and cultural guidance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>24/7 emergency contact during the event</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-8">
                  <p className="mb-4 font-semibold">For travel assistance and inquiries:</p>
                  <div className="space-y-2">
                    <p>
                      <span className="font-semibold">Email:</span>{' '}
                      <a href="mailto:travel@mocde.gov.gm" className="text-blue-600 hover:text-blue-800">
                        travel@mocde.gov.gm
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span>{' '}
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
    </>
  );
}
