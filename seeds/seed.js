// IN PROGRESS

const sequelize = require('../config/connection');
const { User, Location, Loo } = require('../models');

const userData = require('./userData.json');
const locationData = require('./locationData.json');
const looData = require('./looData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const location = await Location.bulkCreate(locationData, {
        individualHooks: true,
        returning: true,

    });

    for (const loo of looData) {
        await Loo.create({
            ...loo,
            location_id: location //math floor random * users.legth)].id,
        });
    }

    process.exit(0);
};

seedDatabase();
