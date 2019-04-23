import axios from 'axios'

const GETTING_CART = 'GETTING_CART'
const GOT_CART = 'GOT_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const ADD_TO_CART = 'ADD_TO_CART'
const CHECKING_OUT = 'CHECKING_OUT'
const SUBMITTING_ORDER = 'SUBMITTING_ORDER'
const ORDER_SUBMITTED = 'ORDER_SUBMITTED'

const gettingCart = () => ({
  type: GETTING_CART
})

const gotCart = cart => ({
  type: GOT_CART,
  cart
})

const setQuantity = quantity => ({
  type: SET_QUANTITY,
  quantity
})

const addToCart = data => ({
  type: ADD_TO_CART,
  data
})
const checkingOut = () => ({
  type: CHECKING_OUT
})

const submittingOrder = (user) => ({
  type: SUBMITTING_ORDER,
  user
})

const orderSubmitted = () => ({
  type: ORDER_SUBMITTED
})

let initialState = {
  cart: {},
  cartItems: [],
  quantitySelected: 1,
  loading: true,
  checkingOut: false
}

export const fetchCart = userId => {
  return async dispatch => {
    try {
      dispatch(gettingCart())
      const {data} = await axios.get(`/api/orders/${userId}`)
      dispatch(gotCart(data.order[0]))
    } catch (error) {
      console.log(error)
    }
  }
}

export const setCartQuantity = quantity => {
  let quantityAsNumber = Number(quantity)
  return dispatch => {
    dispatch(setQuantity(quantityAsNumber))
  }
}

export const addToCartThunk = (cart, fruit, quantitySelected) => {
  return async dispatch => {
    try {
      let newOrderItem = {
        orderId: cart.id,
        fruitId: fruit.id,
        quantity: quantitySelected,
        price: quantitySelected * fruit.price
      }
      const {data} = await axios.post('/api/order-items', newOrderItem)

      dispatch(addToCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const checkOut = () => {
  return dispatch => {
    dispatch(checkingOut())
  }
}

export const submitOrder = order => {
  try {
    // if a logged in user with a cart in the db,
    // PUT to order with final user details: shippingAddress, buyerName, etc.

    // if a guest, creates a new db entry with all info currently on state
    // POST order
    // POST order items (create all from array)

  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GETTING_CART:
      return {...state, loading: true}
    case GOT_CART:
      return {
        ...state,
        loading: false,
        cart: action.cart
      }
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.data],
        quantitySelected: 1
      }
    case SET_QUANTITY:
      return {...state, quantitySelected: action.quantity}

    case CHECKING_OUT:
      return {...state, checkingOut: true}

    case SUBMITTING_ORDER:
      return {...state, cart: action.cart}

    case ORDER_SUBMITTED:
      return {...state, cart: {}, cartItems: [], checkingOut: false}

    default:
      return state
  }
}
