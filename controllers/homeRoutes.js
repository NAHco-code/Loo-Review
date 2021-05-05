// From the homepage - we want to load nearby loos and map


// COMPLETE + TESTED
    // get ('/') homepage renders filtered loo data and map
    // get ('/loo/:id') route working - page not yet built
    // get ('/login')

// *reference homeRoutes in MVPunit student mini proj + ECommerce hs

const router = require('express').Router();
const { Loo, User, Review, UsersLoos } = require('../models'); //reads index.js
const withAuth = require('../utils/auth'); //fix password encryption & authentication

// TODO: homepageRoute renders nearby loos (through location)
// GET all loos
router.get('/', async (req, res) => { // WORKING
    try {
        // TODO: **What data are we using/are we able to use @here?**
        /* createFind? which method to use? */
        const looData = await Loo.findAll({ include: [ Review ] });

        //TODO: haversine function

        // Serialize data so the template can read it
        const loos = looData.map((loos) => loos.get({ plain: true }));


        // Pass serialized data and session flag to template
        // res.render('homepage', {
        //     //render map //make data call to render loos and populate map
        //     logged_in: req.session.logged_in
        // });
        res.status(200).json(looData); //for testing

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// TODO: /loo/:id renders a specific loo + associated reviews
router.get('/loo/:id', async (req, res) => { //WORKING
    try {
        const looData = await Loo.findByPk(req.params.id, { include: [ Review ] });

        const loo = looData.get({ plain: true });

        // res.render('selected_loo+reviews', {
        //     loo,
        //     logged_in: req.session.logged_in
        // });
        res.status(200).json(looData); //for testing

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Use withAuth middleware to prevent access to route
// router.get('/review', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: review }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('review', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }

//      *** once review is submitted, render loo page with
//            reviewed loo selected
// });


// TODO: how to write the route for adding a new loo



router.get('/login', (req, res) => { //WORKING
  // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});


module.exports = router;
