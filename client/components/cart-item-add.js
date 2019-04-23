import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk} from '../store'
import DropDownMenu from './quantity-drop-down'

class AddCartItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    const fruit = this.props.fruit
    return (
      <div id="add-to-cart">
        <form onSubmit={this.handleSubmit}>
          <DropDownMenu quantity={this.props.fruit.quantity} />
          <button
            type="submit"
            onClick={() => {
              console.log('button was clicked!!')
              this.props.addToCartThunk(
                this.props.cart,
                fruit,
                this.props.quantitySelected
              )
            }}
          >
            Add to Cart
          </button>
        </form>
      </div>
    )
  }
}

const mapState = state => {
  return {
    cart: state.cart.cart,
    cartItems: state.cart.cartItems,
    quantitySelected: state.cart.quantitySelected
  }
}
const mapDispatch = dispatch => ({
  addToCartThunk: (cart, fruit, quantitySelected) =>
    dispatch(addToCartThunk(cart, fruit, quantitySelected))
})

export default connect(mapState, mapDispatch)(AddCartItem)
