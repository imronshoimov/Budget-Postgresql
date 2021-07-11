const router = require('express').Router()
const { GET } = require('./controller')

router.route('/total')
    .get(GET)

module.exports = router