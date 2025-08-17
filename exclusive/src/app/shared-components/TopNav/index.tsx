import React, { useState } from "react";
import Link from "next/link";
import { FiHeart, FiSearch, FiShoppingCart } from "react-icons/fi";
export default function TopNav() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav>
      <div className="">
        <div className="  flex justify-between items-center h-20">
          <div className="f text-3xl font-bold font-poppins text-primary">Exclusive</div>

          <ul className="flex text-xl gap-11 font-poppins hover:">
            <li>
              <Link href={"/home"} className="">Home</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"/signUp"} className="">
                Sign Up
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-6">
            <div className="gap-5 inline-flex items-center border-0 rounded-lg bg-gray-100 px-7 py-2 cursor-text">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="font-light font-poppins text-sm text-gray-600 bg-gray-100 focus:outline-none border-0"
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search"
                
              />
              <FiSearch className="w-7 h-7 cursor-pointer" />
            </div>

            <button aria-label="Favorites" className="hover:text-primary transition cursor-pointer">
              <FiHeart className="w-7 h-7 " />
            </button>

            <button aria-label="Cart" className="hover:text-primary transition cursor-pointer">
              <FiShoppingCart className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
