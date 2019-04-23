import React from 'react'
import {connect} from 'react-redux'
import CheckoutUser from './checkout-user'

const Checkout = props => {
  const {user} = props
  return (
    <div>
      <h1>Checkout</h1>

      <div id="checkout">{<CheckoutUser user={user} />}</div>
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}

// const mapDispatch = dispatch => ({
//   deleteCartItem: id => dispatch(deleteCartItemThunk(id))
// })

export default connect(mapState, null)(Checkout)

// // if guest

// // if logged in:
{
  /* <CheckoutUser /> */
}

// <CheckoutCartSummary />

// <CheckoutSubmitButton />
