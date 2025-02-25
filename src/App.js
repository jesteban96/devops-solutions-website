import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { useEffect } from "react";
import Footer from './components/Footer/Footer';

const App = () => {
    useEffect(() => {
      document.title = "DevopsSolutions";
    }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas aquí */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
