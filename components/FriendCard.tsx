import Link from 'next/link';

export default function FriendCard({ friend }: { friend: any }) {
  const statusClasses: any = {
    'overdue': 'bg-red-100 text-red-600',
    'almost due': 'bg-yellow-100 text-yellow-600',
    'on-track': 'bg-green-100 text-green-600'
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 group">
        <img src={friend.picture} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-50 group-hover:border-blue-100 transition-colors" alt="" />
        <h3 className="text-xl font-bold text-center">{friend.name}</h3>
        <p className="text-center text-gray-500 text-sm mb-4">{friend.days_since_contact} days since contact</p>
        <div className={`text-center py-1 rounded-full text-xs font-black uppercase ${statusClasses[friend.status]}`}>
          {friend.status}
        </div>
      </div>
    </Link>
  );
}