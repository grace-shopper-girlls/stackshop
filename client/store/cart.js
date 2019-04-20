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

export const addToCartThunk = (fruit, selectedQuantity) => {
  let id = fruit.id
  let price = Math.round(selectedQuantity * fruit.price)
  let newOrderItem = {
    fruitId: id,
    quantity: selectedQuantity,
    price
  }
  return async dispatch => {
    const {data} = await axios.post('/api/order-items/', newOrderItem)
    dispatch(addToCart(data))
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, cartItems: [...state.cartItems, action.data]}

    default:
      return state
  }
}
