const router = require('express').Router()
const {Fruit} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const fruits = await Fruit.findAll()
    res.json(fruits)
  } catch (error) {
    next(error)
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

router.put('/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const {quantity} = req.body
    await Fruit.update({quantity}, {where: {id}})
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
