import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SugarCare - Your Diabetes Management Companion",
  description: "SugarCare helps you manage your diabetes with ease. Track your blood sugar, medications, and health data all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-24">
      <body
        className={`${outfit.variable} ${dmSans.variable} font-sans antialiased bg-[#fafbfc] text-slate-900`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
