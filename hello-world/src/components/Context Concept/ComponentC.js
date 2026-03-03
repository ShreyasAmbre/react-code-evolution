import React, { Component } from 'react'
import ComponentD from './ComponentD'
import UserContext from './userContext'

class ComponentC extends Component {
  render() {
    return (
      <div>
        <div>Component C context {this.context.username} - {this.context.age}</div>
        <ComponentD />
      </div>
    )
  }
}

ComponentC.contextType = UserContext;

export default ComponentC