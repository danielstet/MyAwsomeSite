import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ProductPage from "./pages/ProductPage"; // Импортируем страницу продукта
import FAQ from './pages/FAQPage/FAQ';

import "./App.css";
import LoginPage from './pages/Login/LoginPage';
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;