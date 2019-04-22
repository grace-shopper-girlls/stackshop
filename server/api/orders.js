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

//for when logged-in user submits an order
router.put('/', async (req, res, next) => {
  let body = req.body
  try {
    await Order.update({
      where: {
        id: body.id
      },
      orderSubmitted: true
    })
  } catch (error) {
    next(error)
  }
})
