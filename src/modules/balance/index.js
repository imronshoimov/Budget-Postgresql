const router = require('express').Router()
const { GET } = require('./controller')

router.route('/balance')
    .get(GET)

module.exports = router