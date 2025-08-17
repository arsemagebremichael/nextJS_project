import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function NavAdvert() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const languages = ["Amharic", "Kiswahili", "English"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language: string) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    return (
        <header>
            <div className="bg-black font-poppins text-white flex items-center justify-between px-6 py-4 m-0 text-sm md:px-60 relative">
                <span className="flex-1 text-center">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <Link href="#" className="font-bold underline ml-2">
                        ShopNow
                    </Link>
                </span>
                <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleDropdown}>
                    <span>{selectedLanguage}</span>
                    <ChevronDownIcon className="w-4 h-4 text-white" />

                    {isOpen && (
                        <ul className="absolute right-0 mt-40 w-36 bg-black border border-gray-600 rounded shadow-lg z-100">
                            {languages.map((language) => (
                                <li
                                    key={language}
                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                    onClick={() => selectLanguage(language)}
                                >
                                    {language}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
}
