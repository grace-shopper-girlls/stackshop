const AuthUser = require('./authUser')
const Fruit = require('./fruit')
const Cart = require('./cart')
const CartItem = require('./cartItem')


Fruit.belongsToMany(Cart, {through: CartItem})
Cart.belongsToMany(Fruit, {through: CartItem})

Cart.belongsTo(AuthUser)
AuthUser.hasMany(Cart)


module.exports = {
  AuthUser,
  Fruit,
  Cart,
  CartItem
}
