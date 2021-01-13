const { json } = require('express')
const users = require('../resources/users/usersAPI')

const config = (app) => {
  app.use(json())
  app.use('/users', users)
}

module.exports = { config }
