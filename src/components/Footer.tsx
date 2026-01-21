import React from 'react';
import { ShoppingBasket, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBasket className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">FreshMart</span>
            </div>
            <p className="text-gray-400">
              Your trusted neighborhood grocery store, serving fresh quality products since 2008.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-200" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-200" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-green-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Products</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors duration-200">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Fresh Fruits</span></li>
              <li><span className="text-gray-400">Vegetables</span></li>
              <li><span className="text-gray-400">Dairy Products</span></li>
              <li><span className="text-gray-400">Bakery Items</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>123 Fresh Street</p>
              <p>Green Valley, GV 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@freshmart.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FreshMart. All rights reserved. Built with care for our community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;