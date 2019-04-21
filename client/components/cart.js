import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store'
import CartItem from './cart-item'

class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      cart: {},
      orderItems: []
    }
  }

  componentDidMount() {
    this.props.fetchCart(1)
    console.log('cart', this.state.cart)
    console.log('items', this.state.orderItems)
    // ^^ this is just hardcoded for now because I don't know where the logged in user's id lives
  }

  render() {
    // console.log('cart', this.state.cart)
    // console.log('items', this.state.orderItems)
    const cart = this.state.cart
    // const items = this.state.orderItems
    const items = [
      {
        fruitId: 1,
        quantity: 14,
        price: 25.48,
        fruit: {
          name: 'apple',
          price: 1.82,
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/2560px-Bananas.svg.png'
        }
      },
      {
        fruitId: 2,
        quantity: 2,
        price: 0.98,
        fruit: {
          name: 'banana',
          price: 0.49
        }
      }
    ]

    return (
      <div>
        <h1>Cart</h1>
        <p>Subtotal: {cart.subtotal}</p>
        <p>Shipping: {cart.shippingCost}</p>
        <p>Grand Total: {cart.grandTotal}</p>

        <h1>Items</h1>
        {!items.length ? (
          <p>Cart is empty</p>
        ) : (
          <h2> {items.length} items in cart</h2>
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
    orderItems: state.cart.cart.orderItems
  }
}

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId))
})

export default connect(mapState, mapDispatch)(Cart)
