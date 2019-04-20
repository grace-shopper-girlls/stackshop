const router = require('express').Router()
const {Order} = require('../db/models')

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const cart = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        orderSubmitted: false
      }
    })
    res.json(cart)
  } catch (err) {
    next(err)
  }
})


router.post('/:cartId', async (req, res, next) => {
  try {
    const {fruitId, quantity, price} = req.body

    const newOrderItem = await Order.addOrderItem({
      fruitId,
      quantity,
      price
    })
    res.json(newOrderItem)
  } catch (err) {
    next(err)
  }
})
