import React from 'react';

const ListadoUsuarios = ({ lista , eliminarUsuario, actualizarUsuario}) => {
  
  return (
    <div className="container mt-3">
      <h1>Usuarios</h1>
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
             <tr key={item.IdUsuario}>
              <td>{item.IdUsuario}</td>
              <td>{item.Nombre}</td>
              <td>{item.Apellido}</td>
              <td>{item.Sucursal}</td>
              <td>{(item.Activo) ? 'True' : 'False'}</td>
              <td>
              <button onClick={() => eliminarUsuario(item.IdUsuario)}>Eliminar</button>
              </td>
              <td>
              <button onClick={() => actualizarUsuario(item.IdUsuario)}>Actualizar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoUsuarios;
