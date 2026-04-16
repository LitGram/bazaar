import { motion } from 'framer-motion';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import type { Product } from '../../data/catalog';
import { useStore } from '../../store/useStore';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useLanguage();
  const { addToCart } = useStore();
  const { showToast } = useToast();

  const handleInterested = () => {
    addToCart(product.id);
    showToast("We'll connect you with the seller soon.");
  };

  const whatsappUrl = `https://wa.me/91${product.vendor.phone}?text=${encodeURIComponent(product.name)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="glass p-5 flex flex-col h-full group transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100"
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl mb-5 bg-slate-50 border border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-md text-indigo-600 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg border border-white/50">
            {product.category}
          </span>
        </div>
        {!product.availability && (
          <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center backdrop-blur-[2px]">
            <span className="bg-red-500 text-white px-4 py-2 rounded-xl font-black text-sm uppercase tracking-tighter transform -rotate-12 shadow-xl ring-4 ring-red-500/30">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black text-slate-800 leading-none group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <p className="text-slate-500 text-xs font-bold uppercase tracking-tight mb-2 flex items-center space-x-1">
          <span>By:</span>
          <span className="text-slate-800">{product.vendor.name}</span>
        </p>

        <p className="text-sm text-slate-400 font-medium mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Pricing */}
        <div className="mb-6 p-3 bg-slate-50 rounded-2xl border border-slate-100/50">
          <span className="text-2xl font-black text-slate-800">₹{product.price}</span>
          <span className="text-slate-400 text-xs font-bold ml-1">/ {product.priceUnit}</span>
        </div>
      </div>
      
      <div className="mt-auto grid grid-cols-2 gap-3">
        <button
          onClick={handleInterested}
          disabled={!product.availability}
          className="py-3.5 px-2 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 disabled:bg-slate-300 disabled:shadow-none active:scale-95 transition-all flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span className="text-xs font-black uppercase tracking-wider">{t('btn.interested')}</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3.5 px-2 bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-100 hover:bg-emerald-600 active:scale-95 transition-all flex items-center justify-center space-x-2"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-xs font-black uppercase tracking-wider">WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
}
