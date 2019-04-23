import React from 'react'
import DeleteCartItem from './cart-item-delete'
import {connect} from 'react-redux'
import {fetchFruits} from '../store'
import Loading from './loading'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFruits()
  }

  render() {
    const {item, fruits, loading} = this.props
    if (loading) {
      return <Loading />
    } else {
      const fruit = fruits.find(fruitEl => {
        return fruitEl.id === item.fruitId
      })
      return (
        <div key={item.id}>
          <img className="cartThumbnail" src={fruit.imageUrl} />
          <h3>{fruit.name}</h3>
          <p>quantity: {item.quantity}</p>
          <p>total price: {item.price}</p>
          <DeleteCartItem id={item.id} />
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    loading: state.fruits.loading,
    fruits: state.fruits.all
  }
}

const mapDispatch = dispatch => ({
  fetchFruits: () => dispatch(fetchFruits())
})

export default connect(mapState, mapDispatch)(CartItem)
