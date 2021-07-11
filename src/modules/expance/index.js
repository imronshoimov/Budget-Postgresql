const router = require('express').Router()
const { GET } = require('./controller')

router.route('/expance')
    .get(GET)

module.exports = router