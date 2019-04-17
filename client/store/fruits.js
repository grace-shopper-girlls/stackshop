import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GETTING_FRUITS = 'GETTING_FRUITS'
const GOT_FRUITS = 'GOT_FRUITS'

/**
 * INITIAL STATE
 */
const initialState = {
  all: [],
  loading: false
}

/**
 * ACTION CREATORS
 */
const gotFruits = fruits => ({type: GOT_FRUITS, fruits})
const gettingFruits = () => ({type: GETTING_FRUITS})

/**
 * THUNK CREATORS
 */
export const fetchFruits = () => {
  return async dispatch => {
    try {
      dispatch(gettingFruits())
      const {data} = await axios.get('/api/fruits')
      dispatch(gotFruits(data))
    } catch (err) {
      console.error(err)
    }
  }
}

/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GETTING_FRUITS:
      return {...state, loading: true}
    case GOT_FRUITS:
      return {...state, all: action.fruits, loading: false}
    default:
      return state
  }
}
