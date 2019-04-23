import React from 'react'
import {connect} from 'react-redux'

export const orderConfirmation = props => {
  const user = props.user

  return (
    <div>
      <h2>Your order was submitted!</h2>
      <h3>Thank you for shopping with us!</h3>
    </div>
  )
}
