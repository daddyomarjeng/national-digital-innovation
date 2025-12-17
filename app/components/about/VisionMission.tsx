import Section from '../ui/Section';
import Card, { CardBody } from '../ui/Card';

export default function VisionMission() {
  return (
    <Section bgColor="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <Card>
          <CardBody>
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To position The Gambia as a leading digital economy in West Africa, where technology drives innovation, 
              creates opportunities, and improves the lives of all citizens, leaving no one behind in the digital revolution.
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="text-5xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To create an annual platform that inspires collaboration, showcases innovation, builds digital capacity, 
              attracts investment, and accelerates the adoption of digital technologies for sustainable and inclusive 
              development across The Gambia.
            </p>
          </CardBody>
        </Card>
      </div>
    </Section>
  );
}
