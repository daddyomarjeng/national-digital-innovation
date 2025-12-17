import Image from 'next/image';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';

export default function Speakers() {
  const speakers = [
    {
      name: 'Hon. Ousman A. Bah',
      title: 'Minister',
      organization: 'Ministry of Communication & Digital Economy',
      photo: '/president.jpg',
      tags: ['Keynote', 'Government'],
    },
    {
      name: 'Dr. Amina Ibrahim',
      title: 'Regional Digital Economy Advisor',
      organization: 'ECOWAS Commission',
      photo: '/dg.jpg',
      tags: ['Keynote', 'Regional Expert'],
    },
    {
      name: 'Michael Okonkwo',
      title: 'CEO & Founder',
      organization: 'AfriTech Innovations',
      photo: '/president.jpg',
      tags: ['Panelist', 'Entrepreneur'],
    },
    {
      name: 'Fatou Jallow',
      title: 'Director of Innovation',
      organization: 'WARDIP Gambia',
      photo: '/dg.jpg',
      tags: ['Panelist', 'Moderator'],
    },
    {
      name: 'Prof. David Mensah',
      title: 'Professor of Computer Science',
      organization: 'University of Ghana',
      photo: '/president.jpg',
      tags: ['Keynote', 'Academia'],
    },
    {
      name: 'Sarah Chen',
      title: 'Regional Director',
      organization: 'The World Bank',
      photo: '/dg.jpg',
      tags: ['Panelist', 'Development Partner'],
    },
    {
      name: 'Baboucarr Njie',
      title: 'CEO',
      organization: 'GAMTEL',
      photo: '/president.jpg',
      tags: ['Panelist', 'Telecom'],
    },
    {
      name: 'Mariama Touray',
      title: 'Founder & CEO',
      organization: 'TechHer Gambia',
      photo: '/dg.jpg',
      tags: ['Panelist', 'Women in Tech'],
    },
    {
      name: 'James Williams',
      title: 'Fintech Innovation Lead',
      organization: 'MasterCard Africa',
      photo: '/president.jpg',
      tags: ['Keynote', 'Fintech'],
    },
    {
      name: 'Aisha Sanneh',
      title: 'Director General',
      organization: 'GPPA',
      photo: '/dg.jpg',
      tags: ['Panelist', 'E-Government'],
    },
    {
      name: 'Daniel Kofi Agyei',
      title: 'Co-Founder',
      organization: 'Ghana Tech Startup Hub',
      photo: '/president.jpg',
      tags: ['Panelist', 'Startup Ecosystem'],
    },
    {
      name: 'Isatou Barry',
      title: 'Cybersecurity Specialist',
      organization: 'Ministry of Communication & Digital Economy',
      photo: '/dg.jpg',
      tags: ['Moderator', 'Cybersecurity'],
    },
  ];

  return (
    <Section bgColor="white">
      <SectionTitle subtitle="Meet the inspiring leaders, innovators, and experts driving digital transformation">
        Our Distinguished Speakers
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {speakers.map((speaker, idx) => (
          <Card key={idx}>
            <CardBody className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
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
  );
}
