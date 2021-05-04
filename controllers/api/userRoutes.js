// NEEDS TESTED + CHECKED

const router = require('express').Router();
const { User } = require('../../models')

// create user route
router.post('/', async (req, res) => {
    try {
        const createUser = await User.create(req.body);
        // TODO: edge cases - if username exists
        req.session.save(() => {
            req.session.user_id = createUser.id;
            req.session.logged_in = true;

            res.status(200).json(createUser);
        });
        res.status(200).json(createUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

// another format for create user route // TODO: assess
// router.post('/create', async (req, res) => {
//     try {
//         const createUser = await User.create({
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
            req.session.user_id = userLogIn.id;
            req.session.logged_in = true;

            res.json({ user: userLogIn, message: 'Logged In!' });
        });

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
