import React, {useState} from 'react'
import "./style.scss"

const Mouse = () => {
    const blue ="#8e44ad";
    const [bg,setBg] = useState(blue);
    const [name,setName]=useState("Welcome");
    const bgChange=()=> {
        let newBg="#34495e";
        setBg(newBg);
        setName("Hope doing well");

    };
    const bgBack = () =>
    {
        setBg(blue);
        setName("Pleasure meeting you ");
    };
    return (
        <div style={{backgroundColor:bg}}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}>{name}</button>
            
        </div>
    )
}
export default Mouse