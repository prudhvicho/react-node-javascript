import React, { Component } from "react";

 class Example extends Component{
    constructor(props)
    {
        super(props);
        this.state={color:"green"};
    }
    handleRed = () => {
        this.setState({ color :"red"});
    };
    handleBlue = () => {
        this.setState({ color :"blue"});
    };
    render(){
        return (
            <h1 onMouseOver={this.handleRed} onMouseOut={this.handleBlue} style={this.state}>hello</h1>
        );
    }
}
export default Example;