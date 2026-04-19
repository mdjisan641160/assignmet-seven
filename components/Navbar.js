"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, History, PieChart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "Timeline", href: "/timeline", icon: <History size={18} /> },
    { name: "Stats", href: "/stats", icon: <PieChart size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-blue-600">KeenKeeper</Link>
        <div className="flex gap-4 md:gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href} 
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${pathname === link.href ? "bg-blue-50 text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`}>
              {link.icon} <span className="hidden md:inline">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}