import Section from '../ui/Section';
import Button from '../ui/Button';

export default function CallToAction() {
  return (
    <Section bgColor="gradient">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Be Part of Digital Innovation Week?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Register now and join us in shaping The Gambia&apos;s digital future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/registration"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto bg-white text-blue-900 hover:bg-blue-50 font-semibold"
          >
            Register for Free
          </Button>
          <Button
            href="/about"
            variant="ghost"
            size="lg"
            className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Section>
  );
}
