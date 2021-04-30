// IN PROGRESS
// import models
const User = require('./User');
const Location = require('./Location');
const Loo = require('./Loo');
const Review = require('./Review');

// Each location hasMany loos
Location.hasMany(Loo, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});


Loo.belongsTo(Location, {
    foreignKey: 'location_id'
});

// Loo hasMany reviews
Loo.hasMany( Review, {
    foreignKey:'loo_id'
});



module.exports = {
    Location,
    Loo,
    User,
    Review,
};
