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
    console.log('the id is ', id)
    this.props.fetchFruit(id)
  }

  handleAddToCart(event) {
    const fruit = event.target.name
    return fruit
  }

  render() {
    const fruit = this.props.fruit
    console.log('the props are ', this.props)

    // if (loading) {
    //   return <div>Loading...</div>
    // } else {
    return (
      <div>
        <Link to="/"> Back to All Fruit </Link>
        <img className="zoomFruitImg" src={fruit.imageUrl} />
        <h1 className="fruitName"> {fruit.name} </h1>
        <h3> Description: {fruit.description} </h3>
        <h2> Price: $ {fruit.price} </h2>
        <h2> Quantity Available: {fruit.quantity} </h2>
        <button onClick={this.handleAddToCart}> Add to Cart </button>
      </div>
    )
    // }
  }
}

const mapState = state => {
  console.log('state.fruits is ', state.fruits)
  return {
    // loading: state.fruit.loading,
    fruit: state.fruits.selected
  }
}

const mapDispatch = dispatch => ({
  fetchFruit: id => dispatch(fetchFruit(id))
})

export default connect(mapState, mapDispatch)(SingleFruit)
