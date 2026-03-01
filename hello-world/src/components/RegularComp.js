import React, { Component } from 'react'

export default class RegularComp extends Component {

  render() {
    console.log("Regular Component Render");
    return (
      <div>
        <h4>Regular Component { this.props.name }</h4>
      </div>
    )
  }
}
