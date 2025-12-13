import Hero from './components/home/Hero';
import CountdownTimer from './components/home/CountdownTimer';
import EventStats from './components/home/EventStats';
import AboutTheWeek from './components/home/AboutTheWeek';
import WhyAttend from './components/home/WhyAttend';
import WhatToExpect from './components/home/WhatToExpect';
import FocusAreas from './components/home/FocusAreas';
import PresidentialMessage from './components/home/PresidentialMessage';
import Speakers from './components/home/Speakers';
import WhoShouldAttend from './components/home/WhoShouldAttend';
import LatestUpdates from './components/home/LatestUpdates';
import Partners from './components/home/Partners';
import CallToAction from './components/home/CallToAction';
import Section from './components/ui/Section';
import { EVENT_DATES } from './constants';

export default function HomePage() {

  return (
    <>
      <Hero />

      {/* Countdown Timer */}
      <Section bgColor="gray">
        <div className="max-w-4xl mx-auto">
          <CountdownTimer targetDate={EVENT_DATES.start} />
        </div>
      </Section>

      <EventStats />
      <AboutTheWeek />
      <WhyAttend />
      <WhatToExpect />
      <FocusAreas />
      <PresidentialMessage />
      <Speakers />
      <WhoShouldAttend />
      <LatestUpdates />
      <Partners />
      <CallToAction />
    </>
  );
}
