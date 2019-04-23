import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, me, checkOut} from '../store'
import CartItem from './cart-item'
import CheckoutButton from './checkout'
import Loading from './loading'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checkingOut: false
    }
  }

  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchCart(this.props.user.id)
    }
  }

  render() {
    const {cart, loading, orderItems: items} = this.props
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
          <h2> {items.length} Types of Fruit in Cart</h2>
        )}
        {items.map(item => {
          return <CartItem key={item.id} item={item} />
        })}
        <CheckoutButton />
      </div>
    )
  }
}

const mapState = state => {
  return {
    loading: state.cart.loading,
    cart: state.cart.cart,
    orderItems: state.cart.cart.orderItems,
    checkingout: state.cart.checkingOut,
    user: state.user
  }
}

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)),
  me: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(Cart)
