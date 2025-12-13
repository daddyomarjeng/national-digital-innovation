import Section from '../ui/Section';

export default function AboutHero() {
  return (
    <Section bgColor="gradient" className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About National Digital Innovation Week
        </h1>
        <p className="text-xl text-blue-100">
          Building a digitally empowered Gambia through innovation, collaboration, and inclusive growth
        </p>
      </div>
    </Section>
  );
}
