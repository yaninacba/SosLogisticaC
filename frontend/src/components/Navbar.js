import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <Link to="/" style={{textDecoration:'none'}}>Inicio</Link> | <Link to="/Envios" style={{textDecoration:'none'}}>Envios</Link> | <Link to="/Usuarios" style={{textDecoration:'none'}}>Usuarios</Link>
    </nav>
  );
}
