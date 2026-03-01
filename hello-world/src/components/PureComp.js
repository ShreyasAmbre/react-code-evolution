import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
    console.log("Pure Component Render");
    return (
      <div>
        <h4>Pure Component { this.props.name } - Count: {this.props.count}</h4>
      </div>
    )
  }
}
