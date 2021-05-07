
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

// Use withAuth middleware to prevent access to route
// do we need this on the homepage route??
// router.get('/main', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findAll({
//         attributes: { exclude: ['password'] },
//         include: [Loo, Review],
//       });

//       const user = userData.get({ plain: true });

//       res.render('signup', {
//         ...user,
//         logged_in: true
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//show main page behind authetication
// MAIN PAGE //*render filtered loos (( + map?? )) *** WORKING
router.get('/main', async (req, res) => {
    try {
        const looData = await Loo.findAll({ include: [Review] });

        const loos = looData.map((loos) => loos.get({ plain: true }));

        // filter loos (based on user location) using haversine npm package
        const filteredLoos = loos.filter((loo) => { // filter expects a condition

            const distance = haversine.default.distance([Number(req.query.lat), Number(req.query.lng)], [Number(loo.lat), Number(loo.lon)])
            console.log(distance)
            return distance < 1609.34 * 10; // Meter to mile conversion // 10 mile radius

        })
        res.render('homepage', {
            //render map //make data call to render loos and populate map
            layout: 'main',
            logged_in: req.session.logged_in,
            filteredLoos,
        });
        console.log(filteredLoos);
    } catch (err) {
        // console.log(err);
        res.status(500).json(err);
    }

    // NOTES FOR FRONT END
// /api/loos?lat=33.333&lng=-123 *URL *lat1 lng1
// when user adds loo - must take address and feed it into geolocation and get lat + lng
// will have to update the map with the rendered loo markers
})

// show selected loo - behind authentication
// VIEW LOO PAGE
router.get('/loo/:id', async (req, res) => { // *** WORKING
// TODO: /loo/:id renders a specific loo + associated reviews
    try {
        const looData = await Loo.findByPk(req.params.id, { include: [Review] });
        // get review data, include loo + user [attribute: name, createdAt]

        const loo = looData.get({ plain: true });// Serialize data so the template can read it

        res.render('view-loo', {
            layout: 'main',
            logged_in: req.session.logged_in,
            loo
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
