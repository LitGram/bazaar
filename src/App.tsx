import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VendorRegister from './pages/VendorRegister';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import VendorLogin from './pages/VendorLogin';
import VendorDashboard from './pages/VendorDashboard';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './context/ToastContext';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <Router>
          <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar />
            <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-8 md:pt-12 flex-grow w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<VendorRegister />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/vendor/login" element={<VendorLogin />} />
                <Route path="/vendor/dashboard" element={<VendorDashboard />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ToastProvider>
    </LanguageProvider>
  );
}

export default App;
