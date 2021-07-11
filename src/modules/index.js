const homeRouter = require('./home')
const incomeRouter = require('./income')
const expanceRouter = require('./expance')
const totalRouter = require('./total')

module.exports = [
    homeRouter,
    incomeRouter,
    expanceRouter,
    totalRouter
]