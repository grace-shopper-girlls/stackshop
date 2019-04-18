import axios from 'axios'

const ADD_ITEM = 'ADD_ITEM'

const addItem = id => ({
  type: ADD_ITEM,
  id
})

let initialState = {
  cart: {},
  cartItems: []
}

export const addCartItemThunk = id => {
  return async dispatch => {
    const {data} = await axios.post('/api/cartItem/', id)
  }
}
