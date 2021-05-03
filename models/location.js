// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Location extends Model { }

// // create fields/columns for Location table
// Location.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         facility_name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         address: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }

//         // **IF NEEDED** // depends on data from google api

//         // facility_name: {
//         //     type: DataTypes.STRING,
//         //     allowNull: false
//         // },
//         // street_number: {
//         //     type: DataTypes.INTEGER,
//         //     allowNull: false
//         // },
//         // street_name: {
//         //     type: DataTypes.STRING,
//         //     allowNull: false
//         // },
//         // city: {
//         //     type: DataTypes.STRING,
//         //     allowNull: false
//         // },
//         // state: {
//         //     type: DataTypes.STRING,
//         //     allowNull: false
//         // },
//         // zip: {
//         //     type: DataTypes.INTEGER,
//         //     allowNull: false
//         // }
//     },
//     {
//         sequelize,
//         timestamps: true,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'location'
//     }
// );

// module.exports = Location;
