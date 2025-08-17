"use client";

import { MdLocalShipping, MdSupportAgent, MdVerified } from "react-icons/md";

export default function ServiceHighlights() {
  return (
    <div className="flex justify-center font-poppins items-start gap-20 py-12 mt-16 mb-20 bg-white px-4 md:px-0">
      <div className="flex flex-col items-center min-w-[270px] text-center">
        <span className="flex items-center justify-center h-35 w-35 rounded-full bg-gray-300 shadow">
          <MdLocalShipping className="w-25 h-25 text-white bg-black py-3 px-3 rounded-full" />
        </span>
        <h3 className="mt-8  font-semibold text-3xl">
          FAST & FREE SHIPPING
        </h3>
        <p className="text-[0.96rem] text-gray-700 mt-1">
          Complimentary delivery on orders over $140
        </p>
      </div>

      <div className="flex flex-col items-center min-w-[270px] text-center">
        <span className="flex items-center justify-center h-35 w-35 rounded-full bg-gray-300 shadow">
          <MdSupportAgent className="w-25 h-25 text-white bg-black py-3 px-3 rounded-full " />
        </span>
        <h3 className="mt-8  font-semibold text-3xl">
          24/7 CUSTOMER SUPPORT
        </h3>
        <p className="text-[0.96rem] text-gray-700 mt-1">
          Dedicated support available round-the-clock
        </p>
      </div>

      <div className="flex flex-col items-center min-w-[270px] text-center">
        <span className="flex items-center justify-center h-35 w-35 rounded-full bg-gray-300 shadow">
          <MdVerified className="w-25 h-25 text-white bg-black py-3 px-3 rounded-full " />
        </span>
        <h3 className="mt-8  font-semibold text-3xl">
          GUARANTEED MONEY BACK
        </h3>
        <p className="text-[0.96rem] text-gray-700 mt-1">
          Return within 30 days for a full refund
        </p>
      </div>
    </div>
  );
}
