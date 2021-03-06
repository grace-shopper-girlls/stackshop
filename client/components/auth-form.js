import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth, fetchCart} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props
  return (
    <div>
      {/* <a id="google" href="/auth/google">
        {displayName} with Google
      </a> */}
      <form onSubmit={handleSubmit} name={name}>
        {name === 'signup' ? (
          <div>
            <div>
              <h5>Fields with * are required</h5>
              <label htmlFor="firstname">
                <small>First Name*</small>
              </label>
              <input name="firstname" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="lastname">
                <small>Last Name</small>
              </label>
              <input name="lastname" type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="address">
                <small>Address</small>
              </label>
              <input name="address" type="text" />
            </div>
          </div>
        ) : null}
        <br />
        <div>
          <label htmlFor="email">
            <small>Email*</small>
          </label>
          <input name="email" type="text" />
        </div>
        <br />
        <div>
          <label htmlFor="password">
            <small>Password*</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
      dispatch(fetchCart(email))
    }
  }
}
const mapDispatchSignup = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const firstname = evt.target.firstname.value
      const lastname = evt.target.lastname.value
      const address = evt.target.address.value
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName, firstname, lastname, address))
    }
  }
}

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
