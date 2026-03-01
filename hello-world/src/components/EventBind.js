import React, { Component } from 'react'

export default class EventBind extends Component {

  constructor(){
    super()
    this.state = {
      message: "Event Bind: Initial Msg"
    }


    // Approach 1: Help full when we want to pass the value to method
    // this.eventBindClickHandler = this.eventBindClickHandler.bind(this)
  }

  // Approach 1
  // eventBindClickHandler(){
  //   console.log(this)
  // }

  // Approach 2
  eventBindClickHandler = () => {
      console.log('this keyword =>', this);

    this.setState((prevState) => ({
      message: 'Msg Updated using bind'
    }), () => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        {/* Approach 1 */}
        {/* <button onClick={() => this.eventBindClickHandler()}>Event Bind Click</button> */}
        
        {/* Approach 2 */}
        <button onClick={this.eventBindClickHandler}>Event Bind Click</button>
      </div>
    )
  }
}



