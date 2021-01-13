const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
)

const authenticateDB = async () => {
  try {
    await db.authenticate()
    console.log('Database connection has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

module.exports = { db, authenticateDB, DataTypes }
