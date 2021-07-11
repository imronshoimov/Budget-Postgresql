const { fetch, fetchAll } = require('../../lib/postgres')

const EXPANCES = `
    SELECT 
        id,
        type,
        cost,
        date
    FROM expance;
`

const getExpances = () => fetchAll(EXPANCES)

module.exports = { getExpances }