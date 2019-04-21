const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/fruits', require('./fruits'))
router.use('/orders', require('./orders'))
router.use('/order-items', require('./order-items'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
