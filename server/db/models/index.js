const User = require('./user')
const Fruit = require('./fruit')
const Order = require('./order')
const OrderItem = require('./orderItem')

Order.belongsToMany(Fruit, {through: OrderItem})
Fruit.belongsToMany(Order, {through: OrderItem})

Order.belongsTo(User)
User.hasMany(Order)

module.exports = {
  User,
  Fruit,
  Order,
  OrderItem
}
