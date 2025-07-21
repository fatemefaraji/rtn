import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/home/Home.jsx';
import AboutUS from './pages/aboutUs/AboutUS.jsx';
import ArticlePage from './pages/articlePage/ArticlePage.jsx';
import Categories from './pages/categories/Categories.jsx';
import Contact from './pages/contact/Contact.jsx';
import CreateContent from './pages/createContent/CreateContent.jsx';
import Login from './pages/login/Login.jsx';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx';

import { ThemeContext } from './context/ThemeContext';
import CategoryPage from './pages/categories/CategoryPage.jsx';

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`font-sans min-h-screen
      ${isDark ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar />

      <main className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-content" element={<ProtectedRoute><CreateContent /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
