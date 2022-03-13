const router = require('express').Router()
const userRoutes = require('./api/user-routes')
const thoughtRoutes = require ('./api./thought-routes')
//imports all the api routes from /api/index.js. WE won' t be referencing index.js as it is implied

//these are the routes we use

router.use('/User', userRoutes)
router.use('/Thoughts', thoughtRoutes)

module.exports = router