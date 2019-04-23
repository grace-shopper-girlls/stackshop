import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store'
import CartItem from './cart-item'
import Loading from './loading'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCart(1)
  }

  render() {
    const cart = this.props.cart
    const loading = this.props.loading
    const items = this.props.orderItems
    return loading ? (
      <Loading />
    ) : (
      <div>
        <h1>Cart</h1>
        <p>Subtotal: {cart.subtotal}</p>
        <p>Shipping: {cart.shippingCost}</p>
        <p>Grand Total: {cart.grandTotal}</p>

        <h1>Items</h1>
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
    loading: state.cart.loading,
    cart: state.cart.cart,
    orderItems: state.cart.cart.orderItems
  }
}

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId))
})

export default connect(mapState, mapDispatch)(Cart)
