import React from 'react';
import { catalog } from '../data/catalog';
import ProductCard from '../components/catalog/ProductCard';
import { useStore } from '../store/useStore';
import { useLanguage } from '../context/LanguageContext';
import { FilterX } from 'lucide-react';

const categoryIcons: Record<string, string> = {
  agriculture: '🌾',
  grocery: '🛒',
  dairy: '🥛',
  electronics: '💡',
  services: '🔧',
  mandi: '📦',
  medical: '💊',
  hardware: '🛠️',
  clothing: '👕',
  food: '🍲',
  education: '📚',
  transport: '🚚',
};

export default function Catalog() {
  const { t } = useLanguage();
  const { searchQuery, setSearchQuery } = useStore();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = Array.from(new Set(catalog.map(p => p.category)));

  const filteredProducts = catalog.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-20">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 mb-2">{t('nav.catalog')}</h1>
          <p className="text-slate-500 font-medium">Discover essential farm inputs, daily kirana, and local services in Jaitsar-Suratgarh.</p>
        </div>
        
        {/* Category Filter - Scrollable Chips */}
        <div className="sticky top-16 z-40 -mx-4 px-4 bg-slate-50/95 backdrop-blur-md py-4 border-b border-slate-200">
          <div className="flex items-center space-x-3 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap border-2 ${
                selectedCategory === null 
                ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100 scale-105' 
                : 'bg-white text-slate-700 border-slate-100 hover:border-indigo-300'
              }`}
            >
              🏠 All Items
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-2xl text-sm font-black transition-all whitespace-nowrap border-2 ${
                  selectedCategory === cat 
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl shadow-indigo-100 scale-105' 
                  : 'bg-white text-slate-700 border-slate-100 hover:border-indigo-300'
                }`}
              >
                <span className="mr-2">{categoryIcons[cat] || '📦'}</span>
                <span>{t(`cat.${cat}`)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-all">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-32 text-slate-400 text-center">
          <div className="bg-slate-100 p-10 rounded-full mb-8 ring-8 ring-slate-50">
            <FilterX className="w-16 h-16 opacity-20" />
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-2">No items found</h2>
          <p className="text-slate-500 max-w-xs mx-auto mb-8">We couldn't find any products matching your search or filter choice.</p>
          <button 
            onClick={() => {setSearchQuery(''); setSelectedCategory(null);}}
            className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all"
          >
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
}
