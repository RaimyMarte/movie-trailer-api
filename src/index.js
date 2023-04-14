const express = require('express')
const movieRouter = require('./routers/movie')
const userRouter = require('./routers/user')
const cors = require('cors')

const serverless = require('serverless-http')

//Data Base
require('./db/dbConnection')

const app = express()
const port = 3000

//Config Express
app.use(cors())
app.use(express.json())
app.use('/.netlify/functions/movie', movieRouter)
app.use('/.netlify/functions/user', userRouter)

app.listen(port, () => console.log('server en http://localhost:' + port))

module.exports.handler = serverless(app)