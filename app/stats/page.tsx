"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Phone, MessageSquare, Video, ArrowLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import toast from 'react-hot-toast';

// ১. পাথ আপডেট করা হয়েছে: ../../../ থেকে ../../ করা হয়েছে
import friendsData from '../../public/friends.json'; 

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState<any>(null);

  useEffect(() => {
    // ২. ইমপোর্ট করা ডাটা থেকে নির্দিষ্ট বন্ধুকে খুঁজে বের করা
    if (friendsData) {
      const found = friendsData.find((f: any) => f.id === parseInt(id as string));
      setFriend(found);
    }
  }, [id]);

  const handleInteraction = (type: string) => {
    // ৩. localStorage ব্যবহারের আগে window চেক (Vercel বিল্ড সেফটি)
    if (typeof window === 'undefined' || !friend) return;

    const newLog = {
      id: Date.now(),
      friendId: id,
      title: `${type} with ${friend.name}`,
      type: type,
      date: new Date().toLocaleString(),
    };

    const existingLogs = JSON.parse(localStorage.getItem('timeline') || '[]');
    localStorage.setItem('timeline', JSON.stringify([newLog, ...existingLogs]));
    
    toast.success(`${type} logged successfully! Check Timeline.`);
  };

  if (!friend) return <div className="text-center py-20 font-bold">Loading profile...</div>;

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      {/* Back Button */}
      <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition font-medium">
        <ArrowLeft size={20} /> Back to Dashboard
      </Link>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Profile Header */}
        <div className="bg-blue-600 h-32 w-full"></div>
        <div className="px-8 pb-8">
          <div className="relative -mt-16 mb-6">
            <img 
              src={friend.picture} 
              className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover bg-gray-200" 
              alt={friend.name} 
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl font-black text-gray-900">{friend.name}</h1>
              <div className="flex items-center gap-4 mt-2 text-gray-500">
                <span className="flex items-center gap-1 font-medium">
                  <Calendar size={16}/> {friend.days_since_contact} days since last chat
                </span>
              </div>
              <div className="flex gap-2 mt-4 flex-wrap">
                {friend.tags && friend.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Check-in Section */}
            <div className="bg-blue-50 p-6 rounded-2xl w-full md:w-auto">
              <h3 className="font-bold text-blue-800 mb-4 text-center md:text-left">Quick Check-in</h3>
              <div className="flex gap-4 justify-center">
                <button onClick={() => handleInteraction('Call')} className="p-4 bg-white text-blue-600 rounded-xl shadow-sm hover:bg-blue-600 hover:text-white transition-all active:scale-95">
                  <Phone size={24} />
                </button>
                <button onClick={() => handleInteraction('Text')} className="p-4 bg-white text-green-600 rounded-xl shadow-sm hover:bg-green-600 hover:text-white transition-all active:scale-95">
                  <MessageSquare size={24} />
                </button>
                <button onClick={() => handleInteraction('Video')} className="p-4 bg-white text-purple-600 rounded-xl shadow-sm hover:bg-purple-600 hover:text-white transition-all active:scale-95">
                  <Video size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}