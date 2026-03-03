import React from 'react';

// Note: This is how Higher Order Component (HOC) is created 
// Note: "incrementByNumber" is getting passed from ClickCounter and if it is not passed (HoverCounter) given default value as 2 
const withCounter = (WrappedComponent, incrementByNumber = 1) => {

    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
            return {
                count: prevState.count + incrementByNumber
            }
            })
        }
        render() {
            return <WrappedComponent 
                    count={this.state.count} 
                    incrementCount={this.incrementCount}
                    {...this.props}
                    />
        }
    }
    return WithCounter
} 

export default withCounter


// Note: HOC Syntax to refer 
// const UpdatedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component{
//         // Common Logic Here and pass state or methods as props in a component selector
//         render(){
//             return <OriginalComponent />
//         }
//     }
//     return NewComponent
// }