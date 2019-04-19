import React from 'react'
import {connect} from 'react-redux'
import CartItem from './cart-item'

const fakeCartData = {
  id: 1,
  userId: null,
  orderDate: '2019-04-15',
  orderSubmitted: false,
  buyerName: null,
  shippingAddress: null,
  billingAddress: null,
  email: null,
  subtotal: 26.46,
  shippingCost: 3.75,
  grandTotal: 30.21,
  orderItems: [
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
}

class Cart extends React.Component {
  componentDidMount() {
    // this.props.fetchOrderRows
    // (this doesn't exist yet, but will once the reducer is made)
  }

  render() {
    const cart = fakeCartData
    const items = fakeCartData.orderItems

    return (
      <div>
        <h1>Cart</h1>
        <p>subtotal: {cart.subtotal}</p>
        <p>shipping: {cart.shippingCost}</p>
        <p>Grand Total: {cart.grandTotal}</p>

        <h1>Items</h1>
        {items.map(item => {
          return <CartItem key={item.id} item={item} />
        })}
      </div>
    )
  }
}

// const mapState = state => {
//   return {
//     loading: state.cart.loading,
//     cart: state.cart.cart,
//     items: state.cart.items
//   }
// }

// const mapDispatch = dispatch => ({
//   fetchCartItems: id => dispatch(fetchCartItems(id))
// })

export default connect(null, null)(Cart)
