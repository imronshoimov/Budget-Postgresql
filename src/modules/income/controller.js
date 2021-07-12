const model = require('./model')

const GET = async (req, res) => {
    res.render('income.html', { incomes: await model.getIncomes() })
}

const POST = (req, res) => {
    try {
        let data = model.insertIncome(req.body)
        res.status(201).redirect('/income')
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}   

const DELETE = (req, res) => {
    try {
        let data = model.deleteIncome(req.params)
        res.redirect('/income')
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}  

module.exports = { GET, POST, DELETE }