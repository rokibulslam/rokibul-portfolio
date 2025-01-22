"use client";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-primary">PortfolioPro</div>

      {/* Hamburger Menu (Mobile Only) */}
      <button
        className="block md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white md:flex md:static md:top-auto md:left-auto md:w-auto md:space-x-6 text-gray-700`}
      >
        <a
          href="#portfolio"
          className="block px-4 py-2 hover:text-primary md:inline"
        >
          Portfolio
        </a>
        <a
          href="#about"
          className="block px-4 py-2 hover:text-primary md:inline"
        >
          About Me
        </a>
        <a
          href="#blog"
          className="block px-4 py-2 hover:text-primary md:inline"
        >
          Blog
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 hover:text-primary md:inline"
        >
          Contact
        </a>
      </nav>

      {/* Hire Me Button */}
      <button className="hidden md:block px-4 py-2 text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700 focus:outline-none">
        Hire Me
      </button>
    </header>
  );
}
