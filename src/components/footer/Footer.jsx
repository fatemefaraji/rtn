import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t shadow-inner mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-purple-500">Bloggy</h2>
          <p className="text-sm mt-1">Your daily dose of thoughts and stories.</p>
        </div>

        <div className="flex space-x-6 text-gray-500">
          <a href="#" className="hover:text-purple-500 transition">Privacy</a>
          <a href="#" className="hover:text-purple-500 transition">Terms</a>
          <a href="#" className="hover:text-purple-500 transition">Contact</a>
        </div>
      </div>
      <div className="text-sm text-center text-gray-400 pb-4">
        © {new Date().getFullYear()} Bloggy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
