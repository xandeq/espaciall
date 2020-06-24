const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then( () => {
    console.log("CONECTADO")
}).catch((err) => {
    console.log("Erro: " + err)
})

mongoose.connection.on('error', err => {
    console.log('Conexão com erro')
})

const nasaRoutes = require('./routes/nasa')

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use("/nasa",nasaRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => { console.log('Node startou na porta ' + port)})