const router = require('express').Router();
const looRoutes = require('./looRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/loos', looRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;
