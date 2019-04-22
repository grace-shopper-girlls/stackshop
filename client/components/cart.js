import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store'
import CartItem from './cart-item'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: {},
      orderItems: [],
      id: null
    }
  }

  componentDidMount() {
    let id = this.state.id
    this.props.fetchCart(1)
    // ^^ this is just hardcoded for now because I don't know where the logged in user's id lives
  }

  render() {
    const cart = this.state.cart
    const items = this.state.orderItems

    return (
      <div>
        <h1>Cart</h1>
        <p>Subtotal: {cart.subtotal}</p>
        <p>Shipping: {cart.shippingCost}</p>
        <p>Grand Total: {cart.grandTotal}</p>

        <h1>Items</h1>
        {console.log('the state is ', this.state)}
        {console.log('the state.id is ', this.state.id)}
        {!items.length ? (
          <p>Cart is empty</p>
        ) : (
          <h2> {items.length} Items in Cart</h2>
        )}
        {items.map(item => {
          return <CartItem key={item.id} item={item} />
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart.cart,
    orderItems: state.cart.cart.orderItems,
    // id: state.user.id
    id: 1
  }
}

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId))
})

export default connect(mapState, mapDispatch)(Cart)
