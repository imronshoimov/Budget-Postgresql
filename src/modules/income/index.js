const router = require('express').Router()
const { GET } = require('./controller')

router.route('/income')
    .get(GET)

module.exports = router