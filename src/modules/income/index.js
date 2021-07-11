const router = require('express').Router()
const { GET, POST } = require('./controller')

router.route('/income')
    .get(GET)
    .post(POST)

module.exports = router