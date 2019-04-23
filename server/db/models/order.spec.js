const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')
const User = db.model('user')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('attributes definition', () => {
    let testOrder

    beforeEach(async () => {
      testOrder = await Order.create({
        totalPrice: 45.72
      })
    })

    it('requires totalPrice', async () => {
      testOrder.totalPrice = null
      let result, error

      try {
        result = await testOrder.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when totalPrice is null')
      expect(error).to.be.an.instanceOf(Error)
    })
  })
})

describe('associations', () => {
  it('belongs to a user', async () => {
    const creatingUser = User.create({
      firstname: 'cody',
      email: 'cody@puppybook.com',
      password: 'bones',
      imageurl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/A_PUG_dog.jpg',
      address: '129 E. Ruff Street, Brooklyn, NY'
    })

    const creatingOrder = Order.create({
      totalPrice: 74.25
    })

    const [createdUser, createdOrder] = await Promise.all([
      creatingUser,
      creatingOrder
    ])

    await createdOrder.setUser(createdUser)

    const foundOrder = await Order.findOne({
      where: {totalPrice: 74.25},
      include: {model: User}
    })

    expect(foundOrder.User).to.exist // eslint-disable-line no-unused-expressions
    expect(foundOrder.User.firstname).to.equal('cody')
  })
})
