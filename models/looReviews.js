const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our looReview model
class looReviews extends Model {}

// create fields/columns for looReview model
looReviews.init(
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
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    loo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'loo',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'looReviews'
  }
);

module.exports = looReviews;