import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const categories = [
  'React',
  'Next.js',
  'JavaScript',
  'Node.js',
  'AI',
  'CSS',
  'Frontend',
  'Backend',
];

function Categories() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen py-16 px-6 ${
      isDark ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-5xl mx-auto">
        <h1 className={`text-3xl sm:text-4xl font-bold text-center mb-10 ${
          isDark ? 'text-emerald-300' : 'text-emerald-700'
        }`}>
          Browse by Category
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={index} to={`/category/${category}`}>
              <div className={`rounded-xl shadow-md p-6 text-center cursor-pointer transition
                hover:bg-emerald-100 dark:hover:bg-emerald-700
                ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <span className={`text-lg font-semibold ${
                  isDark ? 'text-gray-100' : 'text-gray-700'
                }`}>
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
