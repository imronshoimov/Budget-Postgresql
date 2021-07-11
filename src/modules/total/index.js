const router = require('express').Router()
const { GET } = require('./controller')

router.route('/tolal')
    .get(GET)

module.exports = router