
//default file read when 'api' is required in another file

const router = require('express').Router();
const looRoutes = require('./looRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');

router.use('/loos', looRoutes);
// router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);

module.exports = router;
