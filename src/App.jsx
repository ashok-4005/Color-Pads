import React from 'react';
import padsData from './pads'
import './App.css'
import {Pad} from './components/pad.jsx'

const App = () =>{

  const[pads,setPads] = React.useState(padsData)

  const turnOffAll = () =>{
    setPads(prevPads => prevPads.map(pad =>({
      ...pad,
      on:false
    })))
  }

  const turnOnAll = () =>{
    setPads(prevPads => prevPads.map(pad =>({
      ...pad,
      on:true
    })))
  }

  const togglePad = (id) => {
    setPads(prevPads => prevPads.map(pad =>
        pad.id === id ? { ...pad, on: !pad.on } : pad
      )
    );
  };

  const toggle = (id) =>{
    setPads(prevPads => prevPads.map(pad =>
        pad.id === id ? {...pad, on: !pad.on } : pad
      ))
  }
 
  const buttonElements = pads.map(pad=>(
      <Pad toggled={toggle} id={pad.id} key={pad.id} color={pad.color} onn={pad.on} toggleOn={togglePad}/>
  ))

  

  return (
      <main>
          <h1>COLOR PADS</h1>
          <div className="pad-container">
            {buttonElements}
          </div>
          <div className="button-div">
            <button className="turnOff" onClick={turnOffAll}>Turn Off All Pads</button>
            <button className="turnOff" onClick={turnOnAll}>Turn On All Pads</button>
          </div>
      
      </main>
  );
};

export default App
