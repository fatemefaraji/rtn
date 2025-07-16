import React from 'react';

function Articles({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
        
        <div className="flex items-center mb-3">
          <img 
            src={article.author.avatar} 
            alt={article.author.name} 
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-600">{article.author.name}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span>{article.reading_time} read</span>
          <span>{new Date(article.date).toLocaleDateString()}</span>
        </div>
        
        <span className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
          Read More →
        </span>
      </div>
    </div>
  );
}

export default Articles;