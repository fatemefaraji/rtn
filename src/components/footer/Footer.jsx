import React, { useContext } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext'; // مسیر رو مطابق پروژه خودت تنظیم کن

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={`pt-12 pb-8 mt-16
      ${isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-gray-300' 
        : 'bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* About */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>
              Weblog
            </h3>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              Your source for the latest insights in technology, programming, and web development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'Categories', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`transition-colors hover:${isDark ? 'text-emerald-400' : 'text-emerald-400'}`}
                  >
                    {item === 'Home' ? '🏠 ' : item === 'Categories' ? '📂 ' : item === 'About' ? 'ℹ️ ' : '📞 '}
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>
              Newsletter
            </h3>
            <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-300'}`}>
              Subscribe to receive our latest updates!
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none w-full"
              />
              <button
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-r-lg transition-all duration-300"
              >
                <FaPaperPlane className="text-sm" /> Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className={`border-t mt-12 pt-6 text-center text-sm 
          ${isDark ? 'border-gray-700 text-gray-400' : 'border-emerald-700 text-gray-400'}`}>
          <p>&copy; {new Date().getFullYear()} Weblog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
