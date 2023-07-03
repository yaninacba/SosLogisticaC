const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get("/api/vendedores", async function (req, res) {
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
  let items = await db.vendedores.findAndCountAll({
    attributes: [
      "IdVendedores",
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

//eliminar un vendedor
router.delete("/api/vendedores/:id", async function (req, res) {
  const vendedorId = req.params.id;

  try {
    // Buscar el vendedor por su ID
    const vendedor = await db.vendedores.findOne({ where: { IdVendedores: vendedorId } });

    if (!vendedor) {
      // El vendedor no existe
      return res.status(404).json({ mensaje: "El vendedor no fue encontrado." });
    }

    // Eliminar el vendedor de la base de datos
    await vendedor.destroy();

    res.json({ mensaje: "El vendedor fue eliminado exitosamente." });
  } catch (error) {
    console.error("Error al eliminar el vendedor:", error);
    res.status(500).json({ mensaje: "Ocurrió un error al eliminar el vendedor." });
  }
});

//para editar un vendedor
router.put("/api/vendedores/:id", async function (req, res) {
  const vendedorId = req.params.id;
  const datosActualizados = req.body;

  try {
    // Buscar el vendedor por su ID
    const vendedor = await db.vendedores.findOne({ where: { IdVendedores: vendedorId } });

    if (!vendedor) {
      // El vendedor no existe
      return res.status(404).json({ mensaje: "El vendedor no fue encontrado." });
    }

    // Actualizar los datos del vendedor
    await vendedor.update(datosActualizados);

    res.json({ mensaje: "El vendedor fue actualizado exitosamente." });
  } catch (error) {
    console.error("Error al actualizar el vendedor:", error);
    res.status(500).json({ mensaje: "Ocurrió un error al actualizar el vendedor." });
  }
});


module.exports = router;
