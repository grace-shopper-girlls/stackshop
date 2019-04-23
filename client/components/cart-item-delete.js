import React from 'react'
import {connect} from 'react-redux'
import {removesOrderItem} from '../store/cart'

const DeleteCartItem = props => {
  const {id} = props
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          props.removesOrderItem(id)
        }}
      >
        Remove from Cart
      </button>
    </div>
  )
}

const mapDispatch = dispatch => ({
  removesOrderItem: id => dispatch(removesOrderItem(id))
})

export default connect(null, mapDispatch)(DeleteCartItem)
