const { fetch, fetchAll } = require('../../lib/postgres')

const INCOME_COST = `
SELECT SUM(cost)
FROM income;
`
const EXPANCE_COST = `
SELECT SUM(cost)
FROM expance; 
`

const getIncomesCost = () => fetchAll(INCOME_COST)
const getExpancesCost = () => fetchAll(EXPANCE_COST)
const getTotal = async () => {
    return [ await fetchAll(INCOME_COST), await fetchAll(EXPANCE_COST) ]
}
module.exports = { getIncomesCost, getExpancesCost, getTotal }