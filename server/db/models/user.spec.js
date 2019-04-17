/* global describe beforeEach it */

const chai = require('chai')
const {expect} = require('chai')
const db = require('../db')
const User = db.model('User')

describe('User model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let cody

  beforeEach(async () => {
    cody = await User.create({
      firstname: 'cody',
      email: 'cody@puppybook.com',
      password: 'bones',
      imageurl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a1/A_PUG_dog.jpg',
      address: '129 E. Ruff Street, Brooklyn, NY'
    })
  })

  describe('instanceMethods', () => {
    describe('correctPassword', () => {
      it('returns true if the password is correct', () => {
        expect(cody.correctPassword('bones')).to.be.equal(true)
      })

      it('returns false if the password is incorrect', () => {
        expect(cody.correctPassword('bonez')).to.be.equal(false)
      })
    }) // end describe('correctPassword')
  }) // end describe('instanceMethods')
  describe('Validations', () => {
    it('requires `firstname`', async () => {
      let jody = User.build()
      try {
        await jody.validate()
        throw Error(
          'validation was succesful but should have failed without `firstname`'
        )
      } catch (error) {
        expect(error.message).to.contain('firstname cannot be null')
      }
    })
  }) //end describe ('Validations')
}) // end describe('User model')
