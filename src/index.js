const express = require('express')
const movieRouter = require('./routers/movie')
const userRouter = require('./routers/user')
const cors = require('cors')
const serverless = require('serverless-http')

//Data Base
require('./db/dbConnection')

const app = express()

//Config Express
app.use(cors())
app.use(express.json())
app.use('/.netlify/functions/api', movieRouter)
app.use('/.netlify/functions/api', userRouter)

module.exports.handler = serverless(app)