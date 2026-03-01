import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       username: '',
       address: '',
       gender: 'male'
    }
  }

  setUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  setAddress = (event) => {
    this.setState({
      address: event.target.value
    })
  }

  setGender = (event) => {
    this.setState({
      gender: event.target.value
    })
  }

  onSubmit = (event) => {
    alert(`${this.state.username} - ${this.state.address} - ${this.state.gender}`);
    event.preventDefault();
  }
  
  render() {
    const { username, address, gender } = this.state  
    return (
      <form onSubmit={this.onSubmit}>
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" value={username} onChange={this.setUsername} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea cols="30" rows="10" value={address} onChange={this.setAddress}></textarea>
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select value={gender} onChange={this.setGender}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button type='submit' >Submit</button>
      </form>
    )
  }
}

