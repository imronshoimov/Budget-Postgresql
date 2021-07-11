const router = require('express').Router()
const { GET, GET_MONEY } = require('./controller')

router.route('/total/money').get(GET_MONEY)

router.route('/tolal')
    .get(GET)

module.exports = router