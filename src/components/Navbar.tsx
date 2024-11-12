import React, { useState } from 'react';
import { Menu, User, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCartClick = () => {
    // TODO: Implement cart functionality
    console.log('Cart clicked');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-12 w-auto" src="/logo.png" alt="تشيكن هاوس" />
            </Link>
            <div className="hidden md:mr-6 md:flex md:space-x-8">
              <Link to="/raw-chicken" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                دجاج طازج
                <ChevronDown className="mr-1 h-4 w-4" />
              </Link>
              <Link to="/subscription" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                الاشتراكات
              </Link>
              <Link to="/flavored" className="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                دجاج متبل
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-700 hover:text-gray-900">
              <User className="h-6 w-6" />
            </button>
            <CartButton onClick={handleCartClick} />
            <button
              className="mr-2 p-2 rounded-md text-gray-700 hover:text-gray-900 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/raw-chicken" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
              دجاج طازج
            </Link>
            <Link to="/subscription" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
              الاشتراكات
            </Link>
            <Link to="/flavored" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900">
              دجاج متبل
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}