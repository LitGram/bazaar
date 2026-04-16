import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Globe, Menu, X } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { useLanguage } from '../../context/LanguageContext';
import { AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { cart, searchQuery, setSearchQuery } = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.catalog'), path: '/catalog' },
    { name: t('nav.register'), path: '/register' },
  ];

  const cartCount = cart.length; // Simplified for this task

  return (
    <nav className="sticky top-0 z-50 w-full glass shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-black gradient-text">BAZAAR</span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder={t('nav.search')}
                className="w-full bg-slate-100/50 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500/20 transition-all text-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-slate-600 hover:text-indigo-600 font-bold text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-slate-700 bg-slate-100 px-4 py-2 rounded-full hover:bg-white border border-slate-200 transition-all font-bold text-xs"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Cart Icon */}
            <Link to="/cart" className="relative p-2 text-slate-700 hover:text-indigo-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Right Bar: Only Cart + Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Link to="/cart" className="relative p-2 text-slate-700">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-700 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-slate-200 shadow-xl overflow-hidden">
            <div className="px-4 pt-4 pb-8 space-y-3">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={t('nav.search')}
                  className="w-full bg-slate-100 rounded-2xl py-3 pl-10 pr-4 text-sm font-medium"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-slate-700 font-black text-lg rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-4 bg-slate-900 text-white rounded-2xl font-black shadow-lg"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
