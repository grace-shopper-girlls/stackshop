import React from 'react'
import {connect} from 'react-redux'

class DropDownMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      quantitySelected: 1
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      quantitySelected: event.target.value
    })
    console.log('state', this.state)
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

export default connect(null, null)(DropDownMenu)
