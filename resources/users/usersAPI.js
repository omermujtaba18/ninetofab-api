const { Router } = require('express')
const users = require('./usersController')
const router = Router()

/**
 * /users endpoints
 * */
router.route('/').get(users.getUsers).post(users.addUser)

/**
 * /users/:id endpoints
 * */
router
  .route('/:id')
  .get(users.getUserById)
  .patch(users.updateUserById)
  .delete(users.deleteUserById)

module.exports = router
