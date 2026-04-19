"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clock, BarChart3, Users } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // নেভিগেশন লিঙ্কগুলোর লিস্ট
  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={20} /> },
    { name: 'Timeline', href: '/timeline', icon: <Clock size={20} /> },
    { name: 'Stats', href: '/stats', icon: <BarChart3 size={20} /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* লোগো সেকশন */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-black text-blue-600">
          <div className="bg-blue-600 p-1.5 rounded-lg text-white">
            <Users size={24} fill="currentColor" />
          </div>
          <img src="/logo.png" alt="KeenKeeper Logo" className="h-10 w-auto" />
        </Link>

        {/* লিঙ্ক সেকশন */}
        <div className="flex gap-1 md:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-all ${
                  isActive 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-500 hover:bg-gray-50 hover:text-blue-400'
                }`}
              >
                {link.icon}
                <span className="hidden md:block">{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}