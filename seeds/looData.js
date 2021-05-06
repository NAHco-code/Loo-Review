const { Loo } = require('../models');

const looData = [
    {
        id: 01,
        facility_name: "Starbucks",
        address: "1570 Olentangy River Rd",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.9925574,
        lon: -83.0252776
    },
    {
        id: 02,
        facility_name: "Starbucks",
        address: "1085 W 5th Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.9880513,
        lon: -83.035245
    },
    {
        id: 03,
        facility_name: "Starbucks",
        address: "840 W 3rd Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.9859907,
        lon: -83.0281561
    },
    {
        id: 04,
        facility_name: "Lou Berliner Sports Park",
        address: "325 Greenlawn Ave",
        city: "Columbus",
        state: "OH",
        zip: 43223,
        lat: 39.9393406,
        lon: -83.0047873
    },
    {
        id: 05,
        facility_name: "Shell",
        address: "631 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.9494102,
        lon: -82.9984929
    },
    {
        id: 06,
        facility_name: "BP Duchess Shoppe",
        address: "1091 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43206,
        lat: 39.9397768,
        lon: -82.9970108
    },
    {
        id: 07,
        facility_name: "Speedway",
        address: "1165 S High St",
        city: "Columbus",
        state: "OH",
        zip: 43206,
        lat: 39.9381674,
        lon: -82.9965461
    },
    {
        id: 08,
        facility_name: "GetGo Gas Station",
        address: "820 W 3rd Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.9847699,
        lon: -83.0267298
    },
    {
        id: 09,
        facility_name: "BIBIBOP Asian Grill",
        address: "1270 W 5th Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.9886586,
        lon: -83.040188
    },
    {
        id: 10,
        facility_name: "Grandview Center Shopping Mall",
        address: "1417 Grandview Ave",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.9863605,
        lon: -83.0447611
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
        lat: 36.9933131,
        lon: -86.4409516
    },
    {
        id: 27,
        facility_name: "Spencer's Coffee",
        address: "915 College St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.9937149,
        lon: -86.4420945
    },
    {
        id: 28,
        facility_name: "Dublin's Irish Pub",
        address: "904 State St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.9926623,
        lon: -86.4406484
    },
    {
        id: 29,
        facility_name: "Cliffs of Moher Irish Pub",
        address: "410 East Main Street",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.9936055,
        lon: -86.4412425
    },
    {
        id: 30,
        facility_name: "The Office at 912",
        address: "912 State St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.9926669,
        lon: -86.4406413
    },
    {
        id: 31,
        facility_name: "WKU Softball Field",
        address: "301-361 Marylan Ave",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.9802178,
        lon: -86.4640394
    },
    {
        id: 32,
        facility_name: "EA Diddle Arena",
        address: "1605 Avenue of Champions",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.98630026844749,
        lon: -86.45788299593002
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
