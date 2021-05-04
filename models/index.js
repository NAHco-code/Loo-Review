// IN PROGRESS

// #### USER TABLE
// * ID(PK)
// * Name
// * Email
// * Password
// * Username

// #### LOO TABLE
// * ID(PK)
// * Review ID
// * User ID
// * Facility name
// * Address (string or object - TBD)
// *    // if object, may need: street_number, street_name, city, state, zip

// #### REVIEW TABLE
// * ID(PK)
// * Loo ID // to get rating + facility name
// * User ID // to get username
// * Title
// * Rating
// * Review
// * Date created


// import models
// const Location = require('./Location');
const Loo = require('./Loo');
const User = require('./User');
const Review = require('./Review');

// *the order in which the associations are defined is relevant
// ex. A.hasOne(B); // 'A' is the source model // 'B' is the target model
// https://sequelize.org/master/manual/assocs.html



User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

Loo.hasMany(User, { include: Review, foreignKey: 'loo_id' });
User.belongsTo(Loo, { include: Review, foreignKey: 'loo_id' });


module.exports = {
    // Location,
    Loo,
    User,
    Review
};
