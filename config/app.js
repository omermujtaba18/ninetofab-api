const { json } = require('express')

const config = (app) => {
  app.use(json())
}

module.exports = { config }
