import Button from "@/app/shared-components/Button";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MusicBanner: React.FC = () => {
  const handleButtonClick = () => {
    alert("!");
  };

  const [countdownDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 5);
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(intervalId);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownDate]);

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="font-poppins w-3/4 m-auto relative bg-black text-white flex flex-col md:flex-row items-center justify-between px-20 py-16 gap-16 overflow-hidden">
      <div className="flex flex-col gap-6 max-w-xl w-full">
        <span className="text-green-500 font-medium tracking-wide text-2xl">
          Categories
        </span>
        <h1 className="text-6xl font-medium tracking-wide">
          Enhance Your <br /> Music Experience
        </h1>

        <div className="flex gap-6">
          {[
            { label: "Days", value: pad(timeLeft.days) },
            { label: "Hours", value: pad(timeLeft.hours) },
            { label: "Minutes", value: pad(timeLeft.minutes) },
            { label: "Seconds", value: pad(timeLeft.seconds) },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center w-18 h-18 rounded-full bg-white text-black font-bold shadow-lg"
            >
              <span className="text-lg">{value}</span>
              <span className="text-xs font-normal">{label}</span>
            </div>
          ))}
        </div>

        <Button
          variant="secondary"
          onClickHandler={handleButtonClick}
          buttonText="Buy Now!"
        />
      </div>

      <div className="relative w-full max-w-lg">
        <Image
          src="/images/speaker.png"
          alt="JBL Speaker"
          width={400}
          height={300}
          className="object-contain"
          style={{ filter: "drop-shadow(0 0 30px rgba(0,0,0,0.9))" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default MusicBanner;
