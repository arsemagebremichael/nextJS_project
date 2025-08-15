"use client";

import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/app/shared-components/Icons';
interface NavigationArrowsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  maxIndex: number;
}

const NavigationArrows = ({ onPrev, onNext, currentIndex, maxIndex }: NavigationArrowsProps) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="p-2 rounded-full disabled:opacity-50 hover:bg-pink-300 transition-colors"
      >
        <ArrowLeftIcon className="w-6 h-6 text-black" />
      </button>
      <button
        onClick={onNext}
        disabled={currentIndex === maxIndex}
        className="p-2  rounded-full disabled:opacity-50 hover:bg-pink-300 transition-colors"
      >
        <ArrowRightIcon className="w-6 h-6 text-black" />
      </button>
    </div>
  );
};

export default NavigationArrows;