const { User } = require('../models');

const seedUsers = () => User.bulkCreate.JSON.parse(userData);

module.exports = seedUsers;