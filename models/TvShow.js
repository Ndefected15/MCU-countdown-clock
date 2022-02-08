const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TvShow extends Model {}

TvShow.init({
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
    overview: {
        type: DataTypes.TEXT,
    },
    release_date: {
        type: DataTypes.STRING,
        allowNull: false,
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
    modelName: 'TvShow',
});

module.exports = TvShow;