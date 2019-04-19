import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk} from '../store/cart'
// ^^^ create that in the cart redux

const AddCartItem = props => {
  const {addToCartThunk} = props
  const {id, quantity} = props.fruit

  // const populateQuantityDropdown = quantity => {
  //   let result = []
  //   for (let i = 1; i <= quantity; i++) {
  //     result.push(`<option value="${i}">${i}</option>`)
  //   }
  //   return result.join('\n')
  // }

  // const quantityDropdown = populateQuantityDropdown(quantity)

  const menuItems = quantity => {
    let menu = []
    for (let i = 0; i < quantity; i++) {
      menu.push([])
    }
    return menu
  }

  const quantityDropdown = menuItems(quantity)

  return (
    <div>
      <form name="menu">
        <span>
          Qty:
          <select name="quantity">
            {quantityDropdown.map((option, i) => {
              return (
                <option value={i} key={i}>
                  {i + 1}
                </option>
              )
            })}
          </select>
          <input
            type="button"
            value="Add to Cart"
            onClick={() => {
              addToCartThunk(id)
            }}
          />
        </span>
      </form>
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

// const menuItems = quantity => {
//   let menu = []
//   for (let i = 0; i < quantity; i++) {
//     menu.push([])
//   }
//   return menu
// }

// const quantityDropdown = menuItems(quantity)
