import React,{useState} from 'react';

function HooksCounter(){

const[count,changeCount]=useState(0);
     const  handleInc=()=>{
        changeCount(count+1);
      };
       const handleDec=()=>{
        changeCount(count-1);
      };
    return(
        <div>
            <p>count:{count}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </div>
    );


}export default HooksCounter;