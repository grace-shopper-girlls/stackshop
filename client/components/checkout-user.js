import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {submitOrder} from '../store'
// import CheckoutButton from './checkout-button'

class CheckoutUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      buyerName: '',
      shippingAddress: '',
      email: '',
      order: {},
      orderItems: [],
      checkingOut: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      buyerName: '',
      shippingAddress: '',
      email: '',
      order: {},
      orderItems: [],
      checkingOut: false
    })

    // <Link to="/order-confirmation" />
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div id="checkout-user">
        <h1>Buyer Information</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="buyerName">Full Name:</label>
          <input
            value={this.state.buyerName}
            type="text"
            name="buyerName"
            onChange={this.handleChange}
          />
          <label htmlFor="shipping-address">Shipping Address:</label>
          <input
            value={this.state.shippingAddress}
            type="text"
            name="shippingAddress"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            value={this.state.email}
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={() => {
              submitOrder(this.state)
            }}
          >
            Submit Order
          </button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    // user: state.user,
    // buyerName: `state.user.firstName state.user.lastName`,
    // shippingAddress: state.user.address,
    // order: state.order,
    // orderItems: state.order.orderItems,
    checkingOut: state.cart.checkingOut
  }
}

const mapDispatch = dispatch => ({
  submitOrder: userDetails => dispatch(submitOrder(this.state))
})

export default connect(mapState, mapDispatch)(CheckoutUser)
