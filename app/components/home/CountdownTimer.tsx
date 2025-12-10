'use client';

import { useState, useEffect, useCallback } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    // Update every second
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && 
          newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        setIsEventStarted(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  if (isEventStarted) {
    return (
      <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white py-8 px-6 rounded-2xl shadow-xl text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          The Event Has Started!
        </h3>
        <p className="text-lg opacity-90">
          Join us now at the Digital Innovation Week
        </p>
      </div>
    );
  }

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-8 px-6 rounded-2xl shadow-xl">
      <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Event Starts In
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-white/20"
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
              {String(block.value).padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base uppercase tracking-wider opacity-90">
              {block.label}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-sm md:text-base opacity-90">
        Don&apos;t miss out on The Gambia&apos;s premier digital innovation event!
      </p>
    </div>
  );
}
