const { User } = require('../models');

const userData = [
    {
        id: 01,
        name: "Julie",
        email: "jcannell@icloud.com",
        username: "soulSing",
        password: "password12345"
    },
    {
        id: 02,
        name: "Robert",
        email: "robby@gmail.com",
        username: "meatnPotatoes",
        password: "password12345"
    },
    {
        id: 03,
        name: "Mikey",
        email: "mcwilwil@aol.com",
        username: "batman87",
        password: "password12345"
    },
    {
        id: 04,
        name: "Dani",
        email: "dpthrow@gmail.com",
        username: "goTops18",
        password: "password12345"
    },
    {
        id: 05,
        name: "Dani",
        email: "danicat@gmail.com",
        username: "readyFreddy",
        password: "password12345"
    },
    {
        id: 06,
        name: "Jake",
        email: "jlww@aol.com",
        username: "volleyBear",
        password: "password12345"
    },
    {
        id: 07,
        name: "Shelly",
        email: "shelbel@osu.com",
        username: "smartyPants",
        password: "password12345"
    },
    {
        id: 08,
        name: "Joe",
        email: "joeyC@gmail.com",
        username: "guitarFlower",
        password: "password12345"
    },
    {
        id: 09,
        name: "Milo",
        email: "Milo@yahoo.com",
        username: "pennyPoc",
        password: "password12345"
    },
    {
        id: 10,
        name: "Tristan",
        email: "Tristan@yahoo.com",
        username: "iLikePlanets",
        password: "password12345"
    },
    {
        id: 11,
        name: "Sue",
        email: "suzyQ@aol.com",
        username: "spoiledGF",
        password: "password12345"
    },
    {
        id: 12,
        name: "Jimmy",
        email: "jimbo@gmail.com",
        username: "Jimbo98",
        password: "password12345"
    },
    {
        id: 13,
        name: "Toni",
        email: "antoinette@gmail.com",
        username: "iHeartPups",
        password: "password12345"
    },
    {
        id: 14,
        name: "Mark",
        email: "markyMark@gmail.com",
        username: "grayBeard",
        password: "password12345"
    },
    {
        id: 15,
        name: "Nick",
        email: "liftnrun@aol.com",
        username: "MAXout",
        password: "password12345"
    },
    {
        id: 16,
        name: "Maddie",
        email: "maddieO@aol.com",
        username: "7yearfiance",
        password: "password12345"
    },
    {
        id: 17,
        name: "Austin",
        email: "austinFoo@gmail.com",
        username: "fishEyes",
        password: "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
