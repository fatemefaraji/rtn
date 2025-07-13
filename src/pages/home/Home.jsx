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
        setError('❌ Failed to load articles. Please try again later.');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
      
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-center text-emerald-700 mb-10">
          📰 Latest Articles
        </h1>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-emerald-500 border-dashed rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-xl text-center shadow-md mb-6">
            {error}
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              to={`/articles/${article.slug || article.id}`}
              key={article.id}
              className="transform transition-transform duration-300 hover:scale-105"
            >
              <Articles article={article} />
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
