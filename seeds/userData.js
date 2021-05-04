const { User } = require('../models');

const userData = [
    {
        id: 01,
        name: "Julie",
        username: "soulSing",
        email: "jcannell@icloud.com",
        password: "password12345"
    },
    {
        id: 02,
        name: "Robert",
        username: "meatnPotatoes",
        email: "robby@gmail.com",
        password: "password12345"
    },
    {
        id: 03,
        name: "Mikey",
        username: "batman87",
        email: "mcwilwil@aol.com",
        password: "password12345"
    },
    {
        id: 04,
        name: "Dani",
        username: "goTops18",
        email: "dpthrow@gmail.com",
        password: "password12345"
    },
    {
        id: 05,
        name: "Dani",
        username: "readyFreddy",
        email: "danicat@gmail.com",
        password: "password12345"
    },
    {
        id: 06,
        name: "Jake",
        username: "volleyBear",
        email: "jlww@aol.com",
        password: "password12345"
    },
    {
        id: 07,
        name: "Shelly",
        username: "smartyPants",
        email: "shelbel@osu.com",
        password: "password12345"
    },
    {
        id: 08,
        name: "Joe",
        username: "guitarFlower",
        email: "joeyC@gmail.com",
        password: "password12345"
    },
    {
        id: 09,
        name: "Milo",
        username: "pennyPoc",
        email: "Milo@yahoo.com",
        password: "password12345"
    },
    {
        id: 10,
        name: "Tristan",
        username: "iLikePlanets",
        email: "Tristan@yahoo.com",
        password: "password12345"
    },
    {
        id: 11,
        name: "Sue",
        username: "spoiledGF",
        email: "suzyQ@aol.com",
        password: "password12345"
    },
    {
        id: 12,
        name: "Jimmy",
        username: "Jimbo98",
        email: "jimbo@gmail.com",
        password: "password12345"
    },
    {
        id: 13,
        name: "Toni",
        username: "iHeartPups",
        email: "antoinette@gmail.com",
        password: "password12345"
    },
    {
        id: 14,
        name: "Mark",
        username: "grayBeard",
        email: "markyMark@gmail.com",
        password: "password12345"
    },
    {
        id: 15,
        name: "Nick",
        username: "MAXout",
        email: "liftnrun@aol.com",
        password: "password12345"
    },
    {
        id: 16,
        name: "Maddie",
        username: "7yearfiance",
        email: "maddieO@aol.com",
        password: "password12345"
    },
    {
        id: 17,
        name: "Austin",
        username: "fishEyes",
        email: "austinFoo@gmail.com",
        password: "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
