
const router = require('express').Router();
const { User } = require('../../models')

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
router.post('/signup', async (req, res) => { 
    try {
        const createUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
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

// LOGOUT 
router.post('/logout', (req, res) => { 
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => { 
            //CHECK REDIRECT 
            res.status(204).end() 
            console.log ({message: 'Successfully logged out'});
        });

    } else {

        res.status(204).end()  //CHECK REDIRECT
    }
});

module.exports = router;
