// IN PROGRESS
// import models
const User = require('./user');
const Location = require('./location');
const Loo = require('./loo');
const looReviews = require('./looReviews');

//
Location.hasMany(Loo, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

// Bathrooms belongsTo many locations
Loo.belongsTo(Location, {
    through: {

    foreignKey: 'location_id'
    },
as:
});

// User belongsTomany reviews
User.belongsToMany( looReviews, {
    through: {
        model:
        unique: false,
    },
    as: ''
)


// Each Review belongsTo only one user


// Loo hasMany reviews




module.exports = {
    Location,
    Loo,
    User,
    looReviews,
};
