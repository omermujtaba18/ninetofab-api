const express = require('express')
const { config } = require('./config/app')
require('dotenv').config()

const { authenticateDB } = require('./config/db')

const app = express()
const port = process.env.PORT

config(app)
authenticateDB()

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})
