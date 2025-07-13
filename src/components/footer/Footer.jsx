import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-gray-200 pt-12 pb-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Weblog</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              Your source for the latest insights in technology, programming, and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">🏠 Home</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">📂 Categories</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">ℹ️ About</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">📞 Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-3">Subscribe to receive our latest updates!</p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none w-full"
              />
              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-lg transition-all duration-300">
                <FaPaperPlane className="text-sm" /> Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-emerald-700 mt-12 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Weblog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
