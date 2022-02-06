const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies extends Model {}

Movies.init({
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
    phase: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    chronology: {
        type: DataTypes.INTEGER,
    },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Movies',
});

module.exports = Movies;