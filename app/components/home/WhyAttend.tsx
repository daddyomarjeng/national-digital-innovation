import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';

export default function WhyAttend() {
  const whyAttend = [
    {
      icon: '🎓',
      title: 'Learn from Experts',
      description:
        "Gain insights from industry leaders, policymakers, and innovators shaping Africa's digital future.",
      accent: 'from-blue-500 to-indigo-500',
    },
    {
      icon: '🤝',
      title: 'Network & Collaborate',
      description:
        'Connect with entrepreneurs, investors, government officials, and tech professionals across West Africa.',
      accent: 'from-cyan-500 to-blue-500',
    },
    {
      icon: '💼',
      title: 'Business Opportunities',
      description:
        'Discover investment opportunities, partnerships, and market access for your products and services.',
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      icon: '🔍',
      title: 'Explore Innovations',
      description: 'Experience cutting-edge technologies and solutions at the Innovation Expo and demo sessions.',
      accent: 'from-amber-400 to-orange-500',
    },
    {
      icon: '📈',
      title: 'Grow Your Skills',
      description: 'Participate in hands-on workshops on emerging technologies, digital marketing, and entrepreneurship.',
      accent: 'from-purple-500 to-indigo-500',
    },
    {
      icon: '🏆',
      title: 'Compete & Win',
      description: 'Join startup pitch competitions and hackathons with prizes and funding opportunities.',
      accent: 'from-pink-500 to-red-500',
    },
  ];

  return (
    <Section bgColor="gray">
      <SectionTitle subtitle="Discover the benefits of participating in this transformative event">Why Attend?</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyAttend.map((item, idx) => (
          <Card key={idx} className="relative overflow-hidden border-0 shadow-lg shadow-blue-100/60">
            <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-10`} aria-hidden />
            <CardBody className="relative">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg shadow-blue-100 text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
