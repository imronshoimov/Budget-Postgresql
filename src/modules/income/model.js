const { fetch, fetchAll } = require('../../lib/postgres')

const INCOMES = `
    SELECT 
        id,
        type,
        cost,
        date
    FROM expance;
`

const INSERT_INCOME = `
    INSERT INTO income (
        type,
        cost
    ) VALUES ($1, $2)
    RETURNING *
`

const getExpances = () => fetchAll(INCOMES)

const insertIncome = ({ type, cost }) => fetch(INSERT_INCOME, type, +cost)

module.exports = { getExpances, insertIncome }