const router = require('express').Router()
const htmlRoutes = require('./html/html-routes');
//imports all the api routes from /api/index.js. WE won' t be referencing index.js as it is implied

const apiRoutes =('./apu');

router.use('/', htmlRoutes);

//add prefix of './api' to all the routes imported from the api directory.

router.use('/api', apiRoutes);

module.exports = router