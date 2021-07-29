const express = require("express")
const app = express()

const cors = require('cors')


const loginRouter = require('./routes/loginRouter')
const apiRouter = require('./routes/apiRouter')


app.use(express.urlencoded({ extended: false })) //parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json()) //parse requests of content-type - application/json
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use('/api/login', loginRouter)
app.use('/api/todo', apiRouter)

module.exports = app