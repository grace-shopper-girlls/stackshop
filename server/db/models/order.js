const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderDate: {
    type: Sequelize.DATE
  },
  orderSubmitted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  buyerName: {
    type: Sequelize.STRING
  },
  shippingAddress: {
    type: Sequelize.STRING
  },
  billingAddress: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  subtotal: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    allowNull: false
  },
  shippingCost: {
    type: Sequelize.FLOAT
  },
  grandTotal: {
    type: Sequelize.FLOAT,
    defaultValue: 0,
    allowNull: false
  }
})

module.exports = Order
