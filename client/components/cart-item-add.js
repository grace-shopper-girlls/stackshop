import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk} from '../store'
import DropDownMenu from './quantity-drop-down'

class AddCartItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantitySelected: this.props.quantitySelected
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('state', this.state)
    this.setState({
      quantitySelected: 1
    })
  }

  render() {
    const {id} = this.props.fruit

    console.log('props', this.props)
    return (
      <div id="add-to-cart">
        <form onSubmit={this.handleSubmit}>
          <DropDownMenu quantity={this.props.fruit.quantity} />
          <button
            type="submit"
            onClick={() => {
              addToCartThunk(id, this.state.quantitySelected)
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
    quantitySelected: state.quantitySelected
  }
}

const mapDispatch = dispatch => ({
  addToCartThunk: (id, quantitySelected) =>
    dispatch(addToCartThunk(id, quantitySelected))
})

export default connect(mapState, mapDispatch)(AddCartItem)
