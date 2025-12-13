import type { Metadata } from 'next';
import AboutHero from '../components/about/AboutHero';
import WhatIsNDIW from '../components/about/WhatIsNDIW';
import VisionMission from '../components/about/VisionMission';
import OrganisersGovernance from '../components/about/OrganisersGovernance';
import KeyObjectives from '../components/about/KeyObjectives';

export const metadata: Metadata = {
  title: 'About | National Digital Innovation Week – The Gambia',
  description: 'Learn about National Digital Innovation Week, our vision, mission, and the organizations behind this landmark event.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhatIsNDIW />
      <VisionMission />
      <OrganisersGovernance />
      <KeyObjectives />
    </>
  );
}
