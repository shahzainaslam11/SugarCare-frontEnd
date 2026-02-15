import type { Metadata } from "next";
<<<<<<< HEAD
import { Outfit, DM_Sans } from "next/font/google";
=======
import { Geist, Geist_Mono } from "next/font/google";
>>>>>>> 9fa9bd377c4b926dcfbba67987e7b20a80f51dd4
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./globals.css";

<<<<<<< HEAD
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
=======
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
>>>>>>> 9fa9bd377c4b926dcfbba67987e7b20a80f51dd4
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
<<<<<<< HEAD
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
=======
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navigation />
        <main className="min-h-screen bg-white">
>>>>>>> 9fa9bd377c4b926dcfbba67987e7b20a80f51dd4
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
