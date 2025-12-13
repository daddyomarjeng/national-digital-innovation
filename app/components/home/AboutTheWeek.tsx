import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function AboutTheWeek() {
  return (
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
  );
}
