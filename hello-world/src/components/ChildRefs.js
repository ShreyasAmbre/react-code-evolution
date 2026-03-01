import React, { Component, createRef } from 'react'

export default class ChildRefs extends Component {
    constructor(props) {
      super(props);
      this.inputRef = new createRef();
    
      this.state = {
         
      }
    }

    focusInput(){
        this.inputRef.current.focus();
    }
    
  render() {
    return (
      <div>
        <input type="text" refs={this.inputRef} />
      </div>
    )
  }
}