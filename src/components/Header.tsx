"use client"; 

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-white hover:text-indigo-200 transition-all duration-300">
            <Link href="/">Cloud Computing</Link>
          </h1>

          {/* Hamburger Menu for Mobile */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation */}
          <nav>
            <ul
              className={`${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } fixed inset-y-0 left-0 bg-indigo-700 md:bg-transparent w-3/4 md:w-auto md:relative md:translate-x-0 md:flex md:space-x-8 md:items-center text-white font-medium shadow-lg md:shadow-none transition-transform duration-300 ease-in-out z-50 p-4 md:p-0`}
            >
              <li className="border-b border-indigo-500 md:border-none">
                <Link
                  href="/"
                  className="block py-2 md:py-0 hover:text-indigo-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="border-b border-indigo-500 md:border-none">
                <Link
                  href="/about"
                  className="block py-2 md:py-0 hover:text-indigo-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="border-b border-indigo-500 md:border-none">
                <Link
                  href="/blog"
                  className="block py-2 md:py-0 hover:text-indigo-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 md:py-0 hover:text-indigo-300 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
