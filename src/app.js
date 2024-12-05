const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/routes')
const cors = require('cors')
const { errorMiddleware } = require('./middlewares/errorMiddleware')

const app = express()

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


// routes
app.use('/', routes)

app.use(errorMiddleware)

module.exports = app


