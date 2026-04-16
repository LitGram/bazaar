import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: string;
  quantity: number;
}

interface AppState {
  cart: CartItem[];
  language: 'en' | 'hi';
  searchQuery: string;
  setLanguage: (lang: 'en' | 'hi') => void;
  setSearchQuery: (query: string) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      cart: [],
      language: 'en',
      searchQuery: '',
      setLanguage: (lang) => set({ language: lang }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      addToCart: (productId) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === productId);
          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          }
          return { cart: [...state.cart, { id: productId, quantity: 1 }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: 'bazaar-storage',
    }
  )
);
