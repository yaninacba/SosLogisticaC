import React from 'react';

const ListadoVendedores = ({ lista }) => {
  
  return (
    <div className="container mt-3">
      <h1>Vendedores</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Sucursal</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item) => (
             <tr key={item.IdVendedores}>
              <td>{item.IdVendedores}</td>
              <td>{item.Nombre}</td>
              <td>{item.Apellido}</td>
              <td>{item.Sucursal}</td>
              <td>{(item.Activo) ? 'True' : 'False'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoVendedores;
