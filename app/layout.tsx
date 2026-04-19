import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeenKeeper - Friendship Tracker",
  description: "Maintain your friendships with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F8FAFC] flex flex-col min-h-screen`}>
        {/* টোস্ট নোটিফিকেশন সেটআপ */}
        <Toaster position="top-center" reverseOrder={false} />
        
        {/* সব পেজের জন্য কমন নেভিগেশন বার */}
        <Navbar />
        
        {/* মেইন কন্টেন্ট - এটি flex-grow করা হয়েছে যাতে ফুটার সবসময় নিচে থাকে */}
        <main className="flex-grow">
          {children}
        </main>

        {/* ফুটার সেকশন */}
        <Footer />
      </body>
    </html>
  );
}