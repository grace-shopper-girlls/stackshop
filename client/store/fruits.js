import axios from 'axios'

const GETTING_FRUITS = 'GETTING_FRUITS'
const GOT_FRUITS = 'GOT_FRUITS'
const GETTING_FRUIT = 'GETTING_FRUIT'
const GOT_FRUIT = 'GOT_FRUIT'

const initialState = {
  all: [],
  loading: false,
  selected: {}
}

const gotFruits = fruits => ({type: GOT_FRUITS, fruits})
const gettingFruits = () => ({type: GETTING_FRUITS})
const gotFruit = fruit => ({type: GOT_FRUIT, fruit})
const gettingFruit = () => ({type: GETTING_FRUIT})

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

export const fetchFruit = id => {
  return async dispatch => {
    try {
      dispatch(gettingFruit())
      const {data} = await axios.get(`/api/fruits/${id}`)
      dispatch(gotFruit(data))
    } catch (err) {
      console.error(err)
    }
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GETTING_FRUITS:
      return {...state, loading: true}
    case GOT_FRUITS:
      return {...state, all: action.fruits, loading: false}
    case GETTING_FRUIT:
      return {...state, loading: true}
    case GOT_FRUIT:
      return {...state, selected: action.fruit, loading: false}
    default:
      return state
  }
}
