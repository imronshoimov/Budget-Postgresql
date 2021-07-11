const express = require('express')
const ejs = require('ejs')
const path = require('path')

const { PORT } = require('./config')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))

const modules = require('./modules')
app.use(modules)

app.listen(PORT, () => console.log(PORT));