
const router = require('express').Router();
const { User } = require('../../models')

// post new user
// post log in user
// put update user
// post log out user

// LOGIN FUNCTIONALITY
router.post('/', async (req, res) => {
    //
    try {
        const userLogIn = await User.findOne({ where: { email: req.body.email } });

        if (!userLogIn) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please create an account or try again.' });
            return;
        }

        const isValidPassword = await userLogIn.checkPassword(req.body.password);

        if (!isValidPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please create an account or try again.' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userLogIn.isSoftDeleted;
            req.session.logged_in = true;

            res.json({ user: userLogIn, message: 'Logged In!' });
        });

    } catch (err) {
        res.status(400).json(err);
        //console.log(err.message)
    }
});

// CREATE NEW USER FUNCTOINALITY
router.post('/new-user', async (req, res) => { //WORKING
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

// LOGOUT //*not necessary
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).then(
                res.render('/').end()
            );
        });
    } else {
        res.status(204).then(
            res.render('/').end()
        );
    }
});

module.exports = router;
