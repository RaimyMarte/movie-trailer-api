const express = require('express')
const movieRouter = require('./routers/movie')
const userRouter = require('./routers/user')
const cors = require('cors')

//Data Base
require('./db/dbConnection')

const app = express()
const port = 3000

//Config Express
app.use(cors())
app.use(express.json())
app.use(movieRouter)
app.use(userRouter)

app.listen(port, () => console.log('server en http://localhost:' + port))
