import React, { Component } from 'react';

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  // Handle input changes and update the component state
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    console.log("Submitted: Name -", name, " Email -", email);
    // You can send this data to an API or perform any other action here
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SimpleForm;
