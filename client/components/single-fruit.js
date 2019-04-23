import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFruit} from '../store/fruits'
import AddCartItem from './cart-item-add'
import Loading from './loading'
import {formatPrice} from '../../utils'

class SingleFruit extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchFruit(id)
  }

  render() {
    const fruit = this.props.fruit
    const loading = fruit.loading

    return loading ? (
      <Loading />
    ) : (
      <div>
        <img className="singleFruitImage" src={fruit.imageUrl} />
        <h1 className="fruitName"> {fruit.name} </h1>
        <h3> Description: {fruit.description} </h3>
        <h3> Price: {formatPrice(fruit.price)} </h3>
        <h3> Quantity Available: {fruit.quantity} </h3>
        <AddCartItem fruit={fruit} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    loading: state.fruits.loading,
    fruit: state.fruits.selected
  }
}

const mapDispatch = dispatch => ({
  fetchFruit: id => dispatch(fetchFruit(id))
})

export default connect(mapState, mapDispatch)(SingleFruit)
