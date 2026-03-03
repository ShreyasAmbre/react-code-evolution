import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hasError: false
    }
  }

  static getDerivedStateFromError(error){
    return {
      hasError: true
    }
  }

  componentDidCatch(error, info){
    console.log("error: ", error)
    console.log("info: ", info)
  }
  
  render() {
    if(this.state.hasError){
      return <h1>FallBack UI: Error Boundary : Something went wrong!</h1>
    }
    // Note: this.props.children : refer to the component which we are actually rendering
    return this.props.children
  }
}

