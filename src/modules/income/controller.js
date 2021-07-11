const model = require('./model')

const GET = (req, res) => {
    res.render('income.html', { expances: await model.getExpances() })
}

const POST = (req, res) => {
    console.log(req.body);
}   

module.exports = { GET_MONEY, GET, POST }