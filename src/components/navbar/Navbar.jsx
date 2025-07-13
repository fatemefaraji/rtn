import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-extrabold text-emerald-700">
            Weblog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-base font-medium">
            <Link to="/" className="text-gray-700 hover:text-emerald-600 transition duration-200">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-emerald-600 transition duration-200">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-emerald-600 transition duration-200">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-emerald-600 transition duration-200">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-emerald-600 transition">Home</Link>
            <Link to="/categories" className="block text-gray-700 hover:text-emerald-600 transition">Categories</Link>
            <Link to="/about" className="block text-gray-700 hover:text-emerald-600 transition">About</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-emerald-600 transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
