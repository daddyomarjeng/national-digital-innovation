import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';

export default function WhyAttend() {
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

  return (
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
  );
}
