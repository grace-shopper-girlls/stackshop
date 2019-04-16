const {expect} = require('chai')
const db = require('../index')
const Fruit = db.model('fruit')

describe('Fruit model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('attributes definition', () => {
    let mango

    beforeEach(async () => {
      mango = await Fruit.create({
        name: 'Mango',
        price: 1.0,
        description: 'The best fruit to have ever existed!',
        imageUrl:
          'http://www.dreams.metroeve.com/wp-content/uploads/2017/10/www.dreams.metroeve.com-mango-dreams-meaning.jpg',
        quantity: 1
      })
    })

    it('requires "name"', async () => {
      mango.name = null
      let result, error

      try {
        result = await mango.validate()
      } catch (err) {
        error = err
      }

      if (result) throw Error('validation should fail when "name" is null')
      expect(error).to.be.an.instanceOf(Error)
    })
  })
})
