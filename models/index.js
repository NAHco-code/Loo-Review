// IN PROGRESS
// import models
const User = require('./user');
const Location = require('./location');
const Loo = require('./loo');
const looReviews = require('./looReviews');

// Each location hasMany loos
Location.hasMany(Loo, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

// Loos belongsTo many locations
Loo.belongsTo(Location, {
    foreignKey: 'location_id'
});

// User belongsTomany reviews (through looReviews)
User.belongsToMany(looReviews, {
    through: {
        model: looReviews,
        unique: false,
    },
    as: 'username'
});


// Each Review belongsTo only one user
looReviews.belongsTo(User, {
    foreignKey: 'username'
});

// Loo hasMany reviews
Loo.hasMany(looReviews, {
    foreignKey:'loo_id'
});



module.exports = {
    Location,
    Loo,
    User,
    looReviews,
};
