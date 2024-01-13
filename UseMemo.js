import React,{useMemo, useState} from "react";

function UseMemo(){
    const[count,setCount]=useState(0);
    const[flag,setFlag]=useState(true);
    const exp=useMemo(()=>{calculate(count)},[count]);
    
    return(<div>
        <button onClick={()=>{setCount(count+1)}}>count:{count}</button><br/>
        <button onClick={()=>{setFlag(!flag)}}>{flag.toString()}</button><br/>
        <p>{exp}</p>
    </div>)
}
const calculate=(x)=>{
    console.log("hai");
}
export default UseMemo;
