const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Phase extends Model {}

Phase.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    phase_order: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'phase',
});

module.exports = Phase;