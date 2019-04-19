import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk} from '../store/cart'
// ^^^ create that in the cart redux

const AddCartItem = props => {
  const {id, addToCartThunk} = props
  return (
    <div>
      <body>
        <form>
          <select id="quantity">
            {/* map over the quantity available in database */}
            <option value="i" id={i}>
              ${i}
            </option>
          </select>
          <input
            type="button"
            value="Add to Cart"
            onClick={() => {
              addToCartThunk(id)
            }}
          />
        </form>
      </body>
      {/* <button
        type="submit"
        onClick={() => {
          addToCartThunk(id)
        }}
      >
        Add to Cart
      </button> */}
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
