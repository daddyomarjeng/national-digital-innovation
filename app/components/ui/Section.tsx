import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'gray' | 'blue' | 'gradient';
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
  };

  return (
    <section id={id} className={`py-16 md:py-20 ${bgColors[bgColor]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
