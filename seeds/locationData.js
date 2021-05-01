const { Location } = require('../models');

// check syntax upper v. lower case titles

const seedLocations = () => Location.bulkCreate.JSON.parse(locationData);

module.exports = seedLocations;