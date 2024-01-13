import React, { Component } from "react";

class Toggle extends Component{
    constructor(props){
        super(props);

        this.state={flag:true};
    }
    handleFlag = () => {
        this.setState( {flag:!this.state.flag});
    };

    render(){
        return (
            <div>
              <button onClick={ this.handleFlag} >clickme:{this.state.flag.toString()}</button>
            </div>
        );
    }
} export default Toggle;