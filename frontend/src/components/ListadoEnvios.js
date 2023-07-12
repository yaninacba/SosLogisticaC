import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes,Switch } from 'react-router-dom';
import BuscarEnvio from './BuscarEnvio';
import CrearEnvio from './CrearEnvio';




const ListadoEnvios = ({ lista, eliminarEnvio}) => {
  const [mostrarBuscarEnvio, setMostrarBuscarEnvio] = useState(false);
  const [envioSeleccionado, setEnvioSeleccionado] = useState(null);  
 
 
  const ActualizarEnvio = (idEnvio) => {
    setMostrarBuscarEnvio(true);
    setEnvioSeleccionado(idEnvio);
  };

 



  return (
  
    <div className="container mt-3">
      <h2 style={{textAlign:'center'}}>Listado </h2>

      <div>
    
   
      </div>
    
     
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Calle</th>
            <th>Numero</th>
            <th>CPostal</th>
            <th>Fecha Alta</th>
            <th>Zona</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
            <tr key={item.IdEnvio}>
              <td>{item.IdEnvio}</td>
              <td>{item.Calle}</td>
              <td>{item.Numero}</td>
              <td>{item.CPostal}</td>
              <td>{item.FechaAlta}</td>
              <td>{item.Zona}</td>
              <td>
                <button onClick={() => eliminarEnvio(item.IdEnvio)}>Eliminar</button>
                <button onClick={() => ActualizarEnvio(item.IdEnvio)}>Actualizar</button>
              {mostrarBuscarEnvio && envioSeleccionado === item.IdEnvio && (
                <BuscarEnvio idEnvio={item.IdEnvio} />
              )}
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
 
    </div>

 
  );
};

export default ListadoEnvios;
