import React from "react";
import { useForm } from "react-hook-form";

export default function CrearEnvio({
  AccionABMC,
  Item,
  Grabar,
  Volver,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isSubmitted },
  } = useForm({ values: Item });

  const onSubmit = (data) => {
    Grabar(data);
  };
  if (!Item) return null;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">

        <fieldset disabled={AccionABMC === "C"}>

          {/* campo nombre */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Nombre">
                Calle<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="text"
                {...register("Calle", {
                  required: { value: true, message: "Calle es obligatorio" },
                  minLength: {
                    value: 4,
                    message: "Calle debe tener al menos 4 caracteres",
                  },
                  maxLength: {
                    value: 55,
                    message: "Calle debe tener como máximo 30 caracteres",
                  },
                })}
                autoFocus
                className={
                  "form-control " + (errors?.Calle ? "is-invalid" : "")
                }
              />
              {errors?.Calle && touchedFields.Calle && (
                <div className="invalid-feedback">
                  {errors?.Calle?.message}
                </div>
              )}
            </div>
          </div>

          {/* campo Numero */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Precio">
                Numero<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number" step=".01"
                {...register("Precio", {
                  required: { value: true, message: "Numero es requerido" },
                  min: {
                    value: 0.01,
                    message: "Numero debe ser mayor a 0",
                  },
                  max: {
                    value: 99999.99,
                    message: "Numero debe ser menor o igual a 99999.99",
                  },
                })}
                className={
                  "form-control " + (errors?.Numero ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.Numero?.message}</div>
            </div>
          </div>

          {/* campo Codigo postal */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Stock">
                Codigo postal<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number"
                {...register("CPostal", {
                  required: { value: true, message: "Codigo Postal es requerido" },
                  min: {
                    value: 0,
                    message: "Codigo postal debe ser mayor a 0",
                  },
                  max: {
                    value: 99999,
                    message: "Cpostal debe ser menor o igual a 10000",
                  },
                })}
                className={
                  "form-control " + (errors?.CPostal ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.CPostal?.message}</div>
            </div>
          </div>


          {/* campo FechaAlta */}
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="FechaAlta">
                Fecha Alta<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="date"
                {...register("FechaAlta", {
                  required: { message: "Fecha Alta es requerido" }
                })}
                className={
                  "form-control " + (errors?.FechaAlta ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">
                {errors?.FechaAlta?.message}
              </div>
            </div>
            <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Precio">
                Numero<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number" step=".01"
                {...register("Precio", {
                  required: { value: true, message: "Numero es requerido" },
                  min: {
                    value: 0.01,
                    message: "Numero debe ser mayor a 0",
                  },
                  max: {
                    value: 99999.99,
                    message: "Numero debe ser menor o igual a 99999.99",
                  },
                })}
                className={
                  "form-control " + (errors?.Numero ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.Numero?.message}</div>
            </div>
          </div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-md-3 offset-md-1">
              <label className="col-form-label" htmlFor="Precio">
                Zona<span className="text-danger">*</span>:
              </label>
            </div>
            <div className="col-sm-8 col-md-6">
              <input
                type="number" step=".01"
                {...register("Zona", {
                  required: { value: true, message: "Zona es requerido" },
                  min: {
                    value: 0.01,
                    message: "Zona debe ser mayor a 0",
                  },
                  max: {
                    value: 99999.99,
                    message: "Zona debe ser menor o igual a 99999.99",
                  },
                })}
                className={
                  "form-control " + (errors?.Zona ? "is-invalid" : "")
                }
              />
              <div className="invalid-feedback">{errors?.Zona?.message}</div>
            </div>
          </div>


        </fieldset>

        {/* Botones Grabar, Cancelar/Volver' */}
        <hr />
        <div className="row justify-content-center">
          <div className="col text-center botones">
            {AccionABMC !== "C" && (
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> Grabar
              </button>
            )}
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => Volver()}
            >
              <i className="fa fa-undo"></i>
              {AccionABMC === "C" ? " Volver" : " Cancelar"}
            </button>
          </div>
        </div>

        {/* texto: Revisar los datos ingresados... */}
        {!isValid && isSubmitted && (
          <div className="row alert alert-danger mensajesAlert">
            <i className="fa fa-exclamation-sign"></i>
            Revisar los datos ingresados...
          </div>
        )}

      </div>
    </form>
  );
}
