'use client';

import { useState } from 'react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

interface Session {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location?: string;
}

interface DayProgramme {
  day: number;
  date: string;
  title: string;
  sessions: Session[];
}

export default function ProgrammePage() {
  const [activeDay, setActiveDay] = useState(1);

  const programme: DayProgramme[] = [
    {
      day: 1,
      date: 'Monday, 8 December 2025',
      title: 'Opening & Digital Infrastructure',
      sessions: [
        {
          time: '08:00 - 09:00',
          title: 'Registration & Welcome Coffee',
          description: 'Participants check-in and networking over refreshments.',
          location: 'Main Lobby',
        },
        {
          time: '09:00 - 10:00',
          title: 'Official Opening Ceremony',
          description:
            'National anthem, opening remarks by the Minister of Communication and Digital Economy, keynote address by His Excellency the President of The Republic of The Gambia.',
          speaker: 'H.E. The President & Hon. Minister MoCDE',
          location: 'Main Hall',
        },
        {
          time: '10:00 - 10:30',
          title: 'Keynote: The Future of Digital Connectivity in West Africa',
          description:
            'Expert insights on regional digital infrastructure development and cross-border connectivity initiatives.',
          speaker: 'Representative, ECOWAS Commission',
          location: 'Main Hall',
        },
        {
          time: '10:30 - 11:00',
          title: 'Coffee Break & Networking',
          description: 'Refreshments and informal networking opportunity.',
          location: 'Exhibition Area',
        },
        {
          time: '11:00 - 12:30',
          title: 'Panel: Building Robust Digital Infrastructure for The Gambia',
          description:
            'Discussion on broadband expansion, fiber optic networks, data centers, and last-mile connectivity challenges.',
          speaker: 'Panelists from Telecoms, MoCDE, PURA',
          location: 'Main Hall',
        },
        {
          time: '12:30 - 14:00',
          title: 'Lunch Break',
          description: 'Networking lunch for all participants.',
          location: 'Banquet Hall',
        },
        {
          time: '14:00 - 15:30',
          title: 'Workshop: Digital Infrastructure Policy and Regulation',
          description:
            'Interactive session on regulatory frameworks, spectrum management, and investment incentives.',
          speaker: 'PURA & International Experts',
          location: 'Workshop Room A',
        },
        {
          time: '15:30 - 17:00',
          title: 'Innovation Expo Opening & Site Tours',
          description: 'Official launch of the Innovation Expo with guided tours of exhibitor booths.',
          location: 'Exhibition Hall',
        },
      ],
    },
    {
      day: 2,
      date: 'Tuesday, 9 December 2025',
      title: 'E-Government & Digital Services',
      sessions: [
        {
          time: '09:00 - 09:30',
          title: 'Keynote: Digital Government Transformation',
          description:
            'Best practices in e-government implementation, digital identity systems, and citizen-centric service delivery.',
          speaker: 'International E-Government Expert',
          location: 'Main Hall',
        },
        {
          time: '09:30 - 11:00',
          title: 'Panel: E-Government in The Gambia - Progress and Prospects',
          description:
            'Government officials discuss ongoing digitization efforts, challenges, and roadmap for the future.',
          speaker: 'Representatives from MoCDE, GPPA, Immigration, GRA',
          location: 'Main Hall',
        },
        {
          time: '11:00 - 11:30',
          title: 'Coffee Break',
          description: 'Refreshments and networking.',
          location: 'Exhibition Area',
        },
        {
          time: '11:30 - 13:00',
          title: 'Workshop: Building Secure Digital Identity Systems',
          description: 'Technical session on digital ID infrastructure, biometrics, and authentication systems.',
          speaker: 'Technical Experts from Immigration & MoCDE',
          location: 'Workshop Room A',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch Break',
          description: 'Networking lunch.',
          location: 'Banquet Hall',
        },
        {
          time: '14:00 - 15:30',
          title: 'Case Studies: Successful E-Government Projects',
          description:
            'Presentations on successful digital government initiatives from Ghana, Rwanda, and Estonia.',
          speaker: 'International Speakers',
          location: 'Main Hall',
        },
        {
          time: '15:30 - 17:00',
          title: 'Open Innovation Lab: Co-Creating E-Services',
          description:
            'Interactive session where participants brainstorm and design citizen-centric digital services.',
          location: 'Workshop Room B',
        },
      ],
    },
    {
      day: 3,
      date: 'Wednesday, 10 December 2025',
      title: 'Fintech, Digital Payments & Financial Inclusion',
      sessions: [
        {
          time: '09:00 - 09:45',
          title: 'Keynote: The Fintech Revolution in Africa',
          description:
            'Exploring mobile money, digital banking, blockchain, and the future of financial services in Africa.',
          speaker: 'Global Fintech Leader',
          location: 'Main Hall',
        },
        {
          time: '09:45 - 11:15',
          title: 'Panel: Digital Financial Inclusion in The Gambia',
          description:
            'Discussion on expanding access to digital financial services, agent banking, and regulatory frameworks.',
          speaker: 'Central Bank, Mobile Money Operators, Fintech Startups',
          location: 'Main Hall',
        },
        {
          time: '11:15 - 11:45',
          title: 'Coffee Break',
          description: 'Refreshments and networking.',
          location: 'Exhibition Area',
        },
        {
          time: '11:45 - 13:00',
          title: 'Workshop: Building Fintech Solutions for The Gambian Market',
          description:
            'Hands-on session on mobile money APIs, payment gateways, and fintech product development.',
          speaker: 'Fintech Developers & Central Bank',
          location: 'Workshop Room A',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch Break',
          description: 'Networking lunch.',
          location: 'Banquet Hall',
        },
        {
          time: '14:00 - 15:30',
          title: 'Fintech Pitch Competition',
          description:
            'Startups pitch their innovative fintech solutions to a panel of judges and investors.',
          speaker: 'Startups & Investor Panel',
          location: 'Main Hall',
        },
        {
          time: '15:30 - 17:00',
          title: 'Roundtable: Cybersecurity in Financial Services',
          description: 'Closed-door discussion on securing digital financial infrastructure and fraud prevention.',
          speaker: 'Invitation Only - Banks, Regulators, Security Experts',
          location: 'VIP Room',
        },
      ],
    },
    {
      day: 4,
      date: 'Thursday, 11 December 2025',
      title: 'Startups, Innovation & Entrepreneurship',
      sessions: [
        {
          time: '09:00 - 09:30',
          title: 'Keynote: Building a Thriving Startup Ecosystem',
          description: 'Lessons from successful tech hubs in Africa and strategies for ecosystem development.',
          speaker: 'Startup Ecosystem Expert',
          location: 'Main Hall',
        },
        {
          time: '09:30 - 11:00',
          title: 'Panel: Supporting Digital Entrepreneurship in The Gambia',
          description:
            'Discussion on funding, mentorship, incubation, and policy support for tech entrepreneurs.',
          speaker: 'Entrepreneurs, Investors, Ministry Officials',
          location: 'Main Hall',
        },
        {
          time: '11:00 - 11:30',
          title: 'Coffee Break',
          description: 'Refreshments and networking.',
          location: 'Exhibition Area',
        },
        {
          time: '11:30 - 13:00',
          title: 'Startup Bootcamp: From Idea to Market',
          description:
            'Intensive workshop covering business models, product development, go-to-market strategy, and fundraising.',
          speaker: 'Startup Mentors & Accelerator Coaches',
          location: 'Workshop Room A',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch Break',
          description: 'Networking lunch.',
          location: 'Banquet Hall',
        },
        {
          time: '14:00 - 16:00',
          title: 'Startup Pitch Competition Finals',
          description:
            'Top startups compete for prizes and investment. Open to public viewing.',
          speaker: 'Finalists & Investor Panel',
          location: 'Main Hall',
        },
        {
          time: '16:00 - 17:30',
          title: 'Investor-Startup Networking Session',
          description: 'Speed networking between startups and potential investors.',
          location: 'Exhibition Area',
        },
      ],
    },
    {
      day: 5,
      date: 'Friday, 12 December 2025',
      title: 'Digital Skills, Jobs & Closing',
      sessions: [
        {
          time: '09:00 - 09:30',
          title: 'Keynote: Preparing for the Future of Work',
          description:
            'How digital skills, lifelong learning, and adaptability are key to thriving in the digital economy.',
          speaker: 'Education & Skills Development Expert',
          location: 'Main Hall',
        },
        {
          time: '09:30 - 11:00',
          title: 'Panel: Building a Digitally Skilled Workforce',
          description:
            'Discussion on digital literacy, coding bootcamps, university-industry collaboration, and job creation.',
          speaker: 'Education Ministry, Universities, Tech Companies',
          location: 'Main Hall',
        },
        {
          time: '11:00 - 11:30',
          title: 'Coffee Break',
          description: 'Final networking and expo visits.',
          location: 'Exhibition Area',
        },
        {
          time: '11:30 - 13:00',
          title: 'Youth Tech Talent Showcase',
          description: 'Young Gambian developers and innovators present their projects and solutions.',
          speaker: 'Youth Participants',
          location: 'Main Hall',
        },
        {
          time: '13:00 - 14:00',
          title: 'Lunch Break',
          description: 'Final networking lunch.',
          location: 'Banquet Hall',
        },
        {
          time: '14:00 - 15:30',
          title: 'Policy Dialogue: Digital Transformation Roadmap',
          description:
            'Stakeholder consultation on policy recommendations and action plan for accelerating digital transformation.',
          speaker: 'Government, Private Sector, Civil Society',
          location: 'Main Hall',
        },
        {
          time: '15:30 - 16:30',
          title: 'Closing Ceremony & Awards',
          description:
            "Presentation of awards, closing remarks, vote of thanks, and announcement of next year's event.",
          speaker: 'Hon. Minister & Organising Committee',
          location: 'Main Hall',
        },
        {
          time: '16:30 onwards',
          title: 'Closing Reception',
          description: 'Cocktail reception for all participants to celebrate a successful week.',
          location: 'Outdoor Terrace',
        },
      ],
    },
  ];

  const currentDay = programme.find((day) => day.day === activeDay);

  return (
    <>
      {/* Hero Section */}
      <Section bgColor="gradient" className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Programme</h1>
          <p className="text-xl text-blue-100">
            Five days of keynotes, panels, workshops, and networking opportunities
          </p>
        </div>
      </Section>

      {/* Programme Content */}
      <Section bgColor="white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Explore the full schedule of sessions and activities">
            Programme Schedule
          </SectionTitle>

          {/* Day Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {programme.map((day) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(day.day)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeDay === day.day
                    ? 'bg-blue-800 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Day {day.day}
              </button>
            ))}
          </div>

          {/* Current Day Content */}
          {currentDay && (
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{currentDay.title}</h2>
                <p className="text-lg text-gray-600">{currentDay.date}</p>
              </div>

              <div className="space-y-4">
                {currentDay.sessions.map((session, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="px-4 py-2 bg-blue-100 text-blue-800 font-semibold rounded-lg text-sm">
                          {session.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{session.title}</h3>
                        <p className="text-gray-600 mb-3">{session.description}</p>
                        <div className="flex flex-wrap gap-3 text-sm">
                          {session.speaker && (
                            <div className="flex items-center gap-1 text-gray-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                              </svg>
                              <span>{session.speaker}</span>
                            </div>
                          )}
                          {session.location && (
                            <div className="flex items-center gap-1 text-gray-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span>{session.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Download Button */}
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Detailed Programme (PDF)
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out!</h2>
          <p className="text-xl text-blue-100 mb-8">
            Register now to secure your place at all these incredible sessions.
          </p>
          <Button
            href="/registration"
            variant="primary"
            size="lg"
            className="bg-white text-blue-900 hover:bg-blue-50"
          >
            Register Now
          </Button>
        </div>
      </Section>
    </>
  );
}
