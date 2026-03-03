import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentD extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            { (user) => {
                return <div>Hello { user.username } - { user.age }</div>  
            }}
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentD