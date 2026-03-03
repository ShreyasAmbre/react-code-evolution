import React, { Component } from 'react'

class HoverCounter2 extends Component {
  // Note: Common function are removed and added in Counter2.js for "Render Props" concept
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0 
  //   }
  // }

  // incrementCount = () => {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1
  //     }
  //   })
  // }
  render() {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hovered { count } TImes</h1>
      </div>
    )
  }
}

export default HoverCounter2
