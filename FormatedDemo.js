import React,{Component} from 'react';

class FormatedDemo extends Component{
    constructor(props){
        super(props)
        this.state={data:[{id:101,name:"bob",sal:40000},{id:102,name:"alice",sal:30000},{id:103,name:"mike",sal:20000}]};
    }
    render(){
        return(<div>
            <table>
            <tr>{Object.keys(this.state.data[0]).map((x)=>(<th key={x}>{x}</th>))}
            </tr>
            {this.state.data.map((ob)=>(<tr key={ob.id}>{Object.values(ob).map((y)=>(<td key={y}>{y}</td>))}</tr>))}
            </table>
        </div>);
    }
}
export default FormatedDemo;