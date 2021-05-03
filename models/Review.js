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
    // location_id: { // to get facility name
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'loo',
    //     key: 'id'
    //   }
    // },
    loo_id: { // to get facility name and address
      type: DataTypes.INTEGER,
      references: {
        model: 'loo',
        key: 'id'
      }
    },
    user_id: { // to get username
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    review: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    createdAt: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'review'
  }
);

module.exports = Review;
