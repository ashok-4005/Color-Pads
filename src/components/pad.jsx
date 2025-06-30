import React from 'react'
import '../App.css'
const Pad = (props) =>{

    return(
        <button 
            style={{backgroundColor: props.color}}
            className={props.onn ? "on" : ""}
            onClick={() => props.toggled(props.id)}
            
        ></button>
    );
};

export {Pad};