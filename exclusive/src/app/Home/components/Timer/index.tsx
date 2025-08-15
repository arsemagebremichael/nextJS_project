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
  const calculateRemainingTime = (): RemainingTime => {
    const difference = +new Date(date) - +new Date();
    let remainingTime: RemainingTime = {};

    if (difference > 0) {
      remainingTime = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return remainingTime;
  };

  const [remainingTime, setRemainingTime] = useState<RemainingTime>(calculateRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <div className="mb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <div className="">
          <div className="text-m text-black ">Days</div>
            <div className="text-4xl font-bold">{remainingTime.days ?? 0}</div>
            
          </div>
          <div className="text-4xl font-bold">:</div>
          <div className="">
          <div className="text-m text-black ">Hours</div>
            <div className="text-4xl font-bold">{remainingTime.hours ?? 0}</div>
            
          </div>
          <div className="text-4xl font-bold ">:</div>
          <div className="">
          <div className="text-m text-black ">Minutes</div>
            <div className="text-4xl font-bold">{remainingTime.minutes ?? 0}</div>
          </div>
          <div className="text-4xl font-bold">:</div>
          <div className="">
          <div className="text-m text-black ">Seconds</div>
            <div className="text-4xl font-bold">{remainingTime.seconds ?? 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
