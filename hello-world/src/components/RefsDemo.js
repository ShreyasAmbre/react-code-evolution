import React, { Component, createRef } from 'react'

// When component is render input field should get autofocuse 
export default class RefsDemo extends Component {
  constructor(props) {
    super(props)
    // Approach 1:
    this.inputRef = React.createRef();

    // Approach 2:
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element
    }

  }


  componentDidMount(){
    // Approach 1
    this.inputRef.current.focus();
    console.log("Input Ref =>", this.inputRef)

    // Approach 2
    if(this.cbRef){
      this.cbRef.focus()
    }
  }

  btnClickedHandler = () => {
    alert(this.inputRef.current.value)
  }
  
  render() {
    return (
      <div>
        <h4>Refs Component</h4>
        <div>
            <span>Element Attribute Refs</span>
            <input type="email" ref={this.inputRef}  />
            <button onClick={this.btnClickedHandler}>Click</button>

            <br />
            <span>CallBack Ref</span>
            <input type="text" ref={this.setCbRef} />
        </div>
      </div>
    )
  }
}

