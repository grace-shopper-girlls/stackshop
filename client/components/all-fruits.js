import React from 'react'
import {connect} from 'react-redux'
import {fetchFruits} from '../store/fruits'
import AddCartItem from './cart-item-add'
import Loading from './loading'
import {Link} from 'react-router-dom'

class AllFruits extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchFruits()
  }

  render() {
    const {fruits, loading} = this.props

    return loading ? (
      <Loading />
    ) : (
      <div>
        <h2>{fruits.length} Fruits Available:</h2>
        <div id="all-fruit">
          {fruits.map(fruit => {
            return (
              <div className="fruit-row" key={fruit.id}>
                <Link to={`/fruits/${fruit.id}`}>
                  <h3 className="fruit-name">{fruit.name}</h3>
                  <img className="fruitThumb" src={fruit.imageUrl} />
                  <h5 className="fruit-price">price: {fruit.price}</h5>
                </Link>

                <AddCartItem fruit={fruit} />
              </div>
            )
          })}
        </div>
      </div>
    )
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

export default connect(mapState, mapDispatch)(AllFruits)
