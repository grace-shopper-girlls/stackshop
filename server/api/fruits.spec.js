const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const Fruit = db.model('fruit')

describe('Fruit routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/fruits/', () => {
    const fruitName = 'papaya'

    beforeEach(() => {
      return Fruit.create({
        name: fruitName,
        price: 2,
        quantity: 7
      })
    })

    it('GET /api/fruits', async () => {
      const res = await request(app)
        .get('/api/fruits')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(fruitName)
    })
  })

  describe('/api/fruits/:id', () => {
    let testFruit
    beforeEach(async () => {
      testFruit = await Fruit.create({
        name: 'papaya',
        price: 2,
        quantity: 7
      })
    })

    it('GET /api/fruits/:id', async () => {
      const res = await request(app)
        .get(`/api/fruits/${testFruit.id}`)
        .expect(200)
      expect(res.body).to.be.an('object')
      expect(res.body.name).to.be.equal('papaya')
    })

    it('PUT /api/fruits/:id', async () => {
      await request(app)
        .put(`/api/fruits/${testFruit.id}`)
        .send({quantity: 3})
        .expect(204)
      const foundFruit = await Fruit.findByPk(testFruit.id)
      // eslint-disable-next-line no-unused-expressions
      expect(foundFruit).to.exist
      expect(foundFruit.quantity).to.equal(3)
    })
  })
})
