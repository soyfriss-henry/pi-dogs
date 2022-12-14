const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      field: 'Id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Name'
    },
    height: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'Height'
    },
    weight: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'Weight'
    },
    life_span: {
      type: DataTypes.STRING(50),
      field: 'LifeSpan'
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
};
