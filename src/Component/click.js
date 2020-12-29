import React, { useState } from 'react'
import "./style.scss"
import "./mouse"

     const Click = () =>{
         const blue ="#8e44ad";
         const [bg,setBg] = useState(blue);
         const [name,setName]=useState(" First Click here");

     
     const bgChange=()=> {
         let newBg="#34495e";
         setBg(newBg);
         setName("Double Click here");

     };
     const bgBack = () =>
     {
         setBg(blue);
         setName("Thank you, Now you click down ");
     };
        return (
            <div style={{backgroundColor:bg}} className="a">
            <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button><br /><br />
            <a href="#mouse" className="anchor">Click here</a>
                
            </div>
        )
    
        }

export default Click