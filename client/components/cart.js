import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, me} from '../store'
import CartItem from './cart-item'
import Loading from './loading'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCart(this.props.user.id)
  }

  render() {
    const {cart, loading, cartItems} = this.props
    return loading ? (
      <Loading />
    ) : (
      <div>
        <h1>Cart</h1>
        <p>Subtotal: {cart.subtotal}</p>
        <p>Shipping: {cart.shippingCost}</p>
        <p>Grand Total: {cart.grandTotal}</p>

        <h1>Items</h1>
        {!cartItems.length ? (
          <p>Cart is empty</p>
        ) : (
          <h2> {cartItems.length} Types of Fruit in Cart</h2>
        )}
        {cartItems.map(item => {
          return <CartItem key={item.fruitId} item={item} />
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    loading: state.cart.loading,
    cart: state.cart.cart,
    cartItems: state.cart.cartItems,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)),
  me: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(Cart)
