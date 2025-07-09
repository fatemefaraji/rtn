import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">Weblog</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link   to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link  to="categories" className="text-gray-700 hover:text-blue-600">Categories</Link>
            <Link  to="about" className="text-gray-700 hover:text-blue-600">About</Link>
            <Link  to="contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
          
          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-2">
            <Link   to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link   to="categories"  className="block py-2 text-gray-700 hover:text-blue-600">Categories</Link>
            <Link   to="about" className="block py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link   to="contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;