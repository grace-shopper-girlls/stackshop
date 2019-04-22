import React from 'react'
import {connect} from 'react-redux'
import CheckoutUser from './checkout-user'
import Cart from './cart'

const Checkout = () => {
  return (
    <div>
      {<CheckoutUser />}
      {/* {<Cart />} */}
    </div>
  )
}

// const mapDispatch = dispatch => ({
//   deleteCartItem: id => dispatch(deleteCartItemThunk(id))
// })

export default connect(null, null)(Checkout)

// // if guest

// // if logged in:
{
  /* <CheckoutUser /> */
}

// <CheckoutCartSummary />

// <CheckoutSubmitButton />
