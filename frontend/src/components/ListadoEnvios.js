import React from 'react';


const ListadoEnvios = ({ lista, eliminarEnvio , actualizarEnvio}) => {
 

  
  return (
    <div className="container mt-3">
      <h1>Envios</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Calle</th>
            <th>Numero</th>
            <th>CPostal</th>
            <th>Fecha Alta</th>
            <th>Zona</th>
        
           
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
             </td>
             <td>
              <button onClick={() => actualizarEnvio(item.IdEnvio)}>Actualizar></button>
             </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoEnvios;
