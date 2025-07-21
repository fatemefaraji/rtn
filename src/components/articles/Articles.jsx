import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

function Articles({ article }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full
      ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}
    >
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          {article.title}
        </h3>
        
        <div className="flex items-center mb-3">
          <img 
            src={article.author.avatar} 
            alt={article.author.name} 
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {article.author.name}
          </span>
        </div>
        
        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
          {article.excerpt}
        </p>
        
        <div className={`flex justify-between text-sm mb-3 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <span>{article.reading_time} read</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
        
        <span className={`font-medium cursor-pointer
          ${isDark ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'}`}>
          Read More →
        </span>
      </div>
    </div>
  );
}

export default Articles;
