"use client";
import { useState, useEffect } from 'react';

export default function TimelinePage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    // LocalStorage থেকে ডাটা লোড করা
    if (typeof window !== 'undefined') {
      const storedLogs = JSON.parse(localStorage.getItem('timeline') || '[]');
      setLogs(storedLogs);
    }
  }, []);

  // ফিল্টার লজিক
  const filteredLogs = filter === 'All' ? logs : logs.filter((log: any) => log.type === filter);

  // কাস্টম ইমেজ আইকন ব্যবহারের ফাংশন
  const getIcon = (type: string) => {
    if (type === 'Call') return <img src="/call.png" alt="Call" className="w-8 h-8 object-contain" />;
    if (type === 'Text') return <img src="/text.png" alt="Text" className="w-8 h-8 object-contain" />;
    return <img src="/video.png" alt="Video" className="w-8 h-8 object-contain" />;
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl min-h-screen">
      <div className="mb-10">
        <h1 className="text-4xl font-black text-gray-900">Interaction Timeline</h1>
        <p className="text-gray-500 mt-2">Track your history with friends and family.</p>
      </div>

      {/* ফিল্টার বাটন */}
      <div className="flex flex-wrap gap-3 mb-8">
        {['All', 'Call', 'Text', 'Video'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-6 py-2 rounded-full font-bold transition shadow-sm ${
              filter === type 
                ? 'bg-blue-600 text-white shadow-blue-200' 
                : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      
      {filteredLogs.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-[2.5rem] border-2 border-dashed border-gray-200">
          <div className="flex justify-center mb-4 opacity-20">
             <img src="/logo-xl.png" alt="Empty" className="h-16 grayscale" />
          </div>
          <p className="text-gray-500 font-medium">No interactions found for "{filter}".</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredLogs.map((log: any) => (
            <div 
              key={log.id} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all active:scale-[0.98]"
            >
              <div className="flex items-center gap-6">
                <div className="p-3 bg-blue-50 rounded-2xl w-16 h-16 flex items-center justify-center">
                  {getIcon(log.type)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{log.title}</h3>
                  <p className="text-gray-500 text-sm font-medium">{log.date}</p>
                </div>
              </div>
              <span className={`px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                log.type === 'Call' ? 'bg-blue-100 text-blue-600' : 
                log.type === 'Text' ? 'bg-green-100 text-green-600' : 
                'bg-purple-100 text-purple-600'
              }`}>
                {log.type}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}