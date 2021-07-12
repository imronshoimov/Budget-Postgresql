const model = require('./model')

const GET = async (req, res) => {
    console.log((await model.getTotal())[0]);
    res.render('total.html', { 
        incomes: await model.getIncomesCost(), 
        expances: await model.getExpancesCost(),
        total: await model.getTotal()
    })
}

module.exports = { GET }