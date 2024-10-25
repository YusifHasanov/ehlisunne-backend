'use client'
import { useState } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname()

    const isActive = (href) => {
        return pathname  === href ? "text-[#F7E652]" : "text-white";
    };

    return (
        <nav className="bg-[#007A4C]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                <div className="flex-shrink-0">
          <span className="text-white font-bold text-lg">
            <span className="text-[#F7E652]">HAYAL</span>HANEM
          </span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className={`${isActive("/")} hover:text-[#F7E652]`}>
                        ANASAYFA
                    </Link>
                    <Link href="/videos" className={`${isActive("/videos")} hover:text-[#F7E652]`}>
                        SOHBETLER
                    </Link>
                    <Link href="/articles" className={`${isActive("/articles")} hover:text-[#F7E652]`}>
                        MAKALELER
                    </Link>
                    <Link href="/about" className={`${isActive("/about")} hover:text-[#F7E652]`}>
                        HAKKIMIZDA
                    </Link>
                    <Link href="/contact" className={`${isActive("/contact")} hover:text-[#F7E652]`}>
                        İLETİŞİM
                    </Link>
                    <Link
                        href="/bagis"
                        className="bg-[#F7E652] text-[#007A4C] py-2 px-4 rounded-md hover:bg-white"
                    >
                        BAĞIŞ
                    </Link>
                </div>
                <div className="flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-[#F7E652] focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/" className={`${isActive("/")} block px-3 py-2 rounded-md text-base font-medium`}>
                        ANASAYFA
                    </Link>
                    <Link href="/videos" className={`${isActive("/videos")} block px-3 py-2 rounded-md text-base font-medium`}>
                        SOHBETLER
                    </Link>
                    <Link href="/articles" className={`${isActive("/articles")} block px-3 py-2 rounded-md text-base font-medium`}>
                        MAKALELER
                    </Link>
                    <Link href="/about" className={`${isActive("/about")} block px-3 py-2 rounded-md text-base font-medium`}>
                        HAKKIMIZDA
                    </Link>
                    <Link href="/contact" className={`${isActive("/contact")} block px-3 py-2 rounded-md text-base font-medium`}>
                        İLETİŞİM
                    </Link>
                    <Link href="/bagis" className="bg-[#F7E652] text-[#007A4C] block px-3 py-2 rounded-md text-base font-medium">
                        BAĞIŞ
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;