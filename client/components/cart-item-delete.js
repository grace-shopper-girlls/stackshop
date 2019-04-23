import React from 'react'
import {connect} from 'react-redux'
// import {deleteCartItemThunk} from '../store/cart'
// ^^^ create that in the cart redux

const DeleteCartItem = props => {
  const {id, deleteCartItem} = props
  return (
    <div>
      {/* do we want the user to be able to select the amount to delete from the cart? */}
      <button
        type="submit"
        onClick={() => {
          deleteCartItem(id)
        }}
      >
        Remove from Cart
      </button>
    </div>
  )
}

const mapDispatch = dispatch => ({
  deleteCartItem: id => dispatch(deleteCartItemThunk(id))
})

export default connect(null, mapDispatch)(DeleteCartItem)
