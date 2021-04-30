const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const bcrypt = require('bcrypt');

class User extends Model {
    // // checkPassword(loginPw) {
    // //     return bcrypt.compareSync(loginPw, this.password);
    // }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        }
    },
    // {
    //     hooks: {
    //         beforeCreate: async (newUser) => {
    //             newUser.password = await bcrypt.hash(user.password, 10)
    //             return newUser;
    //         },
    //         beforeUpdate: async (updateUser) => {
    //             updateUser.password = await bcrypt.hash(updateUser.password, 10);
    //             return updateUser;
    //         }
    //     }
    // },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
