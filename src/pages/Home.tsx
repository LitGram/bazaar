import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShoppingBasket, Carrot, Milk, Sparkles, 
  Sprout, PlusSquare, Hammer, Smartphone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { catalog } from '../data/catalog';
import ProductCard from '../components/catalog/ProductCard';
import { Link } from 'react-router-dom';
import React from 'react';
import SeasonalBanner from '../components/home/SeasonalBanner';
import MandiRateBoard from '../components/home/MandiRateBoard';

const allCategories = [
  { id: 'agriculture', icon: Sprout, color: 'bg-green-100 text-green-600', nameKey: 'cat.agriculture' },
  { id: 'grocery', icon: ShoppingBasket, color: 'bg-amber-100 text-amber-600', nameKey: 'cat.grocery' },
  { id: 'dairy', icon: Milk, color: 'bg-blue-100 text-blue-600', nameKey: 'cat.dairy' },
  { id: 'electronics', icon: Smartphone, color: 'bg-indigo-100 text-indigo-600', nameKey: 'cat.electronics' },
  { id: 'services', icon: Sparkles, color: 'bg-purple-100 text-purple-600', nameKey: 'cat.services' },
  { id: 'mandi', icon: Carrot, color: 'bg-orange-100 text-orange-600', nameKey: 'cat.mandi' },
  { id: 'medical', icon: PlusSquare, color: 'bg-red-100 text-red-600', nameKey: 'cat.medical' },
  { id: 'hardware', icon: Hammer, color: 'bg-slate-100 text-slate-600', nameKey: 'cat.hardware' },
];

export default function Home() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = React.useState(false);
  
  const displayedCategories = showAll ? allCategories : allCategories.slice(0, 5);
  const featured = catalog.slice(0, 4);

  return (
    <div className="space-y-16 pb-20">
      <SeasonalBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 py-16 md:py-24 px-8 text-white">
        <div className="relative z-10 max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              to="/catalog" 
              className="inline-flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
            >
              <span>{t('nav.catalog')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30 md:opacity-40 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-indigo-900 to-slate-900 md:to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200" 
            alt="Local farm" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Category Section with icons */}
      <section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-slate-800 flex items-center space-x-3">
              <span className="w-2 h-8 bg-amber-500 rounded-full"></span>
              <span>Categories</span>
            </h2>
          </div>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-indigo-600 font-bold hover:underline flex items-center space-x-1 text-sm bg-indigo-50 px-4 py-2 rounded-xl"
          >
            <span>{showAll ? "Show Less" : "Show More"}</span>
            <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? '-rotate-90' : 'rotate-90 md:rotate-0'}`} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {displayedCategories.map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-3xl flex flex-col items-center text-center group cursor-pointer shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all"
              >
                <div className={`p-4 rounded-2xl ${cat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                  {t(cat.nameKey)}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Mandi Rate Board */}
      <section>
        <MandiRateBoard />
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black text-slate-800 flex items-center space-x-3">
            <span className="w-2 h-8 bg-indigo-600 rounded-full"></span>
            <span>Featured Items</span>
          </h2>
          <Link to="/catalog" className="text-indigo-600 font-bold hover:underline flex items-center space-x-1 text-sm">
            <span>{t('nav.catalog')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
