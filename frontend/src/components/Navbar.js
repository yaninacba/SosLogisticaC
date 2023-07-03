import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<<<<<<< HEAD
    <nav class="navbar navbar-dark bg-dark">
      <Link to="/" style={{textDecoration:'none'}}>Inicio</Link> | <Link to="/Envios" style={{textDecoration:'none'}}>Envios</Link> | <Link to="/Usuarios" style={{textDecoration:'none'}}>Usuarios</Link>
=======
    <nav>
      <Link to="/">Inicio</Link> | <Link to="/Articulos">Articulos</Link> | <Link to="/Vendedores">Vendedores</Link>
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
    </nav>
  );
}
