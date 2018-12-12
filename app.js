const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')


const models = require('./models')
const routes = require('./routes')

const app = express()

//Midleware
app.use(morgan('dev'))
app.use(bodyParser.json())

//Routes
app.use(routes)
// app.use('/api', require('./routes/userRoute'))

//Models
app.use(models)

//Server
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})


