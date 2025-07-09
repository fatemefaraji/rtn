import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Weblog</h3>
            <p className="text-sm">Your source for the latest in tech and web development.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Categories</a></li>
              <li><a href="#" className="hover:text-blue-400">About</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
            <p className="text-sm mb-3">Subscribe for updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-l text-gray-800 flex-grow"
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-r hover:bg-emerald-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Weblog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;