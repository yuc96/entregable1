import React, { useState } from "react";
import './componentstyle.css';
import img from './images/comillas.png'

export default function QuoteBox(citas){
    
    let random=Math.floor(Math.random()*citas.citasjson.length);
    const [index,setindex]=useState(random);
    console.log(citas.citasjson.length);
    const color=['#845EC2','#FF6F9','#F9F871','#D65DB1','#65BAA9','#4D8076','#C44A36','#845EC4','#FEFEDF','#00896F'];
    const randomcolor=Math.floor(Math.random()*color.length);
    document.body.style= `background: ${color[ randomcolor]}`;
        const changeboton=()=>{
                random=Math.floor(Math.random()*citas.citasjson.length);
                setindex(random);
        }

    return(
        <div className="Box">
            <img src={img}></img>
            {<p className="quote" style={{color: `${color[ randomcolor]}`}} >{citas.citasjson[index].quote}</p>}
            {<p className="author" style={{color: `${color[ randomcolor]}`}}>{citas.citasjson[index].author}</p>}
            <button onClick={changeboton}>Change</button>
        </div>  
    );
}