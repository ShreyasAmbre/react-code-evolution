import React from "react";

// Default Export
// export default function Greet(props){
export default function Greet({ name, children }){
    return(
        <div>
            {/* <h1>Hello { props.name }</h1> */}
            <h1>Hello { name }</h1>
            {/* { props.children } */}
            { children }
        </div>
    )
}

// Named Export 
// export const Greet = () => <h1>Hello Shreyas from Fat Arrow Function </h1>

