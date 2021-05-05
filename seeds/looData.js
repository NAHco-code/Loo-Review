const { Loo } = require('../models');

const looData = [
    {
        id: 01,
        facility_name: "Starbucks",
        address: "1570 Olentangy River Rd",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: -34.397,
        lon: 150.644
    },
    {
        id: 02,
        facility_name: "Starbucks",
        address: "1085 W 5th Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: -34,
        lon: 150
    },
    {
        id: 03,
        facility_name: "Starbucks",
        address: "840 W 3rd Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: -34,
        lon: 150
    },
    {
        id: 04,
        facility_name: "Lou Berliner Sports Park",
        address: "325 Greenlawn Ave",
        city: "Columbus",
        state: "OH",
        zip: 43223,
        lat: -34,
        lon: 150
    },
    {
        id: 05,
        facility_name: "Shell",
        address: "631 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: -34,
        lon: 150
    },
    {
        id: 06,
        facility_name: "BP",
        address: "1091 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43206,
        lat: -34,
        lon: 150
    },
    {
        id: 07,
        facility_name: "Speedway",
        address: "1165 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43206,
        lat: -34,
        lon: 150
    },
    {
        id: 08,
        facility_name: "GetGo Gas Station",
        address: "820 W 3rd Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: -34,
        lon: 150
    },
    {
        id: 09,
        facility_name: "BIBIBOP Asian Grill",
        address: "1270 W 5th Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: -34,
        lon: 150
    },
    {
        id: 10,
        facility_name: "Grandview Center Shopping Mall",
        address: "1417 Grandview Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: -34,
        lon: 150
    },
    // {
    //     id: 11,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 12,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 13,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 14,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 15,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 16,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 17,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 18,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 19,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 20,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 21,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 22,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 23,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 24,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    // {
    //     id: 25,
    //     facility_name: "",
    //     address: "",
    //     city: "Columbus",
    //     state: "OH",
    //     zip:
    // },
    {
        id: 26,
        facility_name: "440 Main & Mickey's",
        address: "440 E Main Ave",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    {
        id: 27,
        facility_name: "Spencer's Coffee",
        address: "915 College St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    {
        id: 28,
        facility_name: "Dublin's Irish Pub",
        address: "904 State St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    {
        id: 29,
        facility_name: "Cliffs of Moher Irish Pub",
        address: "410 East Main Street",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    {
        id: 30,
        facility_name: "The Office at 912",
        address: "912 State St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    {
        id: 31,
        facility_name: "WKU Softball Field",
        address: "301-361 Marylan Ave",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    {
        id: 32,
        facility_name: "E.A. Diddle Arena",
        address: "1605 Avenue of Champions",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: -34,
        lon: 150
    },
    // {
    //     id: 33,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 34,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 35,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 36,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 37,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 38,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 39,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 40,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 41,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 42,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 43,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 44,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 45,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 46,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 47,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 48,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 49,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
    // {
    //     id: 50,
    //     facility_name: "",
    //     address: "",
    //     city: "Bowling Green",
    //     state: "KY",
    //     zip:
    // },
]

const seedLoos = () => Loo.bulkCreate(looData);

module.exports = seedLoos;
