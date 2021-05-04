
const router = require('express').Router();
// const { contains } = require('sequelize/types/lib/operators');
const { Loo, Review, User } = require('../../models');
const withAuth = require('../../utils/auth');


// The `/api/loos` endpoint
// get loo data, include reviews + user [attribute: name, createdAt]

router.post('/', async (req, res) => { //NOT WORKING
    try {
        const newLoo = await Review.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(createUser)
        });
    } catch (err) {
        res.status(400).json(err)
    }
});


router.get('/loo', async (req, res) => { //NOT WORKING
    try { //maybe this will switch to createFind with haversine function
        const loos = await Loo.findAll();

        const userIds = loos.map(loo => loo.userId);
        const users = await User.findAll({ where: { id: userIds },
            include: [
                {
                    model: Review,
                },
                {
                    model: User,
                }
            ]
        });

        // Serialize data so the template can read it
        loos.map((loo) => loo.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('selected_loo+reviews', {
            loos,
            reviews,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });

// router.post('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });

// router.delete('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });


module.exports = router;
