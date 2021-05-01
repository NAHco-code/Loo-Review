const { Loo } = require('../models');

const seedLoos = () => Loo.bulkCreate.JSON.parse(looData);

module.exports = seedLoos;