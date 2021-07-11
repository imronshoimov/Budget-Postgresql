const { fetch, fetchAll } = require('../../lib/postgres')

const INCOMES = `
    SELECT 
        id,
        type,
        cost,
        TO_CHAR(date, 'yyyy-MM-dd HH24:MI:SS') as date
    FROM income;
`

const INSERT_INCOME = `
    INSERT INTO income (
        type,
        cost
    ) VALUES ($1, $2)
    RETURNING *;
`

const DELETE_INCOME = `
    DELETE FROM income 
    WHERE id = $1
`

const getIncomes = () => fetchAll(INCOMES)

const insertIncome = ({ type, cost }) => fetch(INSERT_INCOME, type, cost - 0)

const deleteIncome = ({ incomeId }) => fetch(DELETE_INCOME, incomeId)


module.exports = { getIncomes, insertIncome, deleteIncome }