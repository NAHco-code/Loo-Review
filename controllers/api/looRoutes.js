
const router = require('express').Router();
// const { contains } = require('sequelize/types/lib/operators');
const { Loo, Review, User } = require('../../models');
const withAuth = require('../../utils/auth');
const haversine= require('s-haversine');
console.log(haversine);

// The `/api/loos` endpoint
// get loo data, include reviews + user [attribute: name, createdAt]
router.get('/', async (req, res) => {
    // req.query.lat
    // const testlooLoc = [{
    //     id: 01,
    //     facility_name: "Starbucks",
    //     address: "1570 Olentangy River Rd",
    //     city: "Columbus",
    //     state: "OH",
    //     zip: 43212,
    //     lat: -34.397,
    //     lon: 150.644
    // },
    // {
    //     id: 02,
    //     facility_name: "Starbucks",
    //     address: "1085 W 5th Ave",
    //     city: "Columbus",
    //     state: "OH",
    //     zip: 43212,
    //     lat: -36.397,
    //     lon: 151.644
    // },]

    try {
        const looData = await Loo.findAll({ include: [Review] });

        const loos = looData.map((loos) => loos.get({ plain: true }));

        const filteredLoos = loos.filter((loo) => {
            //filter - in the return you give a condition - to return true or false
            console.log(req.query);
            console.log( )
            return haversine.default.distance([Number(req.query.lat), Number(req.query.lon)], [loo.lat, loo.lon]) < 1609.34 * 10;
        })
        console.log(filteredLoos);
    } catch (err) {
        console.log(err);
    }
})

// /api/loos?lat=33.333&lon=-123 *URL *lat1 lng1
// when user adds loo - must take address and feed it into geolocation and get lat + long
// will have to update the map with the rendered loo markers





router.post('/', withAuth, async (req, res) => { //WORKING
    try {
        const newLoo = await Loo.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newLoo);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});


// router.get('/:id', async (req, res) => { //NOT WORKING
//     try { //maybe this will switch to createFind with haversine function
//         const selectedLoo = await Loo.findByPk(req.params.id);
//         //     include: [
//         //         {
//         //             model: Review,
//         //         },
//         //         {
//         //             model: User,
//         //         }
//         //     ]
//         // });

//         // Serialize data so the template can read it
//         const loo = selectedLoo.map((loo) => loo.get({ plain: true });

//         // Pass serialized data and session flag into template
//         res.render('selected_loo+reviews', {
//             loo,
//             reviews,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// router.get('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });

// router.post('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });

// router.delete('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });


module.exports = router;
