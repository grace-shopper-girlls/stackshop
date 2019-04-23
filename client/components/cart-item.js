import React from 'react'
import DeleteCartItem from './cart-item-delete'
import {connect} from 'react-redux'
import {fetchFruit} from '../store'
import Loading from './loading'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {item, fruits, loading} = this.props
    const fruit = fruits.find(fruitEl => {
      return fruitEl.id === item.fruitId
    })
    if (loading) {
      return <Loading />
    } else {
      return (
        <div key={item.fruitId}>
          <img className="cartThumbnail" src={fruit.imageUrl} />
          <h3>{fruit.name}</h3>
          <p>quantity: {item.quantity}</p>
          <p>total price: {item.price}</p>
          <DeleteCartItem id={item.fruitId} />
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    loading: state.fruits.loading
  }
}

const mapDispatch = dispatch => ({
  fetchFruit: id => dispatch(fetchFruit(id))
})

export default connect(mapState, mapDispatch)(CartItem)
