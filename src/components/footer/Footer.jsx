import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Weblog</h3>
          <p className="text-sm">Your source for the latest in tech and web development.</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Categories</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..." /></svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Newsletter</h3>
          <p className="text-sm mb-4">Subscribe for weekly updates.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Weblog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;