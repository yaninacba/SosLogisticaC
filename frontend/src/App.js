import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Usuarios from './components/Usuarios';
import Envios from './components/Envios';
import camioncito from './imagen/camioncito.jpg';
import CrearEnvio from './components/CrearEnvio';




function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <div className="image-container">
      <img src={camioncito} alt="Logo" className="centered-image" />
        </div>
 
      <Routes>
        <Route path="/" element={<Inicio />} index />
        <Route path="/Envios" element={<Envios />} />
        <Route path="/Usuarios" element={<Usuarios />}/> 
      
      </Routes>
    </div>
  </Router>

  );
}

export default App;
