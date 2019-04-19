import React from 'react'

const DropDownMenu = props => {
  const {quantity} = props.fruit

  const menuItems = () => {
    let menu = []
    for (let i = 0; i < quantity; i++) {
      menu.push([])
    }
    return menu
  }

  const quantityDropdown = menuItems()

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
        </span>
      </form>
    </div>
  )
}

export default DropDownMenu
