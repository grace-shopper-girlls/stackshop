import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
// import {submitOrder} from '../store'

const CheckoutUser = props => {
  const {handleSubmit} = props
  return (
    <div id="checkout-user">
      <form onSubmit={handleSubmit}>
        <h3>Buyer Information</h3>
        <div>
          <label htmlFor="buyerName">
            <small>Full Name</small>
          </label>
          <input name="buyerName" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="shippingAddress">
            <small>Shipping Address</small>
          </label>
          <input name="shippingAddress" type="textarea" />
        </div>
        <br />
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <p />
        <button type="submit">Submit Order</button>
      </form>
    </div>
  )
}

const mapDispatchCheckout = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const buyerName = evt.target.buyerName.value
      const shippingAddress = evt.target.shippingAddress.value
      const email = evt.target.email.value
      dispatch(submitOrder(buyerName, shippingAddress, email))
    }
  }
}

export const Checkout = connect(null, mapDispatchCheckout)(CheckoutUser)

/**
 * PROP TYPES
 */
Checkout.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}

export default connect(null, null)(CheckoutUser)
