const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const order = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        orderSubmitted: false
      }
    })

    const orderItems = await OrderItem.findAll({where: {orderId: order.id}})

    res.json({order, orderItems})
  } catch (err) {
    next(err)
  }
})
