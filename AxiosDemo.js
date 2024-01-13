import React ,{useState,useEffect}  from 'react';
import axios from'axios';
function AxiosDemo(){
    const data={id:101,title:"react axios",body:"react axios provides get,post and delete methods which works with restend points"}
    const [posts,setPosts]=useState([]);
    useEffect (()=>{axios.post('http://jsonplaceholder.typicode.com/posts',data)
    .then((response)=> setPosts(response.data)).catch((error)=>console.log(error))});
return(
    <div>
    <table>
        <tr>
        <th>id</th>
        <th>title</th>
        <th>body</th>
        </tr>
        {posts.map((ob)=>(<tr>
            <td>{ob.id}</td>
            <td>{ob.title}</td>
            <td>{ob.body}</td></tr>))}
    </table>
</div>);
}
export default AxiosDemo;