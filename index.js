require('dotenv').config()

const path = require('path')
const express = require('express')
const authRouter = require('./routers/auth.router')

const app = express()
const PORT = process.env.PORT


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(authRouter)

app.listen(PORT, () => {
    console.log(`Server load with port: ${PORT}`)
})