const router = require('express').Router()
const {Fruit} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const fruits = await Fruit.findAll()
    res.json(fruits)
  } catch (err) {
    next(err)
  }
})
