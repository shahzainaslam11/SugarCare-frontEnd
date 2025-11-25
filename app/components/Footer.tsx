import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 mt-auto overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 md:mb-20">
          <div className="space-y-5 md:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-xl"
            >
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
                SugarCare
              </h3>
            </Link>
            <p className="text-gray-600 text-base leading-relaxed max-w-sm">
              Empowering individuals to manage diabetes smarter — with
              <span className="font-semibold text-indigo-600"> AI-driven insights</span>, proactive tracking, and a healthier
              future.
            </p>

            <div className="flex space-x-5 pt-2">
              <a
                href="#"
                aria-label="Follow us on LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="#"
                aria-label="Follow us on X (Twitter)"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-200 pb-2">
              Legal & Resources
            </h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-indigo-200 pb-2">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-base text-gray-600">
              <li>
                <span className="font-semibold text-gray-900 block mb-1">Support</span>
                <a
                  href="mailto:support@sugarcare.ai"
                  className="text-indigo-600 hover:text-indigo-700 transition-colors duration-300 font-medium"
                >
                  support@sugarcare.ai
                </a>
              </li>
              <li>
                <span className="font-semibold text-gray-900 block mb-1">Location</span>
                <span className="text-gray-600 leading-relaxed">
                  123 Health Tech Hub, <br />
                  London, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm md:text-base text-center md:text-left font-medium">
            &copy; {currentYear} SugarCare Technologies Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-wide rounded-full border border-indigo-200">
              UK GDPR Compliant
            </span>
            <span className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide rounded-full border border-blue-200">
              HIPAA Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
