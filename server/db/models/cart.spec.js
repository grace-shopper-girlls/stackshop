const {expect} = require('chai')
const db = require('../index')
const Cart = db.model('cart')
const AuthUser = db.model('AuthUser')

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


describe('associations', () => {

  it("belongs to a user", async () => {

    const creatingUser = AuthUser.create({
      firstname: 'cody',
      email: 'cody@puppybook.com',
      password: 'bones',
      imageurl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/A_PUG_dog.jpg',
      address: '129 E. Ruff Street, Brooklyn, NY'
    });

    const creatingCart = Cart.create({
      totalPrice: 74.25
    });

    const [createdUser, createdCart] = await Promise.all([creatingUser, creatingCart]);

    await createdCart.setAuthUser(createdUser);

    const foundCart = await Cart.findOne({
      where: { totalPrice: 74.25 },
      include: { model: AuthUser}
    });

    expect(foundCart.AuthUser).to.exist; // eslint-disable-line no-unused-expressions
    expect(foundCart.AuthUser.firstname).to.equal('cody');
  });

});
