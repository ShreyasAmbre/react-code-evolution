import { Component } from "react";


class Message extends Component{

    constructor(){
        // Note: TO invoke the constructor of parent class 'Component' This ensure that parent class initialization logic is executed 
        super();
        this.state = {
            message: "This msg is from state of Class based component"
        }
    }

    changeMsg(){
        this.setState({
            message: "Thanks for subscribing"
        })
    }

    render(){
        return (
            <div>
                <h1>Message Component Works</h1>
                <p>{this.state.message}</p>
                <button onClick={() => this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default Message