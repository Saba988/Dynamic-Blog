
"use client"; // Makes this a Client Component

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Blog Title */}
          <h1 className="text-3xl font-bold text-white hover:text-indigo-200 transition-all duration-300">
            <Link href="/">Cloud Computing</Link>
          </h1>

          {/* Navigation */}
          <nav>
            <ul className="hidden md:flex space-x-8 text-white font-medium">
              <li>
                <Link href="/" className="hover:text-indigo-300 transition-all duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-indigo-300 transition-all duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-indigo-300 transition-all duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-300 transition-all duration-300">
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

