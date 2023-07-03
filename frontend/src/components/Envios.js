import React, {  useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import ListadoEnvios from './ListadoEnvios'
import BuscarEnvio from './BuscarEnvio';
import CrearEnvio from './CrearEnvio';


const Envios = () => {
  const { register, handleSubmit } = useForm();
  
  const [lista, setLista] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:4000/api/envios', {
        params: data
      });
      
      console.log(response.data)

      setLista(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const eliminarEnvio = async (id) => {
    try {
      const confirmed = window.confirm('¿Estás seguro de eliminar este envío?');
      if (confirmed) {
        await axios.delete(`http://localhost:4000/api/envios/${id}`);
        const updatedList = lista.filter((envio) => envio.id !== id);
        setLista(updatedList);
      }
    } catch (error) {
      console.error(error);
    }
  };

 



  return (
    <div className="container">
      <h1>Ruta Programada de Envios</h1>
      <div className="card mb-3">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Calle:</label>
              <input type="text" className="form-control" {...register('calle')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Numero:</label>
              <input type="integer" className="form-control" {...register('numero')} />
            </div>
            <div className="mb-3">
              <label className="form-label">Id:</label>
              <input type="integer" className="form-control" {...register('idenvio')} />
            </div>
            <button type="submit" className="btn btn-primary">Buscar</button> 
          <div>
          </div>
          </form>
        </div>
        {lista && <ListadoEnvios lista={lista} eliminarEnvio={eliminarEnvio} />}
        </div>
    </div>
  );
};

export default Envios;
