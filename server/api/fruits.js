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

router.get('/:id', async (req, res, next) => {
  try {
    const fruit = await Fruit.findByPk(req.params.id)
    res.json(fruit)
  } catch (error) {
    next(error)
  }
})
