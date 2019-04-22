import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom'

class CheckoutGuest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      firstName: '',
      lastName: '',
      mailingAddress: '',
      shippingAddress: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // this.setState // with wahtever in state.user
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      mailingAddress: '',
      shippingAddress: '',
      email: '',
    });
  // link to order submitted thank you page
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div id="order-form">
        <h1>Checkout as Guest</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="first-name">First Name:</label>
          <input
            value={this.state.firstName}
            type="text"
            name="firstName"
            onChange={this.handleChange}
          />
          <label htmlFor="last-name">Last Name:</label>
          <input
            value={this.state.lastName}
            type="text"
            name="lastName"
            onChange={this.handleChange}
          />
          <label htmlFor="shippingAddress">Last Name:</label>
          <input
            value={this.state.shippingAddress}
            type="text"
            name="shippingAddress"
            onChange={this.handleChange}
          />
          <input
            value={this.state.mailingAddress}
            type="text"
            name="mailingAddress"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            value={this.state.email}
            type="text"
            name="email"
            onChange={this.handleChange}
          />
          <button
            type="submit"
            onClick={() => {
              checkoutGuest(this.state)
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}


export default connect(
  null,
  null
)(CheckoutGuest);
