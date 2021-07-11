const router = require('express').Router()
const { GET, POST, DELETE } = require('./controller')

router.route('/expance')
    .get(GET)
    .post(POST)


router.route('/expance/delete/:expanceId')
    .get(DELETE)

module.exports = router