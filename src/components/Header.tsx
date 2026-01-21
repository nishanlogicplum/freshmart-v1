import React, { useState } from 'react';
import { Menu, X, ShoppingBasket } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ShoppingBasket className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">FreshMart</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;