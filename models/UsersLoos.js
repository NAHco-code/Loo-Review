const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

// create UsersLoos through table
// gain functionality to save favorites
class UsersLoos extends Model { }


UsersLoos.init(
    {//define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        loo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'loo',
                key: 'id',
                unique: false
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'users_loos',
    }
);

module.exports = UsersLoos;
