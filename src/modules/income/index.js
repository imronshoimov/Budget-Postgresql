const router = require('express').Router()
const { GET, POST, DELETE } = require('./controller')

router.route('/income')
    .get(GET)
    .post(POST)

router.route('/income/delete/:incomeId')
    .get(DELETE)

module.exports = router