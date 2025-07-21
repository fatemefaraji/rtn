import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../components/spinner/Spinner';
import { ThemeContext } from '../../context/ThemeContext';

function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios
      .get(`http://localhost:8000/articles?category=${category}`)
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('❌ Failed to load articles. Please try again later.');
        setLoading(false);
      });
  }, [category]);

  return (
    <div className={`min-h-screen py-16 px-6 ${
      isDark ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-10 text-center ${
          isDark ? 'text-emerald-300' : 'text-emerald-700'
        }`}>
          Articles in "{category}"
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <Spinner />
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

        {!loading && !error && (
          articles.length > 0 ? (
            <div className="space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={`/articles/${article.id}`}
                  className={`block p-6 rounded-xl shadow hover:shadow-lg transition
                    ${isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}
                >
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {article.excerpt}
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    By {article.author.name || article.author} on {new Date(article.date).toLocaleDateString()}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No articles found in this category.
            </p>
          )
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
