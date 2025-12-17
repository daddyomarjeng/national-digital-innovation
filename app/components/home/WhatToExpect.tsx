import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';
import { EXPECTATIONS } from '@/app/constants';

export default function WhatToExpect() {
  return (
    <Section bgColor="gray">
      <SectionTitle subtitle="Experience innovation, learning, and collaboration throughout the week">What to Expect</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPECTATIONS.map((item, idx) => (
          <Card key={idx} className="relative overflow-hidden border-0 shadow-lg shadow-blue-100/60">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-blue-900/10" aria-hidden />
            <CardBody className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white text-2xl shadow-lg shadow-blue-200">
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
