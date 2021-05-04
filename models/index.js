// IN PROGRESS

// #### USER TABLE
// * ID(PK)
// * Name
// * Email
// * Password
// * Username

// #### LOO TABLE
// * ID(PK)
// * Facility name
// * Address
// * City
// * Zip

// #### REVIEW TABLE
// * ID(PK)
// * Title
// * Rating
// * Review
// * createdAt
// * Loo ID // to get rating + facility name
// * User ID // to get username

// import models
const Loo = require('./Loo');
const User = require('./User');
const Review = require('./Review');

// *the order in which the associations are defined is relevant
// ex. A.hasOne(B); // 'A' is the source model // 'B' is the target model
// https://sequelize.org/master/manual/assocs.html

Loo.hasMany(Review, { foreignKey: 'loo_id' });
Review.belongsTo(Loo, { foreignKey: 'loo_id' });

User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

// Many-to Many relationship b/w user and loo if we want to save favorites //*after MVP is reached

module.exports = {
    Loo,
    User,
    Review
};
