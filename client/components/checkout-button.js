import React from 'react'
import {connect} from 'react-redux'
import {checkOut} from '../store'

const CheckoutButton = props => {
  return (
    <div>
      <button id="checkout-button"
        type="submit"
        onClick={() => {
          props.checkOut()
        }}
      >
        Checkout
      </button>
    </div>
  )
}

const mapDispatch = dispatch => ({
  checkOut: () => dispatch(checkOut())
})

export default connect(null, mapDispatch)(CheckoutButton)
