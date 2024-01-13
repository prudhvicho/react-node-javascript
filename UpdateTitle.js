import React ,{ Component} from 'react';

class UpdateTitle extends Component{
    constructor(props){
        super(props);
        this.state={count:0}
    }
componentDidMount(){
        document.title="this document changes the title dynamically"; }
        componentDidUpdate()
       {
        document.title=`counter value is change to ${this.state.count}}`;
}
    render(){
        return(<button onClick= {()=> this.setState({count:this.state.count+1})}>count-{this.state.count}</button>);
       
}
}export default UpdateTitle;