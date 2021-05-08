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
    {
        id: 11,
        facility_name: "Nationwide Arena",
        address: "200 W Nationwide Blvd",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.96942918575591, 
        lon: -83.00612340393856
    },
    {
        id: 12,
        facility_name: "Ohio Union",
        address: "1739 N High St",
        city: "Columbus",
        state: "OH",
        zip:43210,
        lat: 39.99849877017836, 
        lon: -83.00848900491522
    },
    {
        id: 13,
        facility_name: "Jeni's Splendid Ice Creams",
        address: "714 N High St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.977805419232354, 
        lon: -83.00320960492597
    },
    {
        id: 14,
        facility_name: "North Market Downtown",
        address: "59 Spruce St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.972563162062585, 
        lon: -83.00418998958487
    },
    {
        id: 15,
        facility_name: "Wheeler Memorial Park",
        address: "725 Thurber Dr W",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.97666940630532,
        lon: -83.01397108958295
    },
    {
        id: 16,
        facility_name: "Fox In The Snow Cafe",
        address: "210 Thurman Ave",
        city: "Columbus",
        state: "OH",
        zip: 43206,
        lat: 39.940293325364586, 
        lon: -82.9901386282267
    },
    {
        id: 17,
        facility_name: "Schmidt’s Sausage Haus und Restaurant",
        address: "240 E Kossuth St",
        city: "Columbus",
        state: "OH",
        zip: 43206,
        lat: 39.946959986485595, 
        lon: -82.99083038959839
    },
    {
        id: 18,
        facility_name: "Scioto Audubon Metro Park",
        address: "400 W Whittier St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.94877946810586, 
        lon: -83.00681083562849
    },
    {
        id: 19,
        facility_name: "The Pearl",
        address: "641 N High St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.97599186706173, 
        lon: -83.0031703895832
    },
    {
        id: 20,
        facility_name: "Land-Grant Brewing Company",
        address: "424 W Town St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.95808206587347,
        lon: -83.0114251290853
    },
    {
        id: 21,
        facility_name: "BrewDog Franklinton",
        address: "463 W Town St",
        city: "Columbus",
        state: "OH",
        zip: 43215,
        lat: 39.96429353977561, 
        lon: -83.01272946969017
    },
    {
        id: 22,
        facility_name: "Raising Cane's Chicken Fingers",
        address: "21 Old Village Rd",
        city: "Columbus",
        state: "OH",
        zip: 43228,
        lat: 39.98168623912561, 
        lon: -83.1254212723097
    },
    {
        id: 23,
        facility_name: "CrossFit Grandview",
        address: "880 Kinnear Rd",
        city: "Columbus",
        state: "OH",
        zip: 43212,
        lat: 39.999235130931254, 
        lon: -83.03209993560222
    },
    {
        id: 24,
        facility_name: "Virtue Salon",
        address: "3282 N High St",
        city: "Columbus",
        state: "OH",
        zip: 43202,
        lat: 40.029786949091765, 
        lon: -83.0151287816175
    },
    {
        id: 25,
        facility_name: "Katalina's in Harrison West",
        address: "1105 Pennsylvania Ave",
        city: "Columbus",
        state: "OH",
        zip: 43201,
        lat: 39.984471090296736, 
        lon: -83.01597819698493
    },
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
    {
        id: 33,
        facility_name: "Taqueria Los Vazquez Llc",
        address: "850 Morgantown Rd",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.989111186832865, 
        lon: -86.47380543929043
    },
    {
        id: 34,
        facility_name: "Zaxby's Chicken Fingers & Buffalo Wings",
        address: "1801 US Highway 31",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.97954376990842, 
        lon: -86.45391316688765
    },
    {
        id: 35,
        facility_name: "Lost River Cave",
        address: "2818 Nashville Rd",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.95806520861739, 
        lon: -86.4723349024903
    },
    {
        id: 36,
        facility_name: "National Corvette Museum",
        address: "350 Corvette Dr",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 37.00796255564621, 
        lon: -86.37435662447955
    },
    {
        id: 37,
        facility_name: "Ogden Park",
        address: "1600 Park St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.985303994308026, 
        lon: -86.4518890851841
    },
    {
        id: 38,
        facility_name: "Kroger",
        address: "350 U.S. 31 W Bypass",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 37.00269662567043, 
        lon: -86.42456426244031
    },
    {
        id: 39,
        facility_name: "Shipley's Service Station",
        address: "1248 Center St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.995538710930894, 
        lon: -86.44997023898773
    },
    {
        id: 40,
        facility_name: "Anytime Fitness",
        address: "164 Iron Skillet Ct",
        city: "Bowling Green",
        state: "KY",
        zip: 42104,
        lat: 36.93605790423971, 
        lon: -86.41465906906683
    },
    {
        id: 41,
        facility_name: "Spencer's Coffee",
        address: "915 College St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.999381506094906, 
        lon: -86.44212502155548
    },
    {
        id: 42,
        facility_name: "The Derby Piano and Dessert Bar",
        address: "635 College St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 37.002082294298916, 
        lon: -86.43903524930307
    },
    {
        id: 43,
        facility_name: "CBD Spot & smoke shop",
        address: "1248 U.S. 31 W Bypass",
        city: "Bowling Green",
        state: "KY",
        zip: 432101,
        lat: 36.98883823007571, 
        lon: -86.4407521280462
    },
    {
        id: 44,
        facility_name: "Bowling Green Ballpark",
        address: "300 E 8th Ave",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 37.00168486513042, 
        lon: -86.4441854880421
    },
    {
        id: 45,
        facility_name: "Regal Greenwood Mall",
        address: "2625 Scottsville Rd",
        city: "Bowling Green",
        state: "KY",
        zip: 42103,
        lat: 36.95578031552061, 
        lon: -86.43085964598122
    },
    {
        id: 46,
        facility_name: "The Bistro",
        address: "1129 College St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.997936133991985, 
        lon: -86.44514069198976
    },
    {
        id: 47,
        facility_name: "Gerard's 1907 Tavern",
        address: "935 College St",
        city: "Bowling Green",
        state: "KY",
        zip: 42101,
        lat: 36.99930710753142, 
        lon: -86.44273743274047
    },
    {
        id: 48,
        facility_name: "Bark Park at H.P. Thomas Park",
        address: "850 Cave Mill Rd",
        city: "Bowling Green",
        state: "KY",
        zip: 42104,
        lat: 36.95428515017682, 
        lon: -86.46196363918068
    },
    {
        id: 49,
        facility_name: "Lovers Lane Soccer Complex",
        address: "385 Lovers Ln",
        city: "Bowling Green",
        state: "KY",
        zip: 42103,
        lat: 36.98334320207736, 
        lon: -86.40398709304574
    },
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
