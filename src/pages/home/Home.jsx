import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Articles from '../../components/articles/Articles';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 font-sans">
      <Navbar />

      <header className="text-center py-16 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 animate-fade-in">
          Discover Stories That Matter
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Dive into curated content, expert opinions, and community insights.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform p-4"
            >
              <Articles />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
