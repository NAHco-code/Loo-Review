
const router = require('express').Router();
const sequelize = require('../config/connection')
const { Loo, User, Review, UsersLoos } = require('../models');
// const { QueryTypes } = require('sequelize');
const withAuth = require('../utils/auth'); // authorization middleware
const haversine = require('s-haversine');



//LOGIN PAGE //*redirect to main page once logged in *** WORKING
router.get('/', (req, res) => {
    // If the user is already logged in,
    if (req.session.logged_in) {
        // redirect to main page
        res.redirect('/main'); 
        return;
    }

    res.render('login');
});

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
// MAIN PAGE //*render 
router.get('/main', async (req, res) => {
    console.log(req.query);

    try {
        const looData = await Loo.findAll({ include: [Review] });

        const loos = looData.map((loos) => loos.get({ plain: true }));

        // filter loos (based on user location) using haversine npm package
        // filter expects a condition
        const filteredLoos = loos.filter((loo) => { 

            const distance = haversine.default.distance([Number(req.query.lat), Number(req.query.lng)], [Number(loo.lat), Number(loo.lon)])
            console.log(distance)
            return distance < 1609.34 * 100; 

        })
        if (Object.keys(req.query).length === 0) {
            res.render('homepage', {
                //render map //make data call to render loos and populate map
                layout: 'main',
                logged_in: req.session.logged_in,
                // filteredLoos,
            });
        } else {
            res.json(filteredLoos);
            console.log(filteredLoos);
        }




    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

    
})

// show selected loo - behind authentication
// VIEW LOO PAGE
router.get('/loo/:id', async (req, res) => { // *** WORKING
// TODO: /loo/:id renders a specific loo + associated reviews
    try {
        const looData = await Loo.findByPk(req.params.id, { include: [Review] });
        // get review data, include loo + user [attribute: name, createdAt]
        console.log(looData.reviews);
        const loo = looData.get({ plain: true });// Serialize data so the template can read it
        // const user = userData.get({ plain: true });

        res.render('view-loo', {
            layout: 'main',
            logged_in: req.session.logged_in,
            loo,
            // user
        });
        //res.status(200).json(looData); //for testing


    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;
