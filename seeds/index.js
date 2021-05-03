// IN PROGRESS // following code from class example

const sequelize = require('../config/connection');
const { User, Loo, Review } = require('../models');

const userData = require('./userData');
// const locationData = require('./locationData.json');
const looData = require('./looData');
const reviewData = require('./reviewData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const loo = await Loo.bulkCreate(looData, {
        individualHooks: true,
        returning: true,

    });

    for (const review of reviewData) {
        await Review.create({
            ...review,
            loo_id: loo //math floor random * users.legth)].id,
        });
    }

    process.exit(0);
};

seedDatabase();
