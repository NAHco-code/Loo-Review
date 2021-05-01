// IN PROGRESS

// #### USER TABLE
// * ID(PK)
// * Name
// * Email
// * Password
// * Username

// #### LOCATION TABLE
// * ID(PK)
// * Address (string or object - TBD)
// *    // if object, may need: street_number, street_name, city, state, zip

// #### LOO TABLE
// * ID(PK)
// * Location ID / Address (string or object - TBD)
// * Facility name
// * Rating

// #### REVIEW TABLE
// * ID(PK)
// * User ID
// * Loo ID
// * Title
// * Review
// * Date created


// import models
const Location = require('./Location');
const Loo = require('./Loo');
const User = require('./User');
const Review = require('./Review');

// *the order in which the associations are defined is relevant
// ex. A.hasOne(B); // 'A' is the source model // 'B' is the target model
// https://sequelize.org/master/manual/assocs.html

// location seems the starting point - that's how the user finds the loos, which hold the reviews

// One-To-Many relationship // *created by using '.hasMany' + '.belongsTo' associations together
Location.hasMany(Loo, { onDelete: 'CASCADE', foreignKey: 'location_id' }); // .hasMany association - fk is defined in target model
Loo.belongsTo(Location, { foreignKey: 'location_id' }); // .belongsTo association - fk is defined in source model


// One-To-Many relationship
Loo.hasMany(Review, { onDelete: 'CASCADE', foreignKey: 'loo_id' });
Review.belongsTo(Loo, { through: 'User', foreignKey: 'loo_id' });




module.exports = {
    Location,
    Loo,
    User,
    Review
};
