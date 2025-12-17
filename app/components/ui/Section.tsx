import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray' | 'blue' | 'gradient' | 'pattern';
}

export default function Section({ 
  children, 
  className = '', 
  id,
  bgColor = 'white' 
}: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-900 text-white',
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white',
    pattern: 'relative overflow-hidden bg-slate-950 text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-20 ${bgColors[bgColor]} ${className}`}>
      {bgColor === 'pattern' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-blue-900" aria-hidden="true" />
          <div
            className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.3),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.2),transparent_30%)]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_40%),linear-gradient(-135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_40%)]" aria-hidden="true" />
        </>
      )}
      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
