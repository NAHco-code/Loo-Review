// IN PROGRESS
// import models
const User = require('./user');
const Location = require('./location');
const Loo = require('./loo');

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

module.exports = {
    Location,
    Loo,
    User,
    looReviews,
};
