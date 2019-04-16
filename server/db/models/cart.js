const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  totalPrice: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isDecimal: true
    }
  }
})

module.exports = Cart
