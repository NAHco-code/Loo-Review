const { Review } = require('../models');

const seedReviews = () => Review.bulkCreate.JSON.parse(reviewData);

module.exports = seedReviews;