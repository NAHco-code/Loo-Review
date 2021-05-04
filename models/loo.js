const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Loo extends Model { }

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
        address: { // format still in question  - string or obeject
            type: DataTypes.STRING,
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
