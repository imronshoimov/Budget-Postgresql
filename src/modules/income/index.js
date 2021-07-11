const router = require('express').Router()
const { GET_MONEY, GET, POST } = require('./controller')

router.route('/income/money').get(GET_MONEY)

router.route('/income')
    .get(GET)
    .post(POST)

module.exports = router