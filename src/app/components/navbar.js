'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-20 w-full bg-white border-b border-gray-200 opacity-95 dark:bg-gray-900 start-0 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-2 mx-auto font-poppins">
        {/* Logo */}
        <Link href="/" className="flex items-center p-2 space-x-3 no-underline rtl:space-x-reverse">
          <Image src="/images/logo.png" alt="School Logo" width={55} height={55} />
          <h2 className="self-center pt-2 text-2xl font-bold text-blue-800 whitespace-nowrap dark:text-white">Bab ul Islam</h2>
        </Link>

        {/* Menu Section */}
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Apply Now Button - Only visible on md screens and larger */}
          <Link href="/admissions">
            <button
              type="button"
              className={`px-4 py-2.5 text-sm font-semibold font-serif text-center text-blue-900 border-2 no-underline rounded-lg border-blue-900 
              hidden md:block ${pathname === '/admissions' ? 'bg-blue-900 text-white' : 'hover:bg-blue-900 hover:text-white'}`}
            >
              Apply Now
            </button>
          </Link>

          {/* Hamburger menu button for smaller screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col mt-3 text-xl font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Dynamic Links */}
            <li>
              <Link
                href="/"
                className={`block px-3 py-2 no-underline rounded 
                ${pathname === '/' ? 'bg-blue-700 text-white' : 'hover:bg-gray-100 md:hover:text-blue-700 md:dark:hover:text-blue-500'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block px-3 py-2 font-bold text-gray-900 no-underline rounded 
                ${pathname === '/about' ? 'bg-blue-700 text-white' : 'hover:bg-gray-100 md:hover:text-blue-700 md:dark:hover:text-blue-500'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block px-3 py-2 font-bold text-gray-900 no-underline rounded 
                ${pathname === '/contact' ? 'bg-blue-700 text-white' : 'hover:bg-gray-100 md:hover:text-blue-700 md:dark:hover:text-blue-500'}`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className={`block px-3 py-2 font-bold text-gray-900 no-underline rounded 
                ${pathname === '/admissions' ? 'bg-blue-700 text-white' : 'hover:bg-gray-100 md:hover:text-blue-700 md:dark:hover:text-blue-500'}`}
              >
                Admissions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
