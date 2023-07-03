// acceder a la base usando aa-sqlite
const db = require("aa-sqlite");

async function CrearBaseSiNoExiste() {

  // abrir base, si no existe el archivo/base lo crea
  await db.open(process.env.base);

  let existe = false;
  let res = null;

  existe = false;
  sql =
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'envios'";
  res = await db.get(sql, []);
  if (res.contar > 0) existe = true;
  if (!existe) {
    await db.run(
      `CREATE table envios( 
              IdEnvio INTEGER PRIMARY KEY AUTOINCREMENT
            , Calle TEXT NOT NULL UNIQUE
            , Numero REAL NOT NULL
            , CPostal text NOT NULL
            , FechaAlta text NOT NULL
            , Zona boolean NOT NULL
            )`
    );
    console.log("tabla envios creada!");

    await db.run(
      `insert into envios values
      (1,'RIO URUGUAY ',1366, 5006,'2022-01-19', 1 ),
      (2,'COLON',750 ,5000,'2022-01-31', 1 ),
      (3,'AV SANTA ANA ',2780, 5007,'2022-01-19', 3 ),
      (4,'BELGRANO',500 ,5010,'2022-01-31', 2),
      (5,'BODEREAU ',9005, 5147,'2022-01-19', 8 ),
      (6,'ASTURIAS',3150 ,5007,'2022-01-31', 6 ),
      (7,'SAN JERONIMO',4260, 5006,'2022-01-19', 2 ),
      (8,'MAESTRO VIDAL',1560 ,5003,'2022-01-31', 1 ),
      (9,'RECTA MARTINOLI ',7850, 5147,'2022-01-19', 8 ),
      (10,'AV SABATTINI',3250,5004,'2022-01-31', 1 ),
      (11,'SUCRE',280, 5000,'2017-02-02', 1 )
      ;`
    );
  }

  existe = false;
  sql =
    "SELECT count(*) as contar FROM sqlite_schema WHERE type = 'table' and name= 'usuarios'";
  res = await db.get(sql, []);
  if (res.contar > 0) existe = true;

  if (!existe) {
    // Crear la tabla 'usuarios' si no existe
    await db.run(
      `CREATE TABLE usuarios(
         IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT,
        Nombre TEXT NOT NULL,
        Apellido TEXT NOT NULL,
        Sucursal INTEGER,
        Activo BOOLEAN NOT NULL
      );`
    );
    console.log("Tabla 'usuarios' creada!");

    // Insertar datos de ejemplo en la tabla 'vendedores'
    await db.run(
      `INSERT INTO usuarios VALUES
        (1, 'Juan', 'Perez',1, 1),
        (2, 'LUIFA', 'ARTIME',1, 1),
        (3, 'CHICHE', 'SOSA',2, 1),
        (4, 'Pedro', 'Sanchez',2, 1)
        ;`
    );
    console.log("Datos insertados en la tabla 'usuarios'");
  }
  // cerrar la base
  db.close();
}

CrearBaseSiNoExiste();

module.exports =  CrearBaseSiNoExiste;
