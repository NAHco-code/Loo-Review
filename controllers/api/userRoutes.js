
const router = require('express').Router();
const { User } = require('../../models')

// create user route
router.post('/', async (req, res) => { //WORKING
    try {
        const createUser = await User.create(req.body);
        // TODO: edge cases - if username exists
        req.session.save(() => {
            req.session.user_id = createUser.id;
            req.session.logged_in = true;

            res.status(200).json(createUser);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// login route - user posts userdata to login or create acct
router.post('/login', async (req, res) => {
    //
    try {
        const userLogIn = await User.findOne({ where: { email: req.body.email } });

        if (!userLogIn) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please create an account or try again.' });
            return;
        }

        // const isValidPassword = await userData.checkPassword(req.body.password);

        // if (!isValidPassword) {
        //     res
        //         .status(400)
        //         .json({ message: 'Incorrect email or password, please create an account or try again.' });
        //     return;
        // }

        req.session.save(() => {
            req.session.user_id = userLogIn.id;
            req.session.logged_in = true;

            res.json({ user: userLogIn, message: 'Logged In!' });
        });

    } catch (err) {
        res.status(400).json(err);
        //console.log(err.message)
    }
});

// logout route
router.post('/logout', (req, res) => { //WORKING //TODO: redirect to login
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }

});

module.exports = router;
