const router = require('express').Router()

// add routes here

// do not need path here.. it is essentially the same as having '/' as the first parameter
router.use((req, res, next) => {
    const error = new Error ('not found.')
    error.status = 404
    next(error)
})

module.exports = router 

