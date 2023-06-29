import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Navbar from './components/Navbar';
import Vendedores from './components/Vendedores';
import Articulos from './components/Articulos';


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} index />
        <Route path="/Articulos" element={<Articulos />} />
        <Route path="/Vendedores" element={<Vendedores />} />
      
      
      </Routes>
    </div>
  </Router>

  );
}

export default App;
