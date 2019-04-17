import React from 'react'
import {connect} from 'react-redux'

class AllFruits extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    //takes a thunk and dispatches the thunk that grabs the fruit from the database
  }

  render() {
    const fruits = [
      {id: 1, name: 'banana'},
      {id: 2, name: 'strawberry'},
      {id: 3, name: 'mango'}
    ]
    return (
    <h1>Cute Fruits:</h1>
        {fruits.map(fruit => {
          return (
            <div key={fruit.id}>
            <h3>{fruit.name}</h3>
            </div>
          )
        })}
      )
  }
}

export default AllFruits

// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

// export default connect(mapState)(AllFruits)
