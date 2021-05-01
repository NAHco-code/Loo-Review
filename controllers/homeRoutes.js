// ALMOST COMPLETE - NEEDS TESTED + CHECKED
// *reference homeRoutes in MVPunit student mini proj

const router = require('express').Router();
const { Loo, User, Review, Location } = require('../models'); //reads index.js
const withAuth = require('../utils/auth'); //fix password encryption & authentication

// TODO: homepageRoute renders nearby loos (through location)
router.get('/', async (req, res) => {
    // TODO: **Find nearby locations (mile radius?) || render saved/favorites
    console.log(req.session)
    try {
        // TODO: **What data are we using/are we able to use @here?**
        /* createFind? which method to use? */
        
        const LooData = await Loo.findAll({ include: { model: Location } });
        
        // Serialize data so the template can read it
        const loos = LooData.map((loo) => loo.get({ plain: true }));

        // Pass serialized data and session flag to template
        res.render('homepage', {
            loos
            //logged_in: req.session.logged_in
        });
    } catch (err) {
        
        res.status(500).json(err);
    }
});



// TODO: /loo/:id renders a specific loo + associated reviews
router.get('/loo/:id', async (req, res) => {
    try {
        const looData = await Loo.findByPk(req.params.id, {include: {model: Location}});

        const loo = looData.get({ plain: true });

        res.render('loo', {
            ...loo,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// TODO: with Auth
// code block from mini proj
// Use withAuth middleware to prevent access to route

// router.get('/profile', withAuth, async (req, res) => {
//     try {
//         // Find the logged in user based on the session ID
//         const userData = await User.findByPk(req.session.user_id, {
//             attributes: { exclude: ['password'] },
//             include: [{ model: Project }],
//         });

//         const user = userData.get({ plain: true });

//         res.render('profile', {
//             ...user,
//             logged_in: true
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//TODO: redirect  // If the user is already logged in, redirect the request to another route

//router.get('/login', (req, res) => {

//     if (req.session.logged_in) {
//         res.redirect('/profile');
//         return;
//     }

//     res.render('login');
// });

module.exports = router;
