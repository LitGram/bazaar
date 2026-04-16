import React from 'react';
import { X, Sprout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "🌾 Rabi season — HD-2967 Wheat Seeds now available",
  "🌿 DAP Fertilizer stock replenished — Contact Ramesh Seeds Store",
  "🚜 Free soil testing camp next Monday at Suratgarh Mandi",
];

export default function SeasonalBanner() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [currentMessage] = React.useState(messages[0]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-indigo-600 text-white overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Sprout className="w-5 h-5 text-indigo-200" />
              <p className="text-sm font-bold tracking-wide">
                {currentMessage}
              </p>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-indigo-700 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
