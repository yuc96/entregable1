import React, { useState } from "react";
import './componentstyle.css';
import 'https://unpkg.com/boxicons@2.1.4/dist/boxicons.js';

export default function QuoteBox(citas){
    
    let random=Math.floor(Math.random()*citas.citasjson.length);
    const [index,setindex]=useState(random);
    console.log(citas.citasjson.length);
    const color=["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595"];
    const randomcolor=Math.floor(Math.random()*color.length);
    document.body.style= `background: ${color[ randomcolor]}`;
        const changeboton=()=>{
                random=Math.floor(Math.random()*citas.citasjson.length);
                setindex(random);
        }

    return(
        <div className="Box">
            {<p className="name" style={{color: `${color[ randomcolor]}`}} > {citas.citasjson[index].name.title} {citas.citasjson[index].name.first} {citas.citasjson[index].name.last}</p>}
            {<img src={citas.citasjson[index].picture.large}></img>}
            <div className="target">
                <box-icon  name='envelope' type='solid' ></box-icon>
                {<p className="quote" style={{color: `${color[ randomcolor]}`}}>{citas.citasjson[index].email}</p>}
            </div>
            <div className="target">
            <box-icon type='solid'  name='phone-call'></box-icon>
            {<p  className="quote" style={{color: `${color[ randomcolor]}`}}>{citas.citasjson[index].cell}</p>}
            </div>
            <div className="target">
                <box-icon  name='current-location' ></box-icon>
                {<p className="quote" style={{color: `${color[ randomcolor]}`}}>{citas.citasjson[index].location.country} {citas.citasjson[index].location.city}</p>}
            </div>
            <button onClick={changeboton}>Change</button>
        </div>  
    );
}