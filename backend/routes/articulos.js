const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/articulos", async function (req, res) {
  // consulta de articulos con filtros y paginacion

  let where = {};
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
  let items = await db.articulos.findAndCountAll({
    attributes: [
      "IdArticulo",
      "Nombre",
      "Precio",
      "Stock",
      "FechaAlta",
      "Activo",
    ],
    order: [["Nombre", "ASC"]],
    where,
  });

  res.json(items.rows);
});


//eliminar articulo
router.delete("/api/articulos/:id", async function (req, res) {
  const articuloId = req.params.id;

  try {
    // Buscar articulo por su ID
    const articulo = await db.articulos.findOne({ where: { IdArticulo: articuloId } });

    if (!articulo) {
      // El articulo no existe
      return res.status(404).json({ mensaje: "El articulo no fue encontrado." });
    }

    // Eliminar el articulo de la base de datos
    await articulo.destroy();

    res.json({ mensaje: "El articulo fue eliminado ." });
  } catch (error) {
    console.error("Error al eliminar el articulo:", error);
    res.status(500).json({ mensaje: "Ocurrió un error al eliminar el articulo." });
  }
});

//para editar un articulo
router.put("/api/articulos/:id", async function (req, res) {
  const articuloId = req.params.id;
  const datosActualizados = req.body;

  try {
    // Buscar el articulo por su ID
    const articulo = await db.articulos.findOne({ where: { IdArticulo: articuloId } });

    if (!articulo) {
      // El articulo no existe
      return res.status(404).json({ mensaje: "El articulo no fue encontrado." });
    }

    // Actualizar 
    await articulo.update(datosActualizados);

    res.json({ mensaje: "El articulo fue actualizado" });
  } catch (error) {
    console.error("Error al actualizar el articulo:", error);
    res.status(500).json({ mensaje: "Ocurrió un error al actualizar el articulo." });
  }
});
module.exports = router;
