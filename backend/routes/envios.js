const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");


router.get("/api/envios", async function (req, res) {
  // consulta de articulos con filtros y paginacion

  let where = {};
  if (req.query.calle != undefined && req.query.calle !== "") {
    where.Calle = {
      [Op.like]: "%" + req.query.calle + "%",
    };
  }
  if (req.query.numero != undefined && req.query.numero !== "") {
    where.Numero = {
      [Op.like]: "%" + req.query.numero + "%",
    };
  }
  if (req.query.idenvio != undefined && req.query.idenvio !== "") {
    where.IdEnvio = {
      [Op.like]: "%" + req.query.idenvio + "%",
    };
  }

  //post crea un envio
  router.post("/api/envios/", async (req, res) => {
    
    try {
      let data = await db.envios.create({
        Calle: req.body.Calle,
        Numero: req.body.Numero,
        CPostal: req.body.CPostal,
        FechaAlta: req.body.FechaAlta,
        Zona: req.body.Zona,
        
      });
      res.status(200).json(data.dataValues); // devolvemos el registro agregado!
    } catch (err) {
      if (err instanceof ValidationError) {
        // si son errores de validacion, los devolvemos
        let messages = "";
        err.errors.forEach(
          (x) => (messages += (x.path ?? "campo") + ": " + x.message + "\n")
        );
        res.status(400).json({ message: messages });
      } else {
        // si son errores desconocidos, los dejamos que los controle el middleware de errores
        throw err;
      }
    }
  });

  //put edita un envio
  router.put("/api/envios/:id", async (req, res) => {

    try {
      let item = await db.articulos.findOne({
        attributes: [
          "IdEnvio",
          "Calle",
          "Numero",
          "CPostal",
          "FechaAlta",
          "Zona",
        ],
        where: { IdEnvio: req.params.id },
      });
      if (!item) {
        res.status(404).json({ message: "Envio  no encontrado" });
        return;
      }
      item.Calle = req.body.Calle;
      item.Numero = req.body.Numero;
      item.CPostal = req.body.CPostal;
      item.FechaAlta = req.body.FechaAlta;
      item.Zona = req.body.Zona;
      await item.save();
  
     
      res.sendStatus(204);
    } catch (err) {
      if (err instanceof ValidationError) {
        // si son errores de validacion, los devolvemos
        let messages = "";
        err.errors.forEach((x) => (messages += x.path + ": " + x.message + "\n"));
        res.status(400).json({ message: messages });
      } else {
        // si son errores desconocidos, los dejamos que los controle el middleware de errores
        throw err;
      }
    }
  });

//borrar un envio
  router.delete("/api/envios/:id", async (req, res) => {

  
    let bajaFisica = false;
  
    if (bajaFisica) {
      // baja fisica
      let filasBorradas = await db.envios.destroy({
        where: { IdEnvio: req.params.id },
      });
      if (filasBorradas == 1) res.sendStatus(200);
      else res.sendStatus(404);
    } else {
      // baja logica
      try {
        let data = await db.sequelize.query(
          "UPDATE envios SET Activo = case when Activo = 1 then 0 else 1 end WHERE IdEnvio = :IdEnvio",
          {
            replacements: { IdEnvio: +req.params.id },
          }
        );
        res.sendStatus(200);
      } catch (err) {
        if (err instanceof ValidationError) {
          // si son errores de validacion, los devolvemos
          const messages = err.errors.map((x) => x.message);
          res.status(400).json(messages);
        } else {
          // si son errores desconocidos, los dejamos que los controle el middleware de errores
          throw err;
        }
      }
    }
  });
  
  


  
  


  let items = await db.envios.findAndCountAll({
    attributes: [
      "IdEnvio",
      "Calle",
      "Numero",
      "CPostal",
      "FechaAlta",
      "Zona",
    ],
    order: [["Zona", "ASC"]],
    where,
  });

  res.json(items.rows);
});




module.exports = router;
