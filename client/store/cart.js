import axios from 'axios'

const GET_CART = 'GET_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const ADD_ITEM = 'ADD_ITEM'

const getCart = cart => ({
  type: GET_CART,
  cart
})

const setQuantity = quantity => ({
  type: SET_QUANTITY,
  quantity
})

const addToCart = (fruit, selectedQuantity) => ({
  type: ADD_ITEM,
  fruit,
  selectedQuantity
})


let initialState = {
  cart: {},
  cartItems: [],
  quantitySelected: 0
}

export const fetchCart = userId => {
  return async dispatch => {
    const {data} = await axios.get(`/api/orders/${userId}`)
    dispatch(getCart(data[0]))
  }
}

export const setCartQuantity = quantity => {
  let quantityAsNumber = Number(quantity)
  return dispatch => {
    dispatch(setQuantity(quantityAsNumber))
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
      return {...state, cart: action.cart}
    case SET_QUANTITY:
      return {...state, quantitySelected: action.quantity}
    case ADD_ITEM:
      return {...state, cartItems: [...state.cartItems, action.data]}
    default:
      return state
  }
}
