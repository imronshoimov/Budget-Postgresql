const model = require('./model')

const GET = async (req, res) => {
    console.log(await model.getExpances());
    res.render('expance.html', { expances: await model.getExpances() })
}

const POST = (req, res) => {
    try {
        let data = model.insertExpance(req.body)
        res.redirect('/expance')
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}   

const DELETE = (req, res) => {
    try {
        let data = model.deleteExpance(req.params)
        res.redirect('/expance')
    } catch(error){
        res.status(400).json({ message: error.message })
    }
}  

module.exports = { GET, POST, DELETE }

