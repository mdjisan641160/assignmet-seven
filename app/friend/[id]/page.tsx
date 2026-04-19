"use client";

import Link from 'next/link';

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white pb-20 pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* মেইন লোগো (logo-xl.png) */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/logo-xl.png" 
              alt="KeenKeeper Logo" 
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>

          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-gray-900 md:text-7xl">
            Stay Connected with <span className="text-blue-600">People Who Matter.</span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-lg text-gray-500">
            Never lose touch again. KeenKeeper helps you track interactions, 
            set reminders, and strengthen your most important relationships.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-700 shadow-lg shadow-blue-200"
            >
              Get Started Free 
              <span className="text-2xl">→</span>
            </Link>
          </div>

          {/* ফিচার সেকশন - কাস্টম ইমেজ আইকন দিয়ে আপডেট করা */}
          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3 w-full max-w-5xl">
            
            {/* Track Contacts - Call Icon */}
            <div className="flex flex-col items-center p-8 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-blue-100 transition-all">
              <div className="mb-6 p-4 bg-blue-100 rounded-3xl">
                <img src="/call.png" alt="Track Contacts" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Track Contacts</h3>
              <p className="text-sm text-gray-500 mt-3 text-center leading-relaxed">
                Manage all your friends and family in one place.
              </p>
            </div>

            {/* Interaction History - Text Icon */}
            <div className="flex flex-col items-center p-8 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-green-100 transition-all">
              <div className="mb-6 p-4 bg-green-100 rounded-3xl">
                <img src="/text.png" alt="Interaction History" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Interaction History</h3>
              <p className="text-sm text-gray-500 mt-3 text-center leading-relaxed">
                Log calls, texts, and meetings automatically.
              </p>
            </div>

            {/* Smart Insights - Video Icon */}
            <div className="flex flex-col items-center p-8 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-purple-100 transition-all">
              <div className="mb-6 p-4 bg-purple-100 rounded-3xl">
                <img src="/video.png" alt="Smart Insights" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="font-bold text-xl text-gray-900">Smart Insights</h3>
              <p className="text-sm text-gray-500 mt-3 text-center leading-relaxed">
                Get reminders when it's time to reach out again.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}