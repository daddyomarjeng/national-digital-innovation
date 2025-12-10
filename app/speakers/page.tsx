import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardBody } from '../components/ui/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speakers & Panels | National Digital Innovation Week – The Gambia',
  description: 'Meet the inspiring speakers, panelists, and moderators at National Digital Innovation Week 2025.',
};

interface Speaker {
  name: string;
  title: string;
  organization: string;
  bio: string;
  tags: string[];
  photo: string;
}

export default function SpeakersPage() {
  const speakers: Speaker[] = [
    {
      name: 'Hon. Ousman A. Bah',
      title: 'Minister',
      organization: 'Ministry of Communication and Digital Economy',
      bio: 'Hon. Ousman A. Bah leads The Gambia\'s digital transformation agenda as Minister of Communication and Digital Economy. With extensive experience in telecommunications and ICT policy, he champions initiatives for expanding broadband access and promoting digital innovation.',
      tags: ['Keynote', 'Government'],
      photo: '👨‍💼',
    },
    {
      name: 'Dr. Amina Ibrahim',
      title: 'Regional Digital Economy Advisor',
      organization: 'ECOWAS Commission',
      bio: 'Dr. Ibrahim is a leading expert on digital transformation in West Africa. She advises governments on digital policy, infrastructure development, and regional integration. She has over 15 years of experience in ICT development.',
      tags: ['Keynote', 'Regional Expert'],
      photo: '👩‍💼',
    },
    {
      name: 'Michael Okonkwo',
      title: 'CEO & Founder',
      organization: 'AfriTech Innovations',
      bio: 'Michael is a serial entrepreneur and tech innovator who has built successful startups across Africa. His company focuses on developing technology solutions for financial inclusion and digital payments in emerging markets.',
      tags: ['Panelist', 'Entrepreneur'],
      photo: '👨‍💻',
    },
    {
      name: 'Fatou Jallow',
      title: 'Director of Innovation',
      organization: 'WARDIP Gambia',
      bio: 'Fatou leads innovation initiatives under the West Africa Regional Digital Integration Project. She works on fostering collaboration between government, private sector, and startups to accelerate digital transformation.',
      tags: ['Panelist', 'Moderator'],
      photo: '👩‍💼',
    },
    {
      name: 'Prof. David Mensah',
      title: 'Professor of Computer Science',
      organization: 'University of Ghana',
      bio: 'Prof. Mensah is an acclaimed academic and researcher specializing in artificial intelligence and machine learning. He has published over 50 papers and is passionate about building tech capacity in African universities.',
      tags: ['Keynote', 'Academia'],
      photo: '👨‍🏫',
    },
    {
      name: 'Sarah Chen',
      title: 'Regional Director',
      organization: 'The World Bank',
      bio: 'Sarah oversees digital development programs across West Africa. She brings expertise in infrastructure financing, digital economy policy, and public-private partnerships for ICT development.',
      tags: ['Panelist', 'Development Partner'],
      photo: '👩‍💼',
    },
    {
      name: 'Baboucarr Njie',
      title: 'CEO',
      organization: 'Gambia Telecommunications Company (GAMTEL)',
      bio: 'Mr. Njie leads GAMTEL in expanding telecommunications infrastructure across The Gambia. He is a champion of affordable broadband and digital inclusion for rural communities.',
      tags: ['Panelist', 'Telecom'],
      photo: '👨‍💼',
    },
    {
      name: 'Mariama Touray',
      title: 'Founder & CEO',
      organization: 'TechHer Gambia',
      bio: 'Mariama is a tech entrepreneur and advocate for women in technology. She founded TechHer Gambia, an organization that trains and mentors young women in coding and digital skills.',
      tags: ['Panelist', 'Women in Tech'],
      photo: '👩‍💻',
    },
    {
      name: 'James Williams',
      title: 'Fintech Innovation Lead',
      organization: 'MasterCard Africa',
      bio: 'James specializes in digital payments and financial inclusion solutions. He has led fintech partnerships across Africa, working with mobile money operators, banks, and startups.',
      tags: ['Keynote', 'Fintech'],
      photo: '👨‍💼',
    },
    {
      name: 'Aisha Sanneh',
      title: 'Director General',
      organization: 'Gambia Public Procurement Authority (GPPA)',
      bio: 'Aisha is leading the digitization of public procurement processes in The Gambia. She is passionate about using technology to promote transparency and efficiency in government.',
      tags: ['Panelist', 'E-Government'],
      photo: '👩‍💼',
    },
    {
      name: 'Daniel Kofi Agyei',
      title: 'Co-Founder',
      organization: 'Ghana Tech Startup Hub',
      bio: 'Daniel has been instrumental in building Ghana\'s vibrant startup ecosystem. He mentors early-stage founders and connects them with investors and resources needed to scale.',
      tags: ['Panelist', 'Startup Ecosystem'],
      photo: '👨‍💻',
    },
    {
      name: 'Isatou Barry',
      title: 'Cybersecurity Specialist',
      organization: 'Ministry of Communication and Digital Economy',
      bio: 'Isatou leads cybersecurity initiatives for The Gambia\'s digital infrastructure. She works on developing national cybersecurity frameworks and building capacity in information security.',
      tags: ['Moderator', 'Cybersecurity'],
      photo: '👩‍💻',
    },
  ];

  const tagColors: Record<string, string> = {
    Keynote: 'bg-purple-100 text-purple-800',
    Panelist: 'bg-blue-100 text-blue-800',
    Moderator: 'bg-green-100 text-green-800',
    Government: 'bg-indigo-100 text-indigo-800',
    'Regional Expert': 'bg-cyan-100 text-cyan-800',
    Entrepreneur: 'bg-orange-100 text-orange-800',
    Academia: 'bg-yellow-100 text-yellow-800',
    'Development Partner': 'bg-teal-100 text-teal-800',
    Telecom: 'bg-pink-100 text-pink-800',
    'Women in Tech': 'bg-rose-100 text-rose-800',
    Fintech: 'bg-amber-100 text-amber-800',
    'E-Government': 'bg-lime-100 text-lime-800',
    'Startup Ecosystem': 'bg-emerald-100 text-emerald-800',
    Cybersecurity: 'bg-red-100 text-red-800',
  };

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Speakers & Panels</h1>
          <p className="text-xl text-blue-100">
            Meet the inspiring leaders, innovators, and experts driving digital transformation in Africa
          </p>
        </div>
      </Section>

      {/* Intro */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle subtitle="Learn from the best in technology, innovation, policy, and entrepreneurship">
            Esteemed Speakers & Thought Leaders
          </SectionTitle>
          <p className="text-lg text-gray-700 mb-8">
            National Digital Innovation Week brings together an impressive lineup of speakers from government, 
            private sector, international organizations, academia, and civil society. Our speakers share their 
            expertise, insights, and experiences to inspire and educate participants on the opportunities and 
            challenges of digital transformation.
          </p>
        </div>
      </Section>

      {/* Speakers Grid */}
      <Section bgColor="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker, idx) => (
            <Card key={idx}>
              <CardBody>
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                    {speaker.photo}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                  <p className="text-sm font-semibold text-blue-800 mb-1">{speaker.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{speaker.organization}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{speaker.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {speaker.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        tagColors[tag] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* More Speakers Coming */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <div className="text-5xl mb-4">🎤</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">More Speakers to Be Announced</h2>
            <p className="text-gray-700 mb-6">
              We are continuously confirming additional speakers and panelists. Check back regularly for updates, 
              or follow us on social media to be the first to know when new speakers are announced.
            </p>
            <a
              href="/media"
              className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              Visit Media Center for Updates
            </a>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Hear from These Amazing Speakers?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Register now to attend their sessions and engage with them during Q&A and networking events.
          </p>
          <a
            href="/registration"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-lg"
          >
            Register for Free
          </a>
        </div>
      </Section>
    </>
  );
}
