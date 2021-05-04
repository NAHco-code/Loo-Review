// From the homepage - we want to load nearby loos and map


// COMPLETE + TESTED
    // get ('/') homepage renders
    // get ('/login')
// *reference homeRoutes in MVPunit student mini proj + ECommerce hs

const router = require('express').Router();
const { Loo, User, Review } = require('../models'); //reads index.js
const withAuth = require('../utils/auth'); //fix password encryption & authentication

// TODO: homepageRoute renders nearby loos (through location)
router.get('/', async (req, res) => {
    // TODO: **Find nearby locations (mile radius?) || render saved/favorites

    try {
        // TODO: **What data are we using/are we able to use @here?**
        /* createFind? which method to use? */

        const looData = await Loo.findAll();

        //haversine function?

        // Serialize data so the template can read it
        const loos = looData.map((loos) => loos.get({ plain: true }));

        // Pass serialized data and session flag to template
        res.render('homepage', {
            loos,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

// TODO: /loo/:id renders a specific loo + associated reviews
router.get('/loo/:id', async (req, res) => { //WORKING
    try {
        const looData = await Loo.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Review
                }
            ]
        });

        const loo = looData.get({ plain: true });

        res.render('selected_loo+reviews', {
            ...loo,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
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
