import React from 'react';


function CrearEnvio() {
  return (
    <div>
      <h4>Crear Envío</h4>
      <form className="row g-3">
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Destinatario</label>
          <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">Calle</label>
          <input type="text" className="form-control" id="validationDefault02" value="Otto" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationDefaultUsername" className="form-label">Numero</label>
          <div className="input-group">
            <input type="number" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
          </div>
        </div>
       
        <div className="col-md-3">
          <label htmlFor="validationDefault04" className="form-label">Barrio</label>
          <select className="form-select" id="validationDefault04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-3">
          <label htmlFor="validationDefault05" className="form-label">Codigo Postal</label>
          <input type="text" className="form-control" id="validationDefault05" required />
</div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default CrearEnvio;
