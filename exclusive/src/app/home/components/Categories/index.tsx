"use client";

import { Mobile, Computer, CameraIcon, Game, EarPhoneIcon, AppleIcon } from "@/app/shared-components/Icons";

export default function CategoryBrowser() {
  const categories = [
    { name: "Phones", icon: <Mobile /> },
    { name: "Computers", icon: <Computer /> },
    { name: "SmartWatch", icon: <AppleIcon /> },
    { name: "Camera", icon: <CameraIcon /> },
    { name: "HeadPhones", icon: <EarPhoneIcon /> },
    { name: "Gaming", icon: <Game /> },
  ];

  return (
    <div className="">
      <div className="flex items-center gap-3">
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="rounded-sm flex flex-col items-center justify-center w-70 h-45 border border-gray-500 cursor-pointer transition-colors duration-300 bg-white text-black hover:bg-red-500 hover:text-white font-poppins hover:border-0 py-8 px-10"
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
