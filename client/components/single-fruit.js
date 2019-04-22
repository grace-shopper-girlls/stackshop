import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFruit} from '../store/fruits'
import AddCartItem from './cart-item-add'
import Loading from './loading'

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
        <h2> Price: $ {fruit.price} </h2>
        <h2> Quantity Available: {fruit.quantity} </h2>
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
