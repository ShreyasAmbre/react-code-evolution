import React, { Component } from 'react'
import ChildRefs from './ChildRefs'

export default class ParentRefs extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    

    clickHandler = () => {
      this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <ChildRefs ref={this.componentRef}/>
        <button onClick={this.clickHandler}></button>
      </div>
    )
  }
}

