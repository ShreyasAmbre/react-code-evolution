import React, { Component } from 'react'

export default class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: "Class B"
    }
    console.log("Class B Constructor");
  }

  static getDerivedStateFromProps(props, state){
    console.log("Class B getDerivedStateFromProps")
    return state
  }

  componentDidMount(){
    console.log("Class B  componentDidMount")
  }
  
  render() {
    console.log("Class Render")
    return (
      <div>
        
      </div>
    )
  }
}

