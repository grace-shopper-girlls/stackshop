import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk} from '../store/cart'
import DropDownMenu from './quantity-drop-down'

const AddCartItem = props => {
  const {id} = props.fruit

  return (
    <div>
      <DropDownMenu fruit={props.fruit} />

      <button
        type="submit"
        onClick={() => {
          addToCartThunk(id)
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

const mapDispatch = dispatch => ({
  addToCartThunk: id => dispatch(addToCartThunk(id))
})

export default connect(null, mapDispatch)(AddCartItem)
