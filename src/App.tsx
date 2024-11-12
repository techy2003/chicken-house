import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RawChicken from './pages/RawChicken';
import Subscription from './pages/Subscription';
import FlavoredChicken from './pages/FlavoredChicken';
import CartModal from './components/CartModal';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white" dir="rtl">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/raw-chicken" element={<RawChicken />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/flavored" element={<FlavoredChicken />} />
          </Routes>
          <CartModal />
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;