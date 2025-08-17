"use client";

import { useState } from "react";
import NavigationArrows from "../Navigation";
import { AiOutlineAlert, AiOutlineAudio, AiOutlineCamera, AiOutlineClockCircle, AiOutlineLaptop, AiOutlineMobile, AiOutlinePlayCircle } from "react-icons/ai";

export default function CategoryBrowser() {
  const categories = [
    { name: "Phones", icon: <AiOutlineMobile className="w-20 h-20"/>},
    { name: "Computers", icon: <AiOutlineLaptop  className="w-20 h-20"/> },
    { name: "SmartWatch", icon: <AiOutlineClockCircle  className="w-20 h-20"/>},
    { name: "Camera", icon: <AiOutlineCamera  className="w-20 h-20"/>},
    { name: "HeadPhones", icon: <AiOutlineAudio className="w-20 h-20" /> },
    { name: "Gaming", icon: <AiOutlinePlayCircle  className="w-20 h-20"/> },
    { name: "SmartProducts", icon: <AiOutlineAlert className="w-20 h-20"/> },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoriesPerView = 6;
  const maxIndex = Math.max(0, categories.length - categoriesPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const translateX = `translateX(calc(-${(100 / categoriesPerView) * currentIndex}%))`;
return (
  <div>
    <div className="flex justify-end mb-4">
      <NavigationArrows
        onPrev={handlePrev}
        onNext={handleNext}
        currentIndex={currentIndex}
        maxIndex={maxIndex}
      />
    </div>
    <div className="flex overflow-hidden">
  <div
    className="flex gap-10 transition-transform duration-300 ease-in-out"
    style={{
      width: `${categories.length * 16}rem`,
      transform: translateX,
    }}
  >
    {categories.map((cat) => (
      <div
        key={cat.name}
        className="rounded-sm flex-shrink-0 flex flex-col items-center justify-center w-49 h-45 border border-gray-500 cursor-pointer transition-colors duration-300 bg-white text-black hover:bg-red-500 hover:text-white font-poppins hover:border-0 py-8 px-10"
      >
        {cat.icon}
        <span className="mt-5 text-lg font-medium">{cat.name}</span>
      </div>
    ))}
  </div>
</div>
  </div>
);
}
