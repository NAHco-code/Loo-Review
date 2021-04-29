// IN PROGRESS

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Loo extends Model { }

Loo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
        },
        date_cteated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now,
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'loo',
    }
);

module.exports = { Loo };
