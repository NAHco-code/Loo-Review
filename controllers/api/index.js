const router = require('express').Router();
const looRoutes = require('./looRoutes');
const rateRevRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/loos', looRoutes);
router.use('/reviews', rateRevRoutes);
router.use('/users', userRoutes);

module.exports = router;
