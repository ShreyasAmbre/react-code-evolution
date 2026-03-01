import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount(){
    // this.setState({
    //   count: this.state.count + 1
    // });

    this.setState((prevState) => ({
      count: prevState.count + 1
    }), () => {
      console.log(this.state.count)
    })
  }

  decrementCount(){
    // setState() 
    this.setState((prevState) => ({
      count: prevState.count - 1
    }), () => {
      console.log(this.state.count)
    })
  }

  incrementFiveTimes(){
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <h1>Count</h1>
        <p>{this.state.count}</p>
        <button onClick={() => this.incrementFiveTimes()}>Increment</button>
        <button onClick={() => this.decrementCount()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
