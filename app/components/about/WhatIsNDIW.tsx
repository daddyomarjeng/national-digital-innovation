import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function WhatIsNDIW() {
  return (
    <Section bgColor="white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle>What is National Digital Innovation Week?</SectionTitle>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            <strong>National Digital Innovation Week (NDIW)</strong> is The Gambia&apos;s flagship annual event dedicated to 
            accelerating digital transformation and fostering innovation across all sectors of the economy. Launched in 2025, 
            the event brings together government officials, technology leaders, entrepreneurs, investors, development partners, 
            academia, civil society, and citizens to shape the country&apos;s digital future.
          </p>
          <p>
            The week-long programme features keynote speeches, panel discussions, technical workshops, an innovation expo, 
            startup competitions, networking sessions, and policy dialogues. It serves as a platform for showcasing local 
            innovation, attracting investment, building partnerships, and creating awareness about the opportunities and 
            challenges of the digital economy.
          </p>
          <p>
            NDIW aligns with The Gambia&apos;s National Development Plan (NDP) 2023-2027 and the ECOWAS Digital Transformation 
            Strategy, positioning the country as a hub for digital innovation in West Africa. The event demonstrates the 
            government&apos;s commitment to leveraging technology for inclusive economic growth, improved public service delivery, 
            and enhanced quality of life for all Gambians.
          </p>
        </div>
      </div>
    </Section>
  );
}
