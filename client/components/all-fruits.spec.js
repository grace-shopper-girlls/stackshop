import {expect} from 'chai'
import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import AllFruits from './all-fruits'
import {Provider} from 'react-redux'
import store from '../store'

const adapter = new Adapter()
Enzyme.configure({adapter})

describe('Front-End', () => {
  const testFruits = [
    {
      name: 'papaya',
      price: 2.0,
      quantity: 7
    },
    {
      name: 'mango',
      price: 5.0,
      quantity: 2
    }
  ]

  describe('<AllFruits /> component', () => {
    it('renders all of the fruits passed in as props', async () => {
      const wrapper = shallow(
        <Provider store={store}>
          <AllFruits fruits={testFruits} />
        </Provider>
      )

      expect(
        wrapper.findWhere(n => n.type() === 'h3' && n.contains('Cute Fruits:'))
      )
    })
  })
})
