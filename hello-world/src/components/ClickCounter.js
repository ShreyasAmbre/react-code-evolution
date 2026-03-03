import React, { Component } from 'react';
import withCounter from './WithCounter';

class ClickCounter extends Component {
  // Note: Below code is common so moved to Higher Order and getting state and common method from their
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  // incrementCount = () => {
  //   this.setState(prevState => {
  //     return {
  //       count: prevState.count + 1
  //     }
  //   })
  // }
  
  render() {
    // const { count } = this.state
    return (
      <div>
        {/* Props passed from App.js => WithCounter Component => WrapperComponent => ClickCounter Component */}
        <p>Props passed from App.js - WithCounter Component - WrapperComponent - ClickCounter Component {this.props.name}</p>
        <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 2)

