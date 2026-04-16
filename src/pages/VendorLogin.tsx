import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, Smartphone, KeyRound, ShieldCheck } from 'lucide-react';

export default function VendorLogin() {
  const [phone, setPhone] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [isOtpSent, setIsOtpSent] = React.useState(false);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length === 10) {
      setIsOtpSent(true);
      setError('');
    } else {
      setError('Please enter a valid 10-digit phone number');
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') {
      navigate('/vendor/dashboard');
    } else {
      setError('Invalid OTP. Use 1234 for testing.');
    }
  };

  return (
    <div className="max-w-md mx-auto py-20 px-4">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="p-4 bg-indigo-100 rounded-3xl mb-6 ring-8 ring-indigo-50">
          <LogIn className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-2">Vendor Central</h1>
        <p className="text-slate-500 font-medium">Manage your products and prices in Jaitsar.</p>
      </div>

      <div className="glass p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 border border-white">
        {!isOtpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div className="relative">
              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 pl-12 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-black"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl hover:bg-black active:scale-95 transition-all"
            >
              Get OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center">OTP sent to {phone}</p>
            </div>
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                required
                type="text"
                placeholder="Enter 4-digit OTP"
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 pl-12 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-black tracking-[1em] text-center"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all"
            >
              Verify & Login
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
              Demo OTP: <span className="text-indigo-600">1234</span>
            </p>
          </form>
        )}
      </div>
      
      <p className="text-center mt-10 text-slate-400 text-xs font-medium">
        Need help? Contact Jaitsar Admin at +91 98123-45678
      </p>
    </div>
  );
}
