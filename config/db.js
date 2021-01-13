const { Sequelize } = require('sequelize')

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    logging: false
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

module.exports = { db, authenticateDB }
