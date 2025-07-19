import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import AboutUS from './pages/aboutUs/AboutUS.jsx';
import ArticlePage from './pages/articlePage/ArticlePage.jsx';
import Categories from './pages/categories/Categories.jsx';
import Contact from './pages/contact/Contact.jsx';
import CreateContent from './pages/createContent/CreateContent.jsx';

function App() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <Navbar />

      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-content" element={<CreateContent />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
