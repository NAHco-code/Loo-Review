
const router = require('express').Router();
const { Loo } = require('../../models');

// NEW LOO FUNCTIONALITY
router.post('/', async (req, res) => { // *** WORKING
    try {
        const newLoo = await Loo.create({
            title: req.body.title,
            review: req.body.review,
            rating: req.body.rating,
            user_id: req.session.user_id,
        });

        res.status(200).json(newLoo);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// UPDATE LOO FUNCTIONALITY
router.put('/:id', async (req, res) => { // *** WORKING ***
    try {
        const freshLooData = await Loo.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!freshLooData) {
            res.status(404).json({ message: 'No loo found here!' })
        }
        res.status(200).json({ message: 'Loo has been updated!' });
    } catch (err) {
        res.status(400).json(err)
        console.log(err);
    }
});

// DELETE LOO FUNCTIONALITY
router.delete('/:id', async (req, res) => { // *** WORKING ***
    try {
        const staleLooData = await Loo.destroy({ where: { id: req.params.id } })
        if (!staleLooData) {
            res.status(404).json({ message: 'No loo found here!' });
        }
        res.status(200).json({ message: 'Loo has been removed' });
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;

