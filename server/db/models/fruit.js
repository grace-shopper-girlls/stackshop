const Sequelize = require('sequelize')
const db = require('../db')

const Fruit = db.define('fruit', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    validate: {
      isDecimal: true
    },
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true
    },
    allowNull: false,
    min: 0
  }
})

module.exports = Fruit
