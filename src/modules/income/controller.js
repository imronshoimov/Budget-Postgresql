const path = require('path')

const GET_MONEY = (req, res) => {
    res.sendFile(path.join(process.cwd(), 'src', 'views', 'income.html'))
}

const GET = (req, res) => {
    
}

const POST = (req, res) => {
    console.log(req.body);
}   

module.exports = { GET_MONEY, GET, POST }