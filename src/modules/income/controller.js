const GET_MONEY = (req, res) => {
    res.render('income.html')
}

const GET = (req, res) => {
    
}

const POST = (req, res) => {
    console.log(req.body);
}   

module.exports = { GET_MONEY, GET, POST }