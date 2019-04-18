import React from 'react'
import {connect} from 'react-redux'
// import {addCartItemThunk} from '../store/cart'
// ^^^ create that in the cart redux

const AddCartItem = props => {
  const {id, addCartItem} = props
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          addCartItem(id)
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

const mapDispatch = dispatch => ({
  addCartItem: id => dispatch(addCartItemThunk(id))
})

export default connect(null, mapDispatch)(AddCartItem)

// <select>
//  <option value=“volvo”>Volvo</option>
//  <option value=“saab”>Saab</option>
//  <option value=“mercedes”>Mercedes</option>
//  <option value=“audi”>Audi</option>
// </select>
