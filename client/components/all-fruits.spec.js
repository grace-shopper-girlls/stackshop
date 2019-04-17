/* global describe beforeEach it */

import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllFruits from './all-fruits'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('All Fruits component', () => {
  let fruits

  beforeEach(() => {
    fruits = shallow(<AllFruits />)
  })

  it('renders the title in an h1', () => {
    expect(fruits.find('h1').text()).to.be.equal('Cute Fruits:')
  })
})
