import React, { Component } from 'react'
import withCounter from './WithCounter';

class HoverCounter extends Component {
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
        <h2 onMouseOver={this.props.incrementCount}>Hover { this.props.count } Times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter)


