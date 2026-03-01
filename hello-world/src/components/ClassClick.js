import React, { Component } from 'react'

export default class ClassClick extends Component {
  clickHandler(){
      console.log('Button Clicked from Class Click');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

