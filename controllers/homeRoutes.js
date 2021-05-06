
const router = require('express').Router();
const sequelize = require('../config/connection')
const { Loo, User, Review, UsersLoos } = require('../models');
// const { QueryTypes } = require('sequelize');
const withAuth = require('../utils/auth'); // authorization middleware
const haversine = require('s-haversine');
console.log(haversine);

// *get render login
// *get render filtered loos
// get map??
// *get loo by id


//LOGIN PAGE //*redirect to main page once logged in *** WORKING
router.get('/', (req, res) => {

    if (req.session.logged_in) {// If the user is already logged in,
        res.redirect('/main'); // redirect to main page
        return;
    }

    res.render('login');
});

// ** get new user page? - same as log in page - post route is different - why? **


// MAIN PAGE //*render filtered loos (( + map?? )) *** WORKING
router.get('/main', async (req, res) => {

    try {
        const looData = await Loo.findAll({ include: [Review] });

        const loos = looData.map((loos) => loos.get({ plain: true }));

        // filter loos (based on user location) using haversine npm package
        const filteredLoos = loos.filter((loo) => { // filter expects a condition

            console.log(req.query);
            console.log( )
            return haversine.default.distance([Number(req.query.lat), Number(req.query.lon)], [loo.lat, loo.lon]) < 1609.34 * 10; // Meter to mile conversion // 10 mile radius
        })
        res.render('homepage', {
            //render map //make data call to render loos and populate map
            loos,
            logged_in: req.session.logged_in
        });
        console.log(filteredLoos);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

    // NOTES FOR FRONT END
// /api/loos?lat=33.333&lon=-123 *URL *lat1 lng1
// when user adds loo - must take address and feed it into geolocation and get lat + long
// will have to update the map with the rendered loo markers
})


// VIEW LOO PAGE
router.get('/loo/:id', async (req, res) => { // *** WORKING
// TODO: /loo/:id renders a specific loo + associated reviews
    try {
        const looData = await Loo.findByPk(req.params.id, { include: [Review] });
        // get review data, include loo + user [attribute: name, createdAt]

        const loo = looData.get({ plain: true });// Serialize data so the template can read it

        res.render('view-loo', {
            loo,
            logged_in: req.session.logged_in
        });
        //res.status(200).json(looData); //for testing


    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
// / (api endpoint)

// / (log in)
// /main (homepage)
// /loo/:id (selected_loo+reviews)
