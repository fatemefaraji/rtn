import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-indigo-600">Weblog</a>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Categories</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
          <a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
        </div>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Categories</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">About</a>
          <a href="#" className="block py-2 text-gray-700 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;