import React from 'react'
import {connect} from 'react-redux'
import {submitOrder} from '../store'

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
      order: {
        buyerName: '',
        shippingAddress: '',
        email: ''
      },
      orderItems: [],
      checkingOut: false
    })
    this.props.history.push('/order-confirmation')
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div id="checkout-user">
        <h1>Buyer Information</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="buyerName">Full Name:</label>
          <input
            value={this.state.order.buyerName}
            type="text"
            name="buyerName"
            onChange={this.handleChange}
          />
          <label htmlFor="shipping-address">Shipping Address:</label>
          <input
            value={this.state.order.shippingAddress}
            type="text"
            name="shippingAddress"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            value={this.state.order.email}
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={() => {
              submitOrder(this.props.cart.id)
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
    cart: state.cart,
    checkingOut: state.cart.checkingOut
  }
}

const mapDispatch = dispatch => ({
  submitOrder: id => dispatch(submitOrder(id))
})

export default connect(mapState, mapDispatch)(CheckoutUser)
