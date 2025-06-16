import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />

      <main className="p-8 text-center text-gray-700">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog!</h1>
      <p className="text-lg">Your favorite place to read & share thoughts.</p>
    </main>

    <Footer />
    </div>
  );
};

export default Home;
