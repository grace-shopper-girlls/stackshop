const User = require('./user')
const Fruit = require('./fruit')
const Order = require('./order')
const OrderItem = require('./ordertItem')

Fruit.belongsToMany(Order, {through: OrderItem})
Order.belongsToMany(Fruit, {through: OrderItem})

Order.belongsTo(User)
User.hasMany(Order)

module.exports = {
  User,
  Fruit,
  Order,
  OrderItem
}
