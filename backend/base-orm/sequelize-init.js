const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("sqlite:" + process.env.base);

const envios = sequelize.define("envios", {
  IdEnvio: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Calle: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Calle es requerida",
      },
      len: {
        args: [5, 60],
        msg: "Calle debe tener entre 5 y 60 caracteres",
      },
    },
    unique: {
      args: true,
      msg: "Esta Calle ya existe en la tabla",
    },
  },
  Numero: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Número es requerido",
      },
    },
  },
  CPostal: {
    type: DataTypes.STRING(13),
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Código Postal es requerido",
      },
      is: {
        args: [/^[0-9]{13}$/i],
        msg: "Código Postal debe ser numérico de 13 dígitos",
      },
    },
  },
  FechaAlta: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Fecha de Alta es requerida",
      },
    },
  },
  Zona: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Zona es requerida",
      },
    },
  },
});

const usuarios = sequelize.define("usuarios", {
  IdUsuario: {
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
        msg: "Nombre debe tener entre 5 y 60 caracteres",
      },
    },
    unique: {
      args: true,
      msg: "Este Nombre ya existe en la tabla",
    },
  },
  Apellido: {
    type: DataTypes.STRING(60),
    allowNull: false,
    validate: {
      notEmpty: {
        args: true,
        msg: "Apellido es requerido",
      },
      len: {
        args: [5, 60],
        msg: "Apellido debe tener entre 5 y 60 caracteres",
      },
    },
    unique: {
      args: true,
      msg: "Este Apellido ya existe en la tabla",
    },
  },
  Sucursal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Sucursal es requerida",
      },
      is: {
        args: [/^[0-9]{13}$/i],
        msg: "Sucursal debe ser numérico de 13 dígitos",
      },
    },
  },
  Activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    validate: {
      notNull: {
        args: true,
        msg: "Activo es requerido",
      },
    },
  },
});

module.exports = {
  sequelize,
  envios,
  usuarios,
};
