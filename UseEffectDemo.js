import React,{useState,useEffect} from 'react';


function UseEffectDemo(){
    const[count,changeCount]=useState(0);

    useEffect(()=>{ 
        console.log("hai");
        document.title=`count is changed to:${count}`},[count]
                   );
    return(<div>
        <h1>this illustrates useEffecthook</h1>
        <button onClick={()=>changeCount(count+1)}>count:{count}</button>
    </div>);
}export default UseEffectDemo;