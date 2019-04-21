import React from 'react'
import {connect} from 'react-redux'
import {setCartQuantity} from '../store'

class DropDownMenu extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.props.setCartQuantity(event.target.value)
  }

  render() {
    const menuItems = () => {
      let menu = []
      for (let i = 0; i < this.props.quantity; i++) {
        menu.push([])
      }
      return menu
    }

    const quantityDropdown = menuItems()

    return (
      <div>
        <span>
          Qty:&nbsp;
          <select name="quantity" onChange={this.handleChange}>
            {quantityDropdown.map((option, i) => {
              return (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              )
            })}
          </select>
        </span>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  setCartQuantity: quantitySelected =>
    dispatch(setCartQuantity(quantitySelected))
})

export default connect(null, mapDispatch)(DropDownMenu)
