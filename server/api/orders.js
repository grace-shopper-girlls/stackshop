const router = require('express').Router()
const {Order, OrderItem} = require('../db/models')

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const cart = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        orderSubmitted: false
      },
      include: [{model: OrderItem}]
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})

