
const router = require('express').Router();
// const { contains } = require('sequelize/types/lib/operators');
const { Loo, Review, User } = require('../../models');

// post new loo
// update loo
// delete loo


// NEW LOO FUNCTIONALITY
router.post('/', async (req, res) => { // *** WORKING
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

// UPDATE LOO FUNCTIONALITY

// DELETE LOO FUNCTIONALITY

// router.delete('/loo/:id', async (req, res) => {
//     // try {
//     //     const looData
//     // }
// });


module.exports = router;
// /api/loos (api endpoint)

// post (new loo)
// put (update loo)
// delete (delete loo)
