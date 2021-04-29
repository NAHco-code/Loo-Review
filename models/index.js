// IN PROGRESS

const User = require('./user');
const Location = require('./location');
const Loo = require('./loo');

Location.hasMany(Loo, {
    foreignKey: 'location_id',
    onDelete: 'CASCADE'
});

Loo.belongsTo(Location, {
    foreignKey: 'location_id'
});



module.exports = { Location, Loo, User };
