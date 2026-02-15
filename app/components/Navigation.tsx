"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/citations", label: "Medical Citations" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
] as const;

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={`nav-link nav-link-transition relative px-5 py-2.5 text-slate-700 hover:text-indigo-600 rounded-lg font-medium text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 active:scale-[0.98] ${
        isActive ? "active" : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (diff > 80) closeMobile();
  };

  const scrolled = scrollY > 10;

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-indigo-500/40 z-[60] origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden
      />
      <nav
        className={`sticky top-0 z-50 transition-[height,background-color,box-shadow,border-color] duration-250 ease-out ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/40 shadow-[0_4px_6px_-1px_rgb(0_0_0_/0.04),0_2px_4px_-2px_rgb(0_0_0_/0.03)]"
            : "bg-white/70 backdrop-blur-xl border-b border-slate-200/20"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 transition-[height] duration-250 ease-out ${
            scrolled ? "h-[72px] md:h-[76px]" : "h-20 md:h-24"
          }`}
        >
          <div className="flex justify-between items-center h-full">
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 rounded-lg"
            >
              {!logoError && (
                <div
                  className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 transition-transform duration-250 ease-out will-change-transform group-hover:scale-[1.03] group-hover:rotate-[2deg]"
                >
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
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                SugarCare
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-lg text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-[transform,color,background-color] duration-250 ease-out"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-250 ease-out ${mobileMenuOpen ? "rotate-90" : ""}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
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
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[55] md:hidden transition-opacity duration-250 ease-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm"
          onClick={closeMobile}
        />
        <div
          ref={mobilePanelRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`absolute top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-white shadow-xl border-l border-slate-200/60 transform transition-transform duration-250 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-24 pb-8 px-6 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="nav-link-transition block px-4 py-3.5 text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/80 rounded-lg font-medium text-base active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-[color,background-color,transform] duration-250 ease-out"
                style={{
                  animation: mobileMenuOpen ? `nav-slide-in 0.25s ease-out ${i * 40}ms both` : "none",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
