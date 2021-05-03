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
// * Address (string or object - TBD)
// *    // if object, may need: street_number, street_name, city, state, zip
// * Rating (avg rating - sequelize literal - update loo after each review - can do in front end - doesn't need to be in table)

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

// location seems the starting point - that's how the user finds the loos, which hold the reviews


// One-To-Many relationship // *created by using '.hasMany' + '.belongsTo' associations together
Loo.hasMany(Review, { onDelete: 'CASCADE', foreignKey: 'loo_id' });// .hasMany association - fk is defined in target model
Review.belongsTo(Loo, { foreignKey: 'loo_id' });// .belongsTo association - fk is defined in source model

User.hasMany(Review, { foreignKey: 'user_id' });
Review.belongsTo(User, { foreignKey: 'user_id' });

// many to many relationship between users and loos - render username on who added a loo
User.belongsToMany(Loo, { foreignKey: 'user_id' });
Loo.belongsToMany(User, { foreignKey: 'loo_id' });

// relationship b/w user and loo if we want to save favorites //*after MVP is reached




module.exports = {
    // Location,
    Loo,
    User,
    Review
};
