const model = require('./model')

const GET = async (req, res) => {
    res.render('income.html', { expances: await model.getExpances() })
}

const POST = (req, res) => {
    try {
        model.insertIncome(req.body)
        res.redirect('/income')
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}   

module.exports = { GET, POST }