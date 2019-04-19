import axios from 'axios'

const ADD_ITEM = 'ADD_ITEM'

const addToCart = (fruit, selectedQuantity) => ({
  type: ADD_ITEM,
  fruit,
  selectedQuantity
})

let initialState = {
  cart: {},
  cartItems: []
}

export const addToCartThunk = id => {
  return async dispatch => {
    const {data} = await axios.post('/api/cartItem/', id)
    dispatch(addToCart(data))
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, cartItems: [...state.cartItems, action.fruit]}

    default:
      return state
  }
}
