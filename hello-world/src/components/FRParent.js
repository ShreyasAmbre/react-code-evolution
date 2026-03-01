import React, { Component } from 'react'
import FRInput from './FRInput';

export default class FRParent extends Component {
  constructor(props) {
    super(props)
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    console.log("click");
    this.componentRef.current.focus()
  }
  
  render() {
    return (
      <div>
        <FRInput ref={this.componentRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

