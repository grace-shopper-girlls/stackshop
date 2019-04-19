import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk} from '../store/cart'
// ^^^ create that in the cart redux

const AddCartItem = props => {
  const {id, addToCartThunk} = props
  return (
    <div>
      <body>
        <form name="menu">
          <span>
            Qty:
            <select name="quantity">
              {/* make axios request and map over the quantity available in database */}
              {/* should this be its own component so we can add it to the cart-item? */}
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <input
              type="button"
              value="Add to Cart"
              // onClick={() => {
              //   addToCartThunk(quantity, id)
              // }}
            />
          </span>
        </form>
      </body>
    </div>
  )
}

const mapDispatch = dispatch => ({
  addToCartThunk: id => dispatch(addToCartThunk(id))
})

export default connect(null, mapDispatch)(AddCartItem)

// <select>
//  <option value=“volvo”>Volvo</option>
//  <option value=“saab”>Saab</option>
//  <option value=“mercedes”>Mercedes</option>
//  <option value=“audi”>Audi</option>
// </select>

{
  /* <button
        type="submit"
        onClick={() => {
          addToCartThunk(id)
        }}
      >
        Add to Cart
      </button> */
}
