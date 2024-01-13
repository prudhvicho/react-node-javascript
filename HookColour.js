import React,{ useState } from 'react';

  function HookColour(){

    const[color,setColor] =useState("green");

    const  handleRed = () => {
        setColor("red");
    };
    const handleBlue = () => {
        setColor("blue");
    };
   
        return (
            <h1 onMouseOver={handleRed} onMouseOut={handleBlue}>hello:{color}</h1>
        );
    
}export default HookColour;