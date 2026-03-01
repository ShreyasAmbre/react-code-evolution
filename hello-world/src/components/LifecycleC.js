import React, { Component } from 'react'

export default class LifecycleC extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps", props, state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate", nextProps, nextState);
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    return null
  }

  componentDidUpdate(){
    console.log("componentDidUpdate", )
  }

  incrementCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }), () => {
      console.log("Count is ", this.state.count)
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.incrementCount} >Change Count</button>
      </div>
    )
  }
}

