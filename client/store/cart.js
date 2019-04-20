import axios from 'axios'

const GET_CART = 'GET_CART'
const ADD_ITEM = 'ADD_ITEM'

const getCart = (cart) => ({
  type: GET_CART,
  cart
})

const addToCart = (fruit, selectedQuantity) => ({
  type: ADD_ITEM,
  fruit,
  selectedQuantity
})


let initialState = {
  user: {id: 1},
  cart: {id: 1, subtotal: 20, shippingCost: 2.45, grandTotal: 22.45, orderSubmitted: false},
  cartItems: []
}


export const getCartThunk = (userId) => {
  return async dispatch => {
    const {data} = await axios.get(`/api/cart/${userId}`)
    dispatch(getCart(data))
  }
}

export const addToCartThunk = (cart, fruit, selectedQuantity) => {
  let cartId = cart.id
  let fruitId = fruit.id
  let price = Math.round(selectedQuantity * fruit.price)
  let newOrderItem = {
    cartId,
    fruitId,
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
    case GET_CART:
    return {...state, cart: action.data}
    case ADD_ITEM:
      return {...state, cartItems: [...state.cartItems, action.data]}
    default:
      return state
  }
}
