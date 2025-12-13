import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';

export default function LatestUpdates() {
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

  return (
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
  );
}
