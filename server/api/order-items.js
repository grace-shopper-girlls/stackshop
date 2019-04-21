const router = require('express').Router()
const {OrderItem} = require('../db/models')

module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const {orderId, fruitId, quantity, price} = req.body

    const newOrderItem = await OrderItem.create({
      orderId,
      fruitId,
      quantity,
      price
    })
    res.json(newOrderItem)
  } catch (err) {
    next(err)
  }
})