const { Location } = require('../models');

const seedLocations = () => Location.bulkCreate.JSON.parse(locationData);

module.exports = seedLocations;