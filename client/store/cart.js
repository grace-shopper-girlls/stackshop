import axios from 'axios'

const GET_CART = 'GET_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const ADD_TO_CART = 'ADD_TO_CART'

const getCart = cart => ({
  type: GET_CART,
  cart
})

const setQuantity = quantity => ({
  type: SET_QUANTITY,
  quantity
})

const addToCart = newOrderItem => ({
  type: ADD_TO_CART,
  newOrderItem
})

let initialState = {
  cart: {id: 1, subtotal: 4.56, grandTotal: 6.0},
  cartItems: [],
  quantitySelected: 1
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

export const addToCartThunk = (cart, fruit, quantitySelected) => {
  let newOrderItem = {
    cartId: cart.id,
    fruitId: fruit.id,
    quantity: quantitySelected,
    price: quantitySelected * fruit.price
  }
  console.log('new order item', newOrderItem)
  return dispatch => {
    dispatch(addToCart(newOrderItem))
  }

  // the cart item can't be stored in the database yet because the express route doesn't work
  // for now, this thunk just adds the cart item to the redux store
  // return async dispatch => {
  //   const {data} = await axios.post('/api/order-items/', newOrderItem)
  //   dispatch(addToCart(newOrderItem))
  // }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, cart: action.cart}
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [action.newOrderItem],
        quantitySelected: 1
      }
    case SET_QUANTITY:
      return {...state, quantitySelected: action.quantity}

    default:
      return state
  }
}
