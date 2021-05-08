const router = require('express').Router();
const { User, Review, Loo } = require('../../models')

// NEW REVIEW FUNCTIONALITY
router.post('/', async (req, res) => { 
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
        console.log(err);
    }
});

// UPDATE REVIEW FUNCTIONALITY
router.put('/:id', async (req, res) => {
    try {
        const reviewUpdate = await Loo.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!reviewUpdate) {
            res.status(404).json({ message: 'No review to update!' })
        }
        res.status(200).json({ message: 'Review has been updated!' });
    } catch (err) {
        res.status(400).json(err)
        console.log(err);
    }
});

// DELETE REVIEW FUNCTIONALITY
router.delete('/:id', async (req, res) => {
    try {
        const staleReview = await Review.destroy({ where: { id: req.params.id } })
        if (!staleReview) {
            res.status(404).json({ message: 'No review found here!' });
        }
        res.status(200).json({ message: 'Loo has been removed' });
    } catch (err) {
        res.status(500).json(err)
    }
});


module.exports = router;

