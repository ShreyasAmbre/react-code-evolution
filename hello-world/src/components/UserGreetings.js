import React, { Component } from 'react'

export default class UserGreetings extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true,
    }
  }
  
  render() {
    // Approach 1: if-else
    // if(this.state.isLoggedIn){
    //   return <div>Welcome Shreyas</div>
    // }else{
    //   return <div>Welcome Guest</div>
    // }

    // Approach 2: Element variables
    // let msg;
    // if(this.state.isLoggedIn){
    //   msg = 'Welcome Shreyas'
    // }else{
    //   msg = 'Welcome Guest'
    // }
    // return <div>{msg}</div>

    // Approach 3: Ternary conditional operator
    // return (
    //   this.state.isLoggedIn ? 
    //   ( <div>Welcome Shreyas</div> ) : 
    //   ( <div>Welcome Guest </div> )
    // )

    // Approach 4: Short circuit operator
    // Note: Used when we want to show the UI when condition is pass and do nothing if condition doesn't passed.
    return this.state.isLoggedIn && <div>Welcome Shreyas</div>



    // return (
    //   <div>
    //     <div>Welcome Shreyas</div>
    //     <div>Welcome Guest</div>
        
    //   </div>
    // )
  }
}