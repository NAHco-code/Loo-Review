
//default file read when 'api' is required in another file

const router = require('express').Router();
const looRoutes = require('./looRoutes');
const reviewRoutes = require('./reviewRoutes');
const userRoutes = require('./userRoutes');
// const locationRoutes = require('./locationRoutes');

//router.use('/loos', looRoutes);
//router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
<<<<<<< HEAD
// router.use('/locations', locationRoutes);
=======
//router.use('/locations', locationRoutes);
>>>>>>> a287c0f5335444dc2c39a9922c3bc0e65d8690ee

module.exports = router;
