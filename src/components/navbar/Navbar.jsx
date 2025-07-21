import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = (
    <>
      <Link to="/" className="hover:text-emerald-500 transition">Home</Link>
      <Link to="/categories" className="hover:text-emerald-500 transition">Categories</Link>
      <Link to="/about" className="hover:text-emerald-500 transition">About</Link>
      <Link to="/contact" className="hover:text-emerald-500 transition">Contact</Link>
      {user && (
        <Link to="/create-content" className="hover:text-emerald-500 transition">Create Post</Link>
      )}
    </>
  );

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">MyBlog</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-800 dark:text-gray-100 text-sm font-medium">
          {menuItems}
          <button
            onClick={toggleTheme}
            className="px-2 py-1 border rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          {user ? (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="hover:text-emerald-500 transition">Login</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-white text-2xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium text-gray-800 dark:text-gray-100">
          {menuItems}
          <button
            onClick={toggleTheme}
            className="block w-full text-left px-2 py-1 border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          {user ? (
            <button
              onClick={handleLogout}
              className="block w-full text-left text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="block hover:text-emerald-500 transition">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
