import React, { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import FAQ from './pages/FAQPage/FAQ';
import LoginPage from './pages/LoginPage/LoginPage';
import { Provider } from 'react-redux';
import { initializeAuthListener } from './firebase/initializeAuthListener'; 
import store from './redux/store/store';
import DesignersList from "./pages/DesignersList/DesignersList"
import DesignersPage from "./pages/DesignersPage/DesignersPage"
import "./App.css";
import RegisterPage from './pages/RegiterPage/RegisterPage';
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {


  useEffect(() => {
    
    initializeAuthListener();
  },[])

  return (
    <>
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/designers" element={<DesignersList />} />
          <Route path="/designer" element={<DesignersPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </Provider>
    </>
  )
}

export default App;