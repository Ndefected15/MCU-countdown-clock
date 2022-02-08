const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PhaseThree extends Model {}

PhaseThree.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: {
        type: DataTypes.STRING,
    },
    overview: {
        type: DataTypes.TEXT,
    },
    directed_by: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    poster_horizontal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    background: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'PhaseThree',
});

module.exports = PhaseThree;