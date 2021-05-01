const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create Review model
class Review extends Model { }

// create fields/columns for Review model
Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: { //to get username from model
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    loo_id: { //to connect the review to the loo + loo rating //can we include location(to get facility name) in 'get' route without defining it in the model?
      type: DataTypes.INTEGER,
      references: {
        model: 'loo',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;
