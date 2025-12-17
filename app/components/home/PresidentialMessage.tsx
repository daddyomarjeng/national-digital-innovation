import Image from 'next/image';
import Section from '../ui/Section';

export default function PresidentialMessage() {
  return (
    <Section bgColor="gradient">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Presidential Image */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/president.jpg"
                  alt="His Excellency Adama Barrow, President of The Gambia"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 text-white">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-wider opacity-90 mb-2">Message from</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-1">His Excellency Adama Barrow</h3>
                <p className="text-lg opacity-90">President of the Republic of The Gambia</p>
              </div>

              <div className="relative">
                <svg className="absolute -top-4 -left-2 w-12 h-12 text-white/20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.2-.4 2.8-2.8 5.2-5.6 5.2v4c5.5 0 10-4.5 10-10V8h-8zm16 0c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.4 0 2.6-.5 3.6-1.2-.4 2.8-2.8 5.2-5.6 5.2v4c5.5 0 10-4.5 10-10V8h-8z" />
                </svg>
                <blockquote className="text-lg md:text-xl leading-relaxed pl-8 italic">
                  Digital transformation is not just about technology; it is about empowering our people, creating opportunities for our youth, and building a prosperous future for all Gambians. The National Digital Innovation Week represents our commitment to positioning The Gambia as a leader in Africa&apos;s digital economy.
                </blockquote>
              </div>

              <p className="mt-6 text-sm opacity-75">
                Join us in this historic gathering as we chart the course for The Gambia&apos;s digital future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
