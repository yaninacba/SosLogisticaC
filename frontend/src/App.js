import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Usuarios from './components/Usuarios';
import Envios from './components/Envios';



function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} index />
        <Route path="/Envios" element={<Envios />} />
        <Route path="/Usuarios" element={<Usuarios />} />
      
      
      </Routes>
    </div>
  </Router>

  );
}

export default App;
