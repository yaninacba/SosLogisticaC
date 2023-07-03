import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Usuarios from './components/Usuarios';
import Envios from './components/Envios';

=======
import Vendedores from './components/Vendedores';
import Articulos from './components/Articulos';
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} index />
<<<<<<< HEAD
        <Route path="/Envios" element={<Envios />} />
        <Route path="/Usuarios" element={<Usuarios />} />
=======
        <Route path="/Articulos" element={<Articulos />} />
        <Route path="/Vendedores" element={<Vendedores />} />
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
      
      
      </Routes>
    </div>
  </Router>

  );
}

export default App;
