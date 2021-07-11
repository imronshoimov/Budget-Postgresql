const model = require('./model')

const GET = async (req, res) => {
    res.render('income.html', { incomes: await model.getIncomes() })
}

const POST = (req, res) => {
    try {
        let data = model.insertIncome(req.body)
        res.redirect('/income')
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}   

module.exports = { GET, POST }