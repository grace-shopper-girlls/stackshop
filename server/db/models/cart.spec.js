const {expect} = require('chai')
const db = require('../index')
const Cart = db.model('cart')

describe('Cart model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('attributes definition', () => {
    let testCart

    beforeEach(async () => {
      testCart = await Cart.create({
        totalPrice: 45.72
      })
    })

    it('requires totalPrice', async () => {
      testCart.totalPrice = null
      let result, error

      try {
        result = await testCart.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when totalPrice is null')
      expect(error).to.be.an.instanceOf(Error)
    })
  })
})
