/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {fetchFruits} from './fruits'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {all: [], loading: false}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('fetchFruits', () => {
    it('eventually dispatches the GET FRUITS action', async () => {
      const testFruits = [
        {name: 'tangerine', quantity: 34, price: 1.25},
        {name: 'banana', quantity: 23, price: 0.59}
      ]
      mockAxios.onGet('/api/fruits').replyOnce(200, testFruits)
      await store.dispatch(fetchFruits())
      const actions = store.getActions()
      expect(actions[1].type).to.be.equal('GOT_FRUITS')
      expect(actions[1].fruits).to.be.deep.equal(testFruits)
    })
  })
})