import React from 'react';
import { catalog as initialCatalog } from '../data/catalog';
import type { Product } from '../data/catalog';
import { LayoutDashboard, LogOut, Save, Power, IndianRupee, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

export default function VendorDashboard() {
  // Mocking Ramesh Seeds Store's dashboard
  const vendorName = "Ramesh Seeds Store";
  const [products, setProducts] = React.useState<Product[]>(
    initialCatalog.filter(p => p.vendor.name === vendorName)
  );
  
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleUpdate = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleSave = (name: string) => {
    showToast(`Updated ${name} successfully!`);
  };

  const handleLogout = () => {
    navigate('/vendor/login');
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="flex items-center space-x-4">
          <div className="p-4 bg-amber-100 rounded-3xl shadow-lg shadow-amber-100">
            <LayoutDashboard className="w-8 h-8 text-amber-600" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800 leading-tight">Vendor Dashboard</h1>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{vendorName}</p>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center space-x-2 text-slate-500 hover:text-red-500 font-bold transition-all px-4 py-2 rounded-xl hover:bg-red-50"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <div key={product.id} className="glass p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-48 h-48 rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-black text-slate-800">{product.name}</h2>
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-2xl transition-all ${
                    product.availability ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    <Power className={`w-4 h-4 ${product.availability ? 'animate-pulse' : ''}`} />
                    <span className="text-xs font-black uppercase tracking-wider">
                      {product.availability ? 'Active' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Price Edit */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center space-x-1">
                      <IndianRupee className="w-3 h-3" />
                      <span>Price (₹)</span>
                    </label>
                    <input 
                      type="number" 
                      value={product.price}
                      onChange={(e) => handleUpdate(product.id, { price: Number(e.target.value) })}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 font-black focus:border-amber-500 transition-all"
                    />
                  </div>

                  {/* Unit Edit */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center space-x-1">
                      <Tag className="w-3 h-3" />
                      <span>Price Unit</span>
                    </label>
                    <select 
                      value={product.priceUnit}
                      onChange={(e) => handleUpdate(product.id, { priceUnit: e.target.value })}
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 font-black focus:border-amber-500 transition-all appearance-none"
                    >
                      <option value="per kg">per kg</option>
                      <option value="per bag">per bag</option>
                      <option value="per bag (40kg)">per bag (40kg)</option>
                      <option value="per litre">per litre</option>
                      <option value="per quintal">per quintal</option>
                    </select>
                  </div>

                  {/* Availability Toggle */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center space-x-1">
                      <Power className="w-3 h-3" />
                      <span>Availability</span>
                    </label>
                    <button 
                      onClick={() => handleUpdate(product.id, { availability: !product.availability })}
                      className={`w-full py-4 rounded-2xl font-black transition-all border-2 ${
                        product.availability 
                        ? 'bg-green-500 text-white border-green-500 shadow-lg shadow-green-100' 
                        : 'bg-white text-red-500 border-red-100 shadow-lg shadow-red-50'
                      }`}
                    >
                      {product.availability ? 'Set Out of Stock' : 'Set Available'}
                    </button>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button 
                    onClick={() => handleSave(product.name)}
                    className="flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black shadow-2xl hover:bg-black active:scale-95 transition-all w-full md:w-auto justify-center"
                  >
                    <Save className="w-5 h-5" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
