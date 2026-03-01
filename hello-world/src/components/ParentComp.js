import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp';
import MemoComp from './MemoComp';

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Shreyas",
         count: 0
      }
    }

    componentDidMount(){
        // setInterval(() => {
        //     this.setState({
        //         name: "Shreyas"
        //     })
        //     // this.setState((prevState) => ({
        //     //     ...prevState,
        //     //     count: prevState.count + 1
        //     // }), ()=> {
        //     //     console.log(this.state)
        //     // })
        // }, 2000);
    }
    
  render() {
    console.log("*** Parent Component Render ***")
    return (
      <div>
        <h4>Parent Component</h4>
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} count={this.state.count} /> */}

        <MemoComp name={this.state.name} />
        
      </div>
    )
  }
}
