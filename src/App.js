import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.jsx';
import AboutUS from './pages/aboutUs/AboutUS.jsx';
import Navbar from '../src/components/navbar/Navbar.jsx';
import ArticlePage from './pages/articlePage/ArticlePage.jsx';
import Categories from './pages/categories/Categories.jsx';
import Contact from './pages/contact/Contact.jsx';
import CreateContent from './pages/createContent/CreateContent.jsx';

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUS />} />
        <Route path='/articles/:id' element={<ArticlePage />} /> {/* تغییر این خط */}
        <Route path='/categories' element={<Categories />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/create-content' element={<CreateContent/>}/>
      </Routes>
    </div>
  );
}

export default App;