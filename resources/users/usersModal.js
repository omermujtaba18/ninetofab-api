const { db, DataTypes } = require('../../config/db')

const Users = db.define(
  'users',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email'
        }
      }
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_rest: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

module.exports = Users
