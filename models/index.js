// import models
const Loo = require('./Loo');
const User = require('./User');
const Review = require('./Review');
const UsersLoos = require('./UsersLoos');

// *the order in which the associations are defined is relevant
// ex. A.hasOne(B); // 'A' is the source model // 'B' is the target model
// https://sequelize.org/master/manual/assocs.html

Review.belongsTo(Loo, { foreignKey: 'loo_id' });
Loo.hasMany(Review, { foreignKey: 'loo_id' });


Review.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Review, { foreignKey: 'user_id' });

User.belongsToMany(Loo, { through: UsersLoos });
Loo.belongsToMany(User, { through: UsersLoos });


module.exports = {
    Loo,
    User,
    Review,
    UsersLoos
};
