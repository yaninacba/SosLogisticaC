import React from 'react';
import { Link } from 'react-router-dom';
import CrearEnvio from './CrearEnvio';
import Envios from './Envios';

function MenuEnvios() {
  return (
   
    <div className="d-flex flex-column align-items-center justify-content-center mt-5">
      <Link to="/CrearEnvio" type="button" className="btn btn-primary btn-lg mb-2"  >Crear Envío</Link>
      <Link to="/Envios "type="button" className="btn btn-primary btn-lg mb-2">Consultar Envíos</Link>
     
    </div>

  );
}

export default MenuEnvios;
