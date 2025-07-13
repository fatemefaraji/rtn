import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Articles from '../../components/articles/Articles';
import { Link } from 'react-router-dom';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/articles")
      .then((result) => {
        setArticles(result.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load articles');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col  bg-emerald-400 ">
      
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Latest Articles
        </h1>
        
        {loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Loading articles...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
            {error}
          </div>
        )}
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(article => (
            <Link>
            <Articles key={article.id} article={article} />
            </Link>
            
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;