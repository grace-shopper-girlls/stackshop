import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, me, checkOut} from '../store'
import CartItem from './cart-item'
import CheckoutButton from './checkout-button'
import CheckoutForm from './checkout-user'
import Loading from './loading'
import {formatPrice} from '../../utils'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.user.id) {
      this.props.fetchCart(this.props.user.id)
    }
  }

  render() {
    const {
      cart,
      loading,
      cartItems,
      shippingCost,
      subTotal,
      grandTotal,
      fruits
    } = this.props

    return loading ? (
      <Loading />
    ) : (
      <div id="cart-wrapper">
        <h1>Cart</h1>
        <div id="cart-totals">
          <p>Subtotal: {cart.subtotal}</p>
          <p>Shipping: {cart.shippingCost}</p>
          <p>Grand Total: {cart.grandTotal}</p>
        </div>


        <h1 div id="cart-items">
          Items
        </h1>
        {!cartItems.length ? (
          <p>Cart is empty</p>
        ) : (
          <h2> {cartItems.length} Type(s) of Fruit in Cart</h2>
        )}
        {cartItems.map(item => {
          return <CartItem key={item.fruitId} item={item} fruits={fruits} />
        })}

<CheckoutButton />
        {this.props.checkingOut ? (
          <CheckoutForm history={this.props.history} />
        ) : (
          <div />
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    loading: state.cart.loading,
    subTotal: state.cart.subTotal,
    shippingCost: state.cart.shippingCost,
    grandTotal: state.cart.grandTotal,
    cart: state.cart.cart,
    cartItems: state.cart.cartItems,
    checkingOut: state.cart.checkingOut,
    user: state.user,
    fruits: state.fruits.all
  }
}

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)),
  me: () => dispatch(me())
})

export default connect(mapState, mapDispatch)(Cart)
