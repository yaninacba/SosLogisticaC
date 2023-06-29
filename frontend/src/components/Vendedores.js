import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ListadoVendedores from './ListadoVendedores'

const Vendedores = () => {
  const { register, handleSubmit } = useForm();
  
  const [lista, setLista] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:4000/api/vendedores', {
        params: data
      });
      
      console.log(response.data)

      setLista(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  const handleEliminarClick = async (vendedorId) => {
    try {
      const vendedorId = document.getElementById('eliminarV').value;
      const response = await axios.delete(`http://localhost:4000/api/vendedores/${vendedorId}`);
      console.log(response.data);
      cargarVendedores();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditarClick = async (vendedorId) => {
    try {
      console.log("Editar vendedor");
    } catch (error) {
      console.error(error);
    }
  };

  const cargarVendedores = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/vendedores');
      setLista(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Consulta Vendedores</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Id:</label>
              <input type="integer" className="form-control" {...register('idvendedores')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <input type="text" className="form-control" {...register('nombre')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Activo:</label>
              <select className="form-select" {...register('activo')}>
                <option value="">Todos</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button>
         
          <div>
          <button type="submit" id="eliminarV" className="btn btn-primary">Eliminar Articulo</button>
          <button type="submit" id="editarV" className="btn btn-primary">Editar Articulo</button>
          </div>
          
          </form>
        </div>
      </div>
      {lista && <ListadoVendedores lista={lista} />}
    </div>
  );
};

export default Vendedores;
