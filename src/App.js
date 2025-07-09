import React from 'react';
import Home from './pages/home/Home.jsx';
import {Routes, Route} from "react-router-dom";
import AboutUS from './pages/aboutUs/AboutUS.jsx';
import Navbar from '../src/components/navbar/Navbar.jsx';
import ArticlePage from './pages/articlePage/ArticlePage.jsx';
import Categories from './pages/categories/Categories.jsx';
import Contact from './pages/contact/Contact.jsx';

function App() {
  return (
    <div className="font-sans">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}>
        
        </Route>
        <Route path='/about' element={<AboutUS/>}/>
        <Route path='/articlePage' element={<ArticlePage/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
