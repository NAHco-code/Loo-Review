
//default file read when 'api' is required in another file

const router = require('express').Router();
const looRoutes = require('./looRoutes');
const userRoutes = require('./userRoutes');
// const reviewRoutes = require('./reviewRoutes');

router.use('/loos', looRoutes);
router.use('/users', userRoutes);
// router.use('/reviews', reviewRoutes);

module.exports = router;
