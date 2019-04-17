import React from 'react'
import {connect} from 'react-redux'
import {fetchFruit} from '../store/fruits'

class SingleFruit extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchFruit()
  }

  handleAddToCart(event) {
    const fruit = event.target.name
    return fruit
  }

  render() {
    const fruit = this.props.fruit
    if (loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Link to="/"> Back to All Fruit </Link>
          <img className="zoomFruitImg" src={fruit.imageUrl} />
          <h1 className="fruitName"> {fruit.name} </h1>
          <h3> {fruit.description} </h3>
          <h2> {fruit.price} </h2>
          <h2> {fruit.quantity} </h2>
          <button onClick={handleAddToCart}> Add to Cart </button>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    loading: state.fruit.loading,
    fruit: state.fruit.selected
  }
}

const mapDispatch = dispatch => ({
  fetchFruit: () => dispatch(fetchFruit())
})

export default connect(mapState, mapDispatch)(SingleFruit)
