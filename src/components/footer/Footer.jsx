import React from 'react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-purple-50 border-t border-purple-100 mt-12">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Brand */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-purple-600">Bloggy</h2>
          <p className="text-sm text-gray-500 mt-1">Thoughts, stories & ideas — made simple.</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm text-gray-600 mb-6 md:mb-0">
          <a href="#" className="hover:text-purple-500 transition">Privacy</a>
          <a href="#" className="hover:text-purple-500 transition">Terms</a>
          <a href="#" className="hover:text-purple-500 transition">Contact</a>
        </div>


        {/* Socials */}
        <div className="flex space-x-4 text-purple-500 text-xl">
          <a href="#" className="hover:text-purple-700 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-purple-700 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-purple-700 transition"><FaGithub /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-sm text-gray-400 text-center pb-6">
        © {new Date().getFullYear()} Bloggy. Built with ❤ by You.
      </div>
    </footer>
  );
};

export default Footer;
