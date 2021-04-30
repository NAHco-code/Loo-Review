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
    review_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review_body: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    loo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'loo',
            key: 'id'
        }
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
