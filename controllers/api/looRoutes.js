
const router = require('express').Router();
// const { contains } = require('sequelize/types/lib/operators');
const { Loo, Review, User } = require('../../models');
const withAuth = require('../../utils/auth');


// The `/api/loos` endpoint
// get loo data, include reviews + user [attribute: name, createdAt]

router.post('/', withAuth, async (req, res) => { //WORKING
    try {
        const newLoo = await Loo.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newLoo);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});


// router.get('/:id', async (req, res) => { //NOT WORKING
//     try { //maybe this will switch to createFind with haversine function
//         const selectedLoo = await Loo.findByPk(req.params.id);
//         //     include: [
//         //         {
//         //             model: Review,
//         //         },
//         //         {
//         //             model: User,
//         //         }
//         //     ]
//         // });

//         // Serialize data so the template can read it
//         const loo = selectedLoo.map((loo) => loo.get({ plain: true });

//         // Pass serialized data and session flag into template
//         res.render('selected_loo+reviews', {
//             loo,
//             reviews,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

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
