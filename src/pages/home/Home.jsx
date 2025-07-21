import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import Articles from '../../components/articles/Articles';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import Spinner from "../../components/spinner/Spinner";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isDark } = useContext(ThemeContext);

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
    <div className={`min-h-screen flex flex-col
      ${isDark 
        ? 'bg-gray-900 text-gray-200' 
        : 'bg-gradient-to-br from-emerald-50 via-white to-emerald-100 text-gray-900'}
    `}>

      <main className="flex-grow container mx-auto px-4 pt-6 pb-12">
  <h1 className={`text-4xl font-extrabold text-center mb-4
    ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
          📰 Latest Articles
        </h1>

        {loading && (
          <div className="flex justify-center py-12">
            <Spinner/>
            <div className={`w-10 h-10 border-4 rounded-full animate-spin
              ${isDark 
                ? 'border-emerald-400 border-t-transparent' 
                : 'border-emerald-500 border-t-transparent border-dashed'}`}>
            </div>
          </div>
        )}

        {error && (
          <div className={`px-6 py-4 rounded-xl text-center shadow-md mb-6 border
            ${isDark 
              ? 'bg-red-700 border-red-600 text-red-200' 
              : 'bg-red-100 border-red-400 text-red-700'}`}>
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
