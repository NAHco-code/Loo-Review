const { Loo } = require('../models');

const looData = [
    {
        id: 01,
        facility_name: "Starbucks",
        address: "1570 Olentangy River Rd",
        city: "Columbus",
        state: "OH",
        zip: 43212
    },
    {
        id: 02,
        facility_name: "Starbucks",
        address: "1085 W 5th Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212
    },
    {
        id: 03,
        facility_name: "Starbucks",
        address: "840 W 3rd Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212
    },
    {
        id: 04,
        facility_name: "Lou Berliner Sports Park",
        address: "325 Greenlawn Ave",
        city: "Columbus",
        state: "OH",
        zip: 43223
    },
    {
        id: 05,
        facility_name: "Shell",
        address: "631 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43215
    },
    {
        id: 06,
        facility_name: "BP",
        address: "1091 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43206
    },
    {
        id: 07,
        facility_name: "Speedway",
        address: "1165 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43206
    },
    {
        id: 08,
        facility_name: "GetGo Gas Station",
        address: "820 W 3rd Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212
    },
    {
        id: 09,
        facility_name: "BIBIBOP Asian Grill",
        address: "1270 W 5th Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212
    },
    {
        id: 10,
        facility_name: "Grandview Center Shopping Mall",
        address: "1417 Grandview Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212
    }
]

const seedLoos = () => Loo.bulkCreate(looData);

module.exports = seedLoos;
