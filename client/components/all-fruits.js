import React from 'react'
import {connect} from 'react-redux'
import {fetchFruits} from '../store/fruits'

class AllFruits extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchFruits()
  }

  render() {
    const {fruits, loading} = this.props

    if (loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <h1>Cute Fruits:</h1>
          {fruits.map(fruit => {
            return (
              <div key={fruit.id}>
                <h3>{fruit.name}</h3>
                <img className="fruitImage" src={fruit.imageUrl} />
              </div>
            )
          })}
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

export default connect(mapState, mapDispatch)(AllFruits)
