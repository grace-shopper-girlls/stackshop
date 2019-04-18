import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchFruit} from '../store/fruits'

class SingleFruit extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchFruit(id)
  }

  //this handler function does not work as the cart has not been made
  handleAddToCart(event) {
    const fruit = event.target.name
    return fruit
  }

  render() {
    const fruit = this.props.fruit
    const loading = fruit.loading

    if (loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Link to="/"> Back to All Fruit </Link>
          <img className="zoomFruitImg" src={fruit.imageUrl} />
          <h1 className="fruitName"> {fruit.name} </h1>
          <h3> Description: {fruit.description} </h3>
          <h2> Price: $ {fruit.price} </h2>
          <h2> Quantity Available: {fruit.quantity} </h2>
          <button type="button" onClick={this.handleAddToCart}>
            {' '}
            Add to Cart{' '}
          </button>
        </div>
      )
    }
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
