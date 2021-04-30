const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Loo extends Model { }

// create fields/columns for Loo model
Loo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location_descr: {
            type: DataTypes.STRING,
            allowNull: true
        },
        capacity: {
            type: DataTypes.INTEGER,
        },

        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now,
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'loo',
    }
);

module.exports = Loo;
