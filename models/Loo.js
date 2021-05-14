const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Loo extends Model { }
//
// create fields/columns for Loo table
Loo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        facility_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        lat: {
            type: DataTypes.DECIMAL(15,10),
            allowNull: false
        },
        lon: {
            type: DataTypes.DECIMAL(15,10),
            allowNull: false
        }
    },  // render average rating with query
        // individual ratings from each review in review table
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'loo',
    }
);

module.exports = Loo;
