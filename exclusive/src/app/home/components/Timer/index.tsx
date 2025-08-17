import React, { useEffect, useState } from 'react';

interface RemainingTime {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface TimerProps {
  date: string | Date;
}

const CountDown: React.FC<TimerProps> = ({ date }) => {
  const [remainingTime, setRemainingTime] = useState<RemainingTime>({});

  useEffect(() => {
    const calculateRemainingTime = (): RemainingTime => {
      const difference = +new Date(date) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return {};
    };

    setRemainingTime(calculateRemainingTime());

    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 font-poppins">
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <div>
            <div className="text-m text-black ">Days</div>
            <div className="text-4xl font-medium ">{remainingTime.days ?? 0}</div>
          </div>
          <div className="text-4xl font-medium text-[var(--color-secondary)]">:</div>
          <div>
            <div className="text-m text-black ">Hours</div>
            <div className="text-4xl font-medium ">{remainingTime.hours ?? 0}</div>
          </div>
          <div className="text-4xl font-medium text-[var(--color-secondary)]">:</div>
          <div>
            <div className="text-m text-black ">Minutes</div>
            <div className="text-4xl font-medium ">{remainingTime.minutes ?? 0}</div>
          </div>
          <div className="text-4xl font-medium text-[var(--color-secondary)]">:</div>
          <div>
            <div className="text-m text-black ">Seconds</div>
            <div className="text-4xl font-medium ">{remainingTime.seconds ?? 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
