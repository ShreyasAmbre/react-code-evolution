import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Shreyas"
    }
    console.log("constructor")
  }
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromProps", props, state);
    return state
  }

  componentDidMount(){
    console.log("componentDidMount")
  }
  
  render() {
    console.log("Render")
    const { counter } = this.props 
    return (
      <div>
        <h2>{ counter }</h2>
        <LifecycleB />  
        
      </div>
    )
  }
}

export default LifecycleA

