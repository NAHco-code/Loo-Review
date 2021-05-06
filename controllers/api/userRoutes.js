
const router = require('express').Router();
const { User } = require('../../models')

// post new user
// post log in user
// put update user
// post log out user

// LOGIN FUNCTIONALITY
router.post('/login', async (req, res) => { // *** WORKING
    //
    try {
        const userLogIn = await User.findOne({ where: { email: req.body.email } });

        // if (!userLogIn) {
        //     res
        //         .status(400)
        //         .json({ message: 'Incorrect email or password, please create an account or try again.' });
        //     return;
        // }

        const isValidPassword = await userLogIn.checkPassword(req.body.password);

        // if (!isValidPassword) { // NOT WORKING
        //     res
        //         .status(400)
        //         .json({ message: 'Incorrect email or password, please create an account or try again.' });
        //     return;
        // }

        req.session.save(() => {
            req.session.user_id = userLogIn.id;
            req.session.logged_in = true;

            res
                .status(200)
                .json({ user: userLogIn, message: 'Logged In!' });
            // res.redirect('/main');
        });

    } catch (err) {
        res.status(500).json(err);
        //console.log(err.message)
    }
});

// CREATE NEW USER FUNCTIONALITY
router.post('/signup', async (req, res) => { // *** WORKING ** PW returns hashed in response
    try {
        const createUser = await User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        // TODO: edge cases - if username exists
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = createUser;


            res.status(200).json(createUser);
        });
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// LOGOUT //*not necessary
router.post('/logout', (req, res) => { // *** WORKING
    if (req.session.logged_in) {
        req.session.destroy(() => { // Remove the session variables

            res.status(204).end() //CHECK REDIRECT * font end js?
            console.log ({message: 'Successfully logged out'});
        });

    } else {

        res.status(204).end()  //CHECK REDIRECT
    }
});

module.exports = router;
// /api/users (api endpoint)
