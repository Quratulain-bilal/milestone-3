"use client";


import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <span className="text-blue-600 text-3xl font-bold tracking-wide">
            Anna Blogs
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/home"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/blogs"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              href="/home"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Blogs
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition duration-300"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
