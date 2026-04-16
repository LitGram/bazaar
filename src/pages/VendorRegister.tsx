import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Store } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function VendorRegister() {
  const { t } = useLanguage();
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center animate-fade-in">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="w-24 h-24 bg-green-100 text-green-600 rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-green-100"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h2 className="text-4xl font-black text-slate-800 mb-4">{t('vendor.success.title')}</h2>
        <p className="text-slate-500 text-lg max-w-sm mx-auto font-medium">{t('vendor.success.message')}</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="mt-12 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black shadow-2xl active:scale-95 transition-all"
        >
          {t('vendor.success.back')}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="p-4 bg-indigo-100 rounded-3xl mb-6">
          <Store className="w-10 h-10 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-black text-slate-800 mb-2">{t('vendor.title')}</h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{t('vendor.subtitle')}</p>
      </div>

      <form onSubmit={handleSubmit} className="glass p-10 rounded-3xl shadow-2xl shadow-indigo-50 border border-white">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-tight">{t('vendor.fullname')}</label>
            <input required type="text" placeholder={t('vendor.fullnamePlaceholder')} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold" />
          </div>
          
          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-tight">{t('vendor.phone')}</label>
            <input required type="tel" placeholder={t('vendor.phonePlaceholder')} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold" />
          </div>

          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-tight">{t('vendor.businessType')}</label>
            <div className="relative">
              <select required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold appearance-none">
                <option value="">{t('vendor.businessPlaceholder')}</option>
                <option value="agriculture">{t('cat.agriculture')}</option>
                <option value="grocery">{t('cat.grocery')}</option>
                <option value="dairy">{t('cat.dairy')}</option>
                <option value="electronics">{t('cat.electronics')}</option>
                <option value="services">{t('cat.services')}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-tight">{t('vendor.village')}</label>
            <input required type="text" placeholder={t('vendor.villagePlaceholder')} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold" />
          </div>

          <div>
            <label className="block text-sm font-black text-slate-700 mb-2 uppercase tracking-tight">{t('vendor.whatsapp')}</label>
            <input type="tel" placeholder={t('vendor.whatsappPlaceholder')} className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all font-bold" />
          </div>

          <button
            type="submit"
            className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black text-xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 active:scale-95 transition-all mt-8"
          >
            {t('vendor.submit')}
          </button>
        </div>
      </form>
      
      <p className="text-center mt-8 text-slate-400 text-xs font-medium">
        {t('vendor.agreement')}
      </p>
    </div>
  );
}
