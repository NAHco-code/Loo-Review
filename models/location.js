const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Location extends Model {}

// create fields/columns for Location model
Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    facility: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
        type: DataTypes.JSON,
        // street_number: DataTypes.INTEGER,
        // street_name: DataTypes.STRING,
        // street_city:DataTypes.STRING,
        // street_state:DataTypes.STRING,
        // street_zip:DataTypes.INTEGER,
        allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location'
  }
);

module.exports = Location;
