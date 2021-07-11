const router = require('express').Router()
const { GET, GET_MONEY } = require('./controller')

router.route('/expance/money').get(GET_MONEY)

router.route('/expance')
    .get(GET)

module.exports = router