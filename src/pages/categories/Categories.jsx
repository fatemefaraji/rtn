import React from 'react';

const dummyCategories = [
  'JavaScript',
  'React',
  'Next.js',
  'TypeScript',
  'UI/UX Design',
  'APIs',
];

function Categories() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-center text-emerald-700 mb-12">
        Explore Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dummyCategories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-center text-gray-800 font-semibold text-lg hover:bg-emerald-50 hover:shadow-lg transition duration-300 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
