const User = require('./user')
const Fruit = require('./fruit')
const Cart = require('./cart')
const CartItem = require('./cartItem')


Fruit.belongsToMany(Cart, {through: CartItem})
Cart.belongsToMany(Fruit, {through: CartItem})

Cart.belongsTo(User)
User.hasMany(Cart)


module.exports = {
  User,
  Fruit,
  Cart,
  CartItem
}
