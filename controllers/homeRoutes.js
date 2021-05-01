// COMPLETE + TESTED
    // get('/')
    //
// *reference homeRoutes in MVPunit student mini proj

const router = require('express').Router();
const { Loo, User, Review, Location } = require('../models'); //reads index.js
const withAuth = require('../utils/auth'); //fix password encryption & authentication

// TODO: homepageRoute renders nearby loos (through location)
router.get('/', async (req, res) => {
    // TODO: **Find nearby locations (mile radius?) || render saved/favorites
    
    try {
        // TODO: **What data are we using/are we able to use @here?**
        /* createFind? which method to use? */
        
        const looData = await Loo.findAll({ include: { model: Location } });
        
        const locationData = await Location.findAll/* createFind? which method to use? */({ include: { model: Loo } });

        // Serialize data so the template can read it
        const loos = looData.map((loos)=> loos.get({plain: true}))
        const locations = locationData.map((location) => location.get({ plain: true }));

        // Pass serialized data and session flag to template
        res.render('homepage', {
            loos
            //logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});



// TODO: /location/:id renders a specific loo + associated reviews
router.get('/location/:id', async (req, res) => {
    try {
        const looData = await Loo.findByPk(req.params.id, {through: {model: Location}});

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
