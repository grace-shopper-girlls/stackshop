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
        <h3>Buyer Information</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="buyerName">
              <small>Full Name:</small>
            </label>
            <input
              value={this.state.order.buyerName}
              type="text"
              name="buyerName"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="shipping-address">
              <small>Shipping Address:</small>
            </label>
            <input
              value={this.state.order.shippingAddress}
              type="text"
              name="shippingAddress"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">
              <small>Email:</small>
            </label>
            <input
              value={this.state.order.email}
              type="text"
              name="email"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <button
              type="submit"
              onClick={() => {
                submitOrder(this.props.cart.id)
              }}
            >
              Submit Order
            </button>
          </div>
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
