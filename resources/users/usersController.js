const User = require('./usersModal')

const getUsers = async (req, res) => {
  const users = await User.findAll({ raw: true })
  res.status(200).json(users)
}

const getUserById = async (req, res) => {
  const user = await User.findByPk(req.params.id, { raw: true })
  res.status(200).json(user)
}

const addUser = async (req, res) => {
  try {
    await User.create(req.body, {
      fields: [
        'user_name',
        'user_email',
        'user_password',
        'user_role',
        'user_rest'
      ]
    })
    res.status(201).send()
  } catch (error) {
    res.status(404).json(error.errors)
  }
}

const updateUserById = async (req, res) => {
  try {
    await User.update(req.body, {
      where: { user_id: req.params.id },
      fields: [
        'user_name',
        'user_email',
        'user_password',
        'user_role',
        'user_rest'
      ]
    })
    res.status(200).send()
  } catch (error) {
    res.status(404).json(error.errors)
  }
}

const deleteUserById = async (req, res) => {
  try {
    await User.destroy({
      where: { user_id: req.params.id }
    })
    res.status(200).send()
  } catch (error) {
    res.status(404).json(error.errors)
  }
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById
}
