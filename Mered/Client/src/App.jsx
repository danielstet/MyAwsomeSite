import React from 'react';
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import MainPage from "./pages/MainPage"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./App.css"
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

function App() {
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
