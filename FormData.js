import React,{Component} from "react";

class FormData extends Component{
    constructor(props){
        super(props)
         this.state={name:"",tool:"React"}
    }
    handleForm =() =>`{alert(Name: ${this.state.name} Tool:${this.state.tool})}`
    handleName =(e) => {this.setState({name:e.target.value})}
    handleTool =(e) =>{this.setState({tool:e.target.value})}
    render(){
        return(<div> 
            <form submit={this.handleForm}>
                <label>name</label>
                <input type="text" onChange={this.handleName} value={this.state.name}/><br></br>
                <select onChange={this.handleTool} value={this.state.tool}>
                    <option value="react">React</option>
                    <option value="react"> Angular</option>
                    <option value="react">view</option>
                </select><br></br>
                <button type="submit">submit</button>
                </form>   
            </div>);
}
} export default FormData;