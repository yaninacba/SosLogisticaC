// configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
//const sequelize = new Sequelize("sqlite:" + process.env.base );
const sequelize = new Sequelize("sqlite:" + process.env.base);


<<<<<<< HEAD
const envios = sequelize.define(
  "envios",
  {
    IdEnvio: {
=======
const articulos = sequelize.define(
  "articulos",
  {
    IdArticulo: {
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
<<<<<<< HEAD
    Calle: {
=======
    Nombre: {
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
      type: DataTypes.STRING(60),
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Nombre es requerido",
        },
        len: {
          args: [5, 60],
          msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
        },
      },
      unique: {
        args: true,
        msg: "este Nombre ya existe en la tabla!",
      },
    },
<<<<<<< HEAD
    Numero: {
=======
    Precio: {
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Precio es requerido",
        }
      }
    },
<<<<<<< HEAD
    CPostal: {
=======
    CodigoDeBarra: {
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
      type: DataTypes.STRING(13),
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Codigo De Barra es requerido",
        },
        is: {
          args: ["^[0-9]{13}$", "i"],
          msg: "Codigo de Barra debe ser numerico de 13 digitos",
        },
      },
    },
<<<<<<< HEAD

=======
    Stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Stock es requerido",
        }
      }
    },
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
    FechaAlta: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Fecha Alta es requerido",
        }
      }
    },
<<<<<<< HEAD

    Zona: {
      type: DataTypes.STRING(13),
=======
    Activo: {
      type: DataTypes.BOOLEAN,
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
      allowNull: false,
      validate: {
        notNull: {
          args: true,
<<<<<<< HEAD
          msg: "Codigo De Barra es requerido",
        },
        is: {
          args: ["^[0-9]{13}$", "i"],
          msg: "Codigo de Barra debe ser numerico de 13 digitos",
        },
      },
    },

  },
)

const usuarios = sequelize.define(
    "usuarios",
    {
      IdUsuario: {
=======
          msg: "Activo es requerido",
        }
      }
    },
  },
)

const vendedores = sequelize.define(
    "vendedores",
    {
      IdVendedores: {
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Nombre: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nombre es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        },
        unique: {
          args: true,
          msg: "este Nombre ya existe en la tabla!",
        },
      },

      Apellido: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nombre es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
          },
        },
        unique: {
          args: true,
          msg: "este Nombre ya existe en la tabla!",
        },
      },
      
      
     
      Sucursal: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Sucursal es requerido",
          }
        }
      },
  
      Activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Activo es requerido",
          }
        }
      },
    },

);

module.exports = {
  sequelize,
<<<<<<< HEAD
  envios,
  usuarios,
=======
  articulos,
  vendedores,
>>>>>>> e835a45da833b608d3995f4e3ac0f0fecfa796ec
};
