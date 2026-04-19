import FriendCard from '../components/FriendCard';
import HeroSection from '../components/HeroSection';
// ১. সরাসরি JSON ডাটা ইমপোর্ট করা হয়েছে (বিল্ড এরর সমাধানের জন্য)
import friendsData from '../public/friends.json'; 

export default function Home() {
  // ২. ফেচ করার দরকার নেই, সরাসরি ইমপোর্ট করা ডাটা ব্যবহার করুন
  const friends = friendsData;

  return (
    <main className="container mx-auto p-6 min-h-screen">
      
      {/* Hero/Banner Section */}
      <section className="text-center py-16 bg-gray-950 rounded-[2.5rem] mb-12 border border-gray-800 shadow-2xl">
        
        {/* লোগো সেকশন */}
        <div className="flex justify-center mb-8">
          <img 
            src="/logo-xl.png" 
            alt="KeenKeeper Logo" 
            className="h-24 md:h-32 w-auto object-contain animate-pulse" 
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
          Your Interaction <span className="text-blue-500">Timeline</span>
        </h1>
        
        <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg font-medium">
          See how often you connect using 
          <span className="inline-flex items-center gap-2 mx-2">
            <img src="/call.png" className="w-5 h-5" alt="call" />
            <img src="/text.png" className="w-5 h-5" alt="text" />
            <img src="/video.png" className="w-5 h-5" alt="video" />
          </span>
          and keep the bond strong.
        </p>

        {/* Action Button */}
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-black flex items-center gap-3 mx-auto transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20">
          View All Activities
        </button>
      </section>

      {/* Activities/Friends Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {friends && friends.map((friend: any) => (
          <div key={friend.id} className="relative group">
            <FriendCard friend={friend} />
            
            {/* কার্ডের উপরে ছোট এক্টিভিটি আইকন ইন্ডিকেটর */}
            <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <img src="/call.png" className="w-6 h-6 bg-white rounded-full p-1 shadow-sm" alt="call" />
              <img src="/text.png" className="w-6 h-6 bg-white rounded-full p-1 shadow-sm" alt="text" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}