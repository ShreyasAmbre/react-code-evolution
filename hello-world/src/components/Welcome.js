import React, { Component } from "react";

export default class Welcome extends Component {
    render(){
        const { name, heroName } = this.props 
        return <h1>Welcome: {name} a.k.a {heroName}: This is class component</h1>
    }
}


