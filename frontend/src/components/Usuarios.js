import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import BuscarUsuario from './BuscarUsuario';
import CrearUsuario from './CrearUsuario';

import ListadoUsuarios from './ListadoUsuarios';

const Usuarios = () => {
  const { register, handleSubmit } = useForm();
  
  const [lista, setLista] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:4000/api/usuarios', {
        params: data
      });
      
      console.log(response.data)

      setLista(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarUsuario = async (id) => {
    try {
      const confirmed = window.confirm('¿Estás seguro de eliminar el usuario?');
      if (confirmed) {
        await axios.delete(`http://localhost:4000/api/usuarios/${id}`);
        const updatedList = lista.filter((envio) => usuario.id !== id);
        setLista(updatedList);
      }
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div className="container">
      <h1>Usuarios</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Id:</label>
              <input type="integer" className="form-control" {...register('idusuario')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input type="text" className="form-control" {...register('nombre')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido:</label>
              <input type="text" className="form-control" {...register('apellido')} />
            </div>
           
            <button type="submit" className="btn btn-primary">Buscar</button>
         
          
          
          </form>
        </div>
      </div>
      {lista && <ListadoUsuarios lista={lista} />}
    </div>
  );
};

export default Usuarios;
