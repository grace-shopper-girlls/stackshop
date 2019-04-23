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
    res.status(201)
    res.json(newOrderItem)
  } catch (err) {
    console.log(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findById(+req.params.id)
    if (!orderItem) return res.sendStatus(404)
    await orderItem.destroy()
    res.sendStatus(204)
  } catch (err) {
    console.log(err)
  }
})
