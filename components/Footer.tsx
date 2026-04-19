"use client";

import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{ backgroundColor: '#000000', color: '#9ca3af' }} 
      className="w-full border-t border-gray-800 mt-20"
    >
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            {/* লোগো ইমেজ অ্যাড করা হয়েছে */}
            <img src="/logo-xl.png" alt="KeenKeeper" className="h-8 w-auto mb-4" />
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
              Helping you stay connected with the people who matter most.
            </p>
          </div>
          
          <div className="flex gap-6 items-center">
            {/* সোশ্যাল মিডিয়া ফটো লিঙ্ক */}
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/facebook.png" alt="Facebook" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/twitter.png" alt="Twitter" className="w-6 h-6 object-contain" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6 object-contain" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={14} className="text-red-500 fill-current" /> in Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
}