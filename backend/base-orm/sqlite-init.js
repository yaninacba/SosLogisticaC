const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {
  // abrir base, si no existe el archivo/base lo crea
  await db.open(process.env.base);

  let existe = false;
  let res = null;

  existe = false;
  let sql =
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'envios'";
  res = await db.get(sql, []);
  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(`
      CREATE TABLE envios(
        IdEnvio INTEGER PRIMARY KEY AUTOINCREMENT,
        Calle TEXT NOT NULL UNIQUE,
        Numero REAL NOT NULL,
        CPostal TEXT NOT NULL,
        FechaAlta TEXT NOT NULL,
        Zona REAL NOT NULL
      )
    `);

    console.log("Tabla envios creada!");

    await db.run(`
      INSERT INTO envios (Calle, Numero, CPostal, FechaAlta, Zona) VALUES
      ('RIO URUGUAY', 1366, '5006', '2022-01-19', 1),
      ('COLON', 750, '5000', '2022-01-31', 1),
      ('AV SANTA ANA', 2780, '5007', '2022-01-19', 3),
      ('BELGRANO', 500, '5010', '2022-01-31', 2),
      ('BODEREAU', 9005, '5147', '2022-01-19', 8),
      ('ASTURIAS', 3150, '5007', '2022-01-31', 6),
      ('SAN JERONIMO', 4260, '5006', '2022-01-19', 2),
      ('MAESTRO VIDAL', 1560, '5003', '2022-01-31', 1),
      ('RECTA MARTINOLI', 7850, '5147', '2022-01-19', 8),
      ('AV SABATTINI', 3250, '5004', '2022-01-31', 1),
      ('SUCRE', 280, '5000', '2017-02-02', 1)
    `);
  }

  existe = false;
  sql =
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'usuarios'";
  res = await db.get(sql, []);
  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(`
      CREATE TABLE usuarios(
        IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
        Nombre TEXT NOT NULL,
        Apellido TEXT NOT NULL,
        Sucursal REAL NOT NULL,
        Activo BOOLEAN NOT NULL
      )
    `);

    console.log("Tabla usuarios creada!");

    await db.run(`
      INSERT INTO usuarios (Nombre, Apellido, Sucursal, Activo) VALUES
      ('Admin', 'Admin', 0, 0),
      ('Juan', 'Perez', 1, 1),
      ('LUIFA', 'ARTIME', 1, 1),
      ('CHICHE', 'SOSA', 2, 1),
      ('Pedro', 'Sanchez', 2, 1)
    `);
  }

  // cerrar la base
  db.close();
}

CrearBaseSiNoExiste();

module.exports = CrearBaseSiNoExiste;
