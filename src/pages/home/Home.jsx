import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Articles from '../../components/articles/Articles';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("http://localhost:8000/articles")
      .then((result) => {
        console.log("API Response:", result.data);
        setArticles(Array.isArray(result.data) ? result.data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
        setError(error.response?.data?.message || 'Failed to load articles');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 text-gray-800 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">
          Latest Articles
        </h1>
        {loading ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 animate-pulse">
                <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
                <div className="mt-4 h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="mt-4 flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div className="ml-2 h-4 bg-gray-200 rounded w-1/3"></div>
                </div>
                <div className="mt-4 h-4 bg-gray-200 rounded w-full"></div>
                <div className="mt-2 h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center text-red-600 text-lg">{error}</div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Articles key={article.id} article={article} index={index} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;