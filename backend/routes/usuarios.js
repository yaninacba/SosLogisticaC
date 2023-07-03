const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/usuarios", async function (req, res) {
  // consulta de usuarios con filtros y paginacion

  let where = {};
  if (req.query.idusuario != undefined && req.query.idusuario !== "") {
    where.IdUsuario = {
      [Op.like]: "%" + req.query.idusuario + "%",
    };
  }
  if (req.query.nombre != undefined && req.query.nombre !== "") {
    where.Nombre = {
      [Op.like]: "%" + req.query.nombre + "%",
    };
  }
  if (req.query.activo != undefined && req.query.activo !== "") {
    // true o false en el modelo, en base de datos es 1 o 0
    // convierto el string a booleano
    where.Activo = req.query.activo === "true";
  }

//post crea un usuario
router.post("/api/usuarios/", async (req, res) => {
    
  try {
    let data = await db.usuarios.create({
      Nombre: req.body.Nombre,
      Apellido: req.body.Apellido,
      Sucursal:req.body.Sucursal,
      Activo: req.body.Activo,
    
      
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

//put edita un usuario
router.put("/api/usuario/:id", async (req, res) => {

  try {
    let item = await db.usuarios.findOne({
      attributes: [
        "IdUsuario",
        "Nombre",
        "Apellido",
        "Sucursal",
        "Activo",
        
      ],
      where: { IdUsuario: req.params.id },
    });
    if (!item) {
      res.status(404).json({ message: "Usuario  no encontrado" });
      return;
    }
    item.Nombre = req.body.Nombre;
    item.Apellido = req.body.Apellido;
    item.Sucursal = req.body.Sucursal;
    item.Activo = req.body.Activo;
 
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

//borrar un usuario
router.delete("/api/usuarios/:id", async (req, res) => {


  let bajaFisica = false;

  if (bajaFisica) {
    // baja fisica
    let filasBorradas = await db.usuarios.destroy({
      where: { IdUsuario: req.params.id },
    });
    if (filasBorradas == 1) res.sendStatus(200);
    else res.sendStatus(404);
  } else {
    // baja logica
    try {
      let data = await db.sequelize.query(
        "UPDATE usuario SET Activo = case when Activo = 1 then 0 else 1 end WHERE IdEnvio = :IdUsuario",
        {
          replacements: { IdUsuario: +req.params.id },
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


  let items = await db.usuarios.findAndCountAll({
    attributes: [
      "IdUsuario",
      "Nombre",
      "Apellido",
      "Sucursal",
      "Activo",
    ],
    order: [["Nombre", "ASC"]],
    where,
  });

  res.json(items.rows);
});



module.exports = router;
