import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { FiSend } from 'react-icons/fi';
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-poppins",
});

const Footer = () => {
    const [email, setEmail] = useState("");
    return (
        <footer className={`${poppins.className} bg-black text-white py-15 w-full mx-auto font-poppins`}>
<div className="mx-auto w-5/6  grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="space-y-3 border-gray-700 pr-4">
                    <h3 className="font-semibold text-3xl">Exclusive</h3>
                    <p className="font-normal text-2xl pt-3 ">Subscribe</p>
                    <p className="text-lg pt-3">Get 10% off your first order</p>

                    <form className="mt-5">
                        <div className="flex border border-white rounded px-4 py-3 items-center w-60">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-black text-white relative w-50 focus:outline-none border-0"
                            />
                            <button type="submit" aria-label="Submit email" className="ml-auto relative right-0">
                                <FiSend size={15} />
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="space-y-4 pr-4 text-sm">
                    <h3 className="font-medium text-2xl ">Support</h3>
                    <div className="text-lg">
                        <p className="py-3">
                            111 Bijoy Sarani, Dhaka,<br /> DH 1515, Bangladesh.
                        </p>
                        <p className="py-3">exclusive@gmail.com</p>
                        <p className="py-3">+88015-88888-9999</p>
                    </div>
                </div>

                <div className="space-y-6  pr-4 text-sm">
                    <h3 className="font-semibold text-3xl">Account</h3>
                    <ul className="space-y-3 cursor-pointer text-lg">
                        <li><Link href="/account" className="py-3">My Account</Link></li>
                        <li><Link href="/login">Login / Register</Link></li>
                        <li><Link href="/cart">Cart</Link></li>
                        <li><Link href="/wishlist">Wishlist</Link></li>
                        <li><Link href="/shop">Shop</Link></li>
                    </ul>
                </div>

                <div className="pr-4 space-y-3 cursor-pointer text-lg">
                    <h3 className="font-semibold text-3xl pb-3">Quick Links</h3>
                    <ul className="space-y-3 cursor-pointer">
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-use">Terms of Use</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="space-y-4 text-sm">
                    <h3 className="font-semibold text-3xl pb-3">Get Our App</h3>
                    <p className="text-gray-300">Save $3 with App New User Only</p>
                    <div className="flex space-x-3 mb-3">
                        <img
                            src="/images/qr.png"
                            alt="QR code"
                            className="w-22 h-22 object-contain border border-white"
                        />
                        <div className="flex flex-col justify-between gap-2">
                            <Link href="#" aria-label="Google Play Store" passHref>
                                <img
                                    src="/images/gp.webp"
                                    alt="Google Play Store"
                                    className="w-30 object-contain cursor-pointer"
                                />
                            </Link>
                            <Link href="#" aria-label="Apple App Store" passHref>
                                <img
                                    src="/images/as.webp"
                                    alt="Apple App Store"
                                    className="w-30 object-contain cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex space-x-9 text-white text-lg mt-5">
                        <Link href="#" aria-label="Facebook">
                            <FaFacebook size={24} className="cursor-pointer" />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <FaTwitter size={24} className="cursor-pointer" />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <FaInstagram size={24} className="cursor-pointer" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn">
                            <FaLinkedin size={24} className="cursor-pointer" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-400 pt-8 border-t border-gray-400 text-lg font-extralight mb-auto relative top-7">
                © 2022 Rimel. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
