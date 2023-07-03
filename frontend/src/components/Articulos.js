import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ListadoArticulos from './ListadoArticulos'

const Articulos = () => {
  const { register, handleSubmit } = useForm();
  
  const [lista, setLista] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:4000/api/articulos', {
        params: data
      });
      
      console.log(response.data)

      setLista(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleEliminar = async (articuloId) => {
    try {
      const articuloId = document.getElementById('eliminarArt').value;
      const response = await axios.delete(`http://localhost:4000/api/articulos/${articuloId}`);
      console.log(response.data);
      cargarArticulos();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEditar = async (articuloId) => {
    try {
     
      console.log("Editar articulo");
    } catch (error) {
      console.error(error);
    }
  };
  const cargarArticulos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/articulos');
      setLista(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="container">
      <h1>Consulta Articulos</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit" id="eliminarArt" className="btn btn-primary">Eliminar Articulo</button>
          <button type="submit" id="editarArt" className="btn btn-primary">Editar Articulo</button>
          </div>
          </form>
         
        </div>
        
      </div>
      {lista && <ListadoArticulos lista={lista} />}
    </div>
  );
};

export default Articulos;
