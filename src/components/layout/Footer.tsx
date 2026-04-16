import { Phone, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/50 backdrop-blur-md py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
        <div>
          <span className="text-xl font-black gradient-text">BAZAAR</span>
          <p className="text-slate-500 mt-2 text-sm max-w-xs leading-relaxed">
            Connecting local vendors and farmers in the Jaitsar-Suratgarh region.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center space-x-3 text-slate-600">
            <Phone className="w-5 h-5 text-indigo-600" />
            <span className="font-bold">+91 98123-45678</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-600">
            <MapPin className="w-5 h-5 text-indigo-600" />
            <span className="font-bold">{t('footer.location')}</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex items-center space-x-2 text-slate-400 text-sm font-medium">
            <span>{t('footer.made_for')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </div>
          <p className="text-[10px] text-slate-300 uppercase tracking-widest mt-2 font-bold">
            © 2026 JAITSAR DIGITAL MARKET
          </p>
        </div>
      </div>
    </footer>
  );
}
