const router = require('express').Router()
const {Order, OrderItem, Fruit} = require('../db/models')

module.exports = router

router.get('/:userId', async (req, res, next) => {
  try {
    const order = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        orderSubmitted: false
      },
      include: [OrderItem, Fruit]
    })

    res.json({order})
  } catch (err) {
    next(err)
  }
})

//for when logged-in user submits an order
router.put('/:orderId', async (req, res, next) => {
  try {
    await Order.update(
      {orderSubmitted},
      {
        where: {
          id: req.params.orderId
        }
      }
    )
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
