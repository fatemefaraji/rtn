import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; 

function Contact() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`max-w-2xl mx-auto px-6 py-14 rounded-xl shadow-xl
      ${isDark ? 'bg-gray-900 text-gray-200' : 'bg-gradient-to-br from-green-50 via-white to-green-100 text-green-900'}
    `}>
      <h1 className={`text-4xl font-extrabold text-center mb-4 
        ${isDark ? 'text-emerald-400' : 'text-green-700'}`}>
        Contact Us
      </h1>
      <p className={`text-lg text-center mb-10 
        ${isDark ? 'text-gray-300' : 'text-green-900'}`}>
        Have a question, suggestion, or just want to say hi? We’d love to hear from you!
      </p>

      <div className={`p-6 rounded-2xl shadow-lg border
        ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-green-100'}
      `}>
        <div className="mb-6">
          <p className={`mb-1 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>📧 Email:</p>
          <a
            href="mailto:lenafaraji.dev@gmail.com"
            className={`hover:underline transition-colors duration-200 
              ${isDark ? 'text-emerald-400 hover:text-emerald-600' : 'text-green-600 hover:text-green-800'}`}
          >
            lenafaraji.dev@gmail.com
          </a>
        </div>

        <div className="mb-6">
          <p className={`mb-1 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>💼 LinkedIn:</p>
          <a
            href="https://linkedin.com/in/lenafaraji"
            className={`hover:underline transition-colors duration-200
              ${isDark ? 'text-emerald-400 hover:text-emerald-600' : 'text-green-600 hover:text-green-800'}`}
          >
            linkedin.com/in/lenafaraji
          </a>
        </div>

        <div>
          <p className={`mb-1 font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>🐦 Twitter:</p>
          <a
            href="https://x.com/fatemefarajii"
            className={`hover:underline transition-colors duration-200
              ${isDark ? 'text-emerald-400 hover:text-emerald-600' : 'text-green-600 hover:text-green-800'}`}
          >
            x.com/fatemefarajii
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
