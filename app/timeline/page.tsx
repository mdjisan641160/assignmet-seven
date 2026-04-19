"use client";
import { useState, useEffect } from 'react';

export default function TimelinePage() {
  const [logs, setLogs] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // LocalStorage থেকে ডেটা লোড করা
    const storedLogs = JSON.parse(localStorage.getItem('timeline') || '[]');
    setLogs(storedLogs);
  }, []);

  // ফিল্টার লজিক
  const filteredLogs = filter === 'All' ? logs : logs.filter((log: any) => log.type === filter);

  // আইকনের বদলে আপনার পাঠানো ইমেজ ব্যবহারের ফাংশন
  const getIcon = (type: string) => {
    if (type === 'Call') return <img src="/call.png" alt="Call" className="w-8 h-8 object-contain" />;
    if (type === 'Text') return <img src="/text.png" alt="Text" className="w-8 h-8 object-contain" />;
    return <img src="/video.png" alt="Video" className="w-8 h-8 object-contain" />;
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <h1 className="text-4xl font-black mb-10">Timeline</h1>

      {/* ফিল্টার বাটন */}
      <div className="flex gap-3 mb-8">
        {['All', 'Call', 'Text', 'Video'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full font-bold transition ${
              filter === type ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      
      {filteredLogs.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
          <p className="text-gray-500">No interactions found for "{filter}".</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredLogs.map((log: any) => (
            <div key={log.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition">
              <div className="flex items-center gap-6">
                <div className="p-3 bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center">
                  {getIcon(log.type)}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{log.title}</h3>
                  <p className="text-gray-500 text-sm">{log.date}</p>
                </div>
              </div>
              <span className="px-4 py-1 bg-gray-100 rounded-full text-xs font-bold text-gray-500 uppercase">
                {log.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}