"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 md:h-20 lg:h-22">
          <Link href="/" className="flex items-center space-x-3 group">
            {!logoError && (
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src="/logo.svg"
                  alt="SugarCare Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
              SugarCare
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Link
              href="/"
              className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 font-semibold text-base relative group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/privacy"
              className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 font-semibold text-base relative group"
            >
              Privacy Policy
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
            <Link
              href="/terms"
              className="px-5 py-2.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 font-semibold text-base relative group"
            >
              Terms & Conditions
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2 space-y-1">
            <Link
              href="/"
              className="block px-5 py-3.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 font-semibold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/privacy"
              className="block px-5 py-3.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 font-semibold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="block px-5 py-3.5 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-300 font-semibold text-base"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
