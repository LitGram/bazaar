import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Cart() {
  const { t } = useLanguage();

  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-100 rounded-full blur-2xl opacity-50 scale-150"></div>
          <div className="relative bg-white p-10 rounded-full shadow-2xl shadow-indigo-50 border border-slate-100">
            <ShoppingBag className="w-20 h-20 text-indigo-200" />
            <div className="absolute -top-1 -right-1 w-8 h-8 bg-amber-500 rounded-full border-4 border-white"></div>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-4xl font-black text-slate-800 tracking-tight">Your bag is empty</h1>
          <p className="text-slate-500 font-medium max-w-xs mx-auto">
            Looks like you haven't added any essentials yet. Explore the Jaitsar catalog to get started.
          </p>
        </div>

        <Link
          to="/catalog"
          className="group flex items-center justify-center space-x-3 bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 transition-all"
        >
          <span>{t('btn.view_catalog')}</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
