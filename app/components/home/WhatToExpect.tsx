import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Card, { CardBody } from '../ui/Card';
import { EXPECTATIONS } from '@/app/constants';

export default function WhatToExpect() {
  return (
    <Section bgColor="gray">
      <SectionTitle subtitle="Experience innovation, learning, and collaboration throughout the week">
        What to Expect
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPECTATIONS.map((item, idx) => (
          <Card key={idx}>
            <CardBody className="text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
}
