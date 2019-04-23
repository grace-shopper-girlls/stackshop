import axios from 'axios'

const GETTING_CART = 'GETTING_CART'
const GOT_CART = 'GOT_CART'
const SET_QUANTITY = 'SET_QUANTITY'
const ADD_TO_CART = 'ADD_TO_CART'

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

let initialState = {
  cart: {},
  cartItems: [],
  quantitySelected: 1,
  loading: true
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
    console.log('addtocarthunk reached!')
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

    default:
      return state
  }
}
