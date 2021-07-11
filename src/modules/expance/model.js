const { fetch, fetchAll } = require('../../lib/postgres')

const EXPANCES = `
    SELECT 
        id,
        type,
        cost,
        TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date
    FROM expance;
`

const INSERT_EXPANCE = `
    INSERT INTO expance (
        type,
        cost
    ) VALUES ($1, $2)
    RETURNING *
`

const getExpances = () => fetchAll(EXPANCES)

const insertExpance = ({ type, cost }) => fetch(INSERT_EXPANCE, type, cost - 0)

module.exports = { getExpances, insertExpance }


