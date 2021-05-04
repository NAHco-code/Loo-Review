// ALMOST COMPLETE - NEEDS TESTED + CHECKED
// *reference userRoutes in MVPunit student mini proj

const router = require('express').Router();
const { User } = require('../../models')

// home route - user posts searches, loos, and reviews on homepage (TODO: this codeblock is questionable - needs a second look)
router.post('/create', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        // TODO: edge cases - if username exists
        // req.session.save(() => {
        //     req.session.user_id = userData.id;
        //     req.session.logged_in = true;

        //     res.status(200).json(userData);
        // });
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// create user route
// router.post('/create', async (req, res) => {
//     try {
//         const userData = await User.create({
//             name: req.body.name,
//             username: req.body.username,
//             email: req.body.email,
//             password: req.body.password
//         })

//     } catch (err) {
//         res.status(400).json(err);
//     }
// });


// login route - user posts userdata to login or create acct
router.post('/login', async (req, res) => {
    //
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please create an account or try again.' });
            return;
        }

        const isValidPassword = await userData.checkPassword(req.body.password);

        if (!isValidPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please create an account or try again.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged In!' });
        });

        // res.json({ user: userData, message: 'Logged In!' });

    } catch (err) {
        res.status(400).json(err);
    }
});

// logout route -
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
