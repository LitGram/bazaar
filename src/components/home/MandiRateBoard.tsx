import { TrendingUp, Clock } from 'lucide-react';

const rates = [
  { crop: 'Wheat (गेहूं)', rate: '₹2,200', unit: 'quintal' },
  { crop: 'Mustard (सरसों)', rate: '₹5,100', unit: 'quintal' },
  { crop: 'Onion (प्याज)', rate: '₹1,800', unit: 'quintal' },
  { crop: 'Cotton (नरमा)', rate: '₹6,500', unit: 'quintal' },
  { crop: 'Gwar (ग्वार)', rate: '₹5,400', unit: 'quintal' },
];

export default function MandiRateBoard() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-amber-100 rounded-2xl">
            <TrendingUp className="w-6 h-6 text-amber-600" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-slate-800">Today's Mandi Rates</h2>
            <p className="text-slate-400 text-sm font-medium flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>Suratgarh Mandi • Updated: Today, 10:00 AM</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {rates.map((item, idx) => (
          <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-amber-200 transition-colors group">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">{item.crop}</p>
            <div className="flex items-baseline space-x-1">
              <span className="text-2xl font-black text-slate-800 group-hover:text-amber-600 transition-colors">{item.rate}</span>
              <span className="text-slate-400 text-xs font-bold">/ {item.unit}</span>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-6 text-[10px] text-slate-400 font-medium italic">
        *Approx. rates for reference only. Mandi prices may vary during auction.
      </p>
    </div>
  );
}
