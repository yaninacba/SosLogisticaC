import React from "react";
export default function BuscarEnvio ({Calle, setCalle, Numero, setNumero, Buscar, Agregar}) {

    return (
    <form name="FormBusqueda" onSubmit={(e)=> e.preventDefault()}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Calle:</label>
          </div>
          <div className="col-sm-8 col-md-4">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCalle(e.target.value)}
              value={Calle}
              maxLength="55"
              autoFocus
            />
          </div>
          <div className="col-sm-4 col-md-2">
            <label className="col-form-label">Numero:</label>
          </div>
          <div className="col-sm-8 col-md-4">
          <input
              type="number"
              className="form-control"
              onChange={(e) => setNumero(e.target.value)}
              value={Numero}
              maxLength="55"
              autoFocus
            />
          </div>
        </div>
  
        <hr />
  
        {/* Botones */}
        <div className="row">
          <div className="col text-center botones">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => Buscar(1) }
          >
            <i className="fa fa-search"> </i> Buscar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => Agregar() }
          >
            <i className="fa fa-plus"> </i> Agregar
          </button>
          </div>
        </div>
      </div>
    </form>
    )
  };