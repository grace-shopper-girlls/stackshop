import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {UserHome} from './user-home'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="navbar">
    <nav>
      <span className="nav-logo">Cute Fruits!</span>
      {isLoggedIn ? (
        <div className="nav-buttons">
          {/* The navbar will show these links after you log in */}
          <Link to="/">All Fruits</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/cart">
            <img className="cartImage" src="/shopping_cart.png" />
          </Link>
          <UserHome />
        </div>
      ) : (
        <div className="nav-buttons">
          {/* The navbar will show these links before you log in */}
          <Link to="/">All Fruits</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart">
            <img className="cartImage" src="/shopping_cart.png" />
          </Link>
        </div>
      )}
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
