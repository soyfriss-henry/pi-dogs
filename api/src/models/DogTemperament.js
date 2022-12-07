const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('DogTemperament', {
        Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        }
    }, {
        timestamps: false,
        freezeTableName: true
    })
}