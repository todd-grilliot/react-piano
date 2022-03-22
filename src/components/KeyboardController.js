import React from 'react'
import { useState, useEffect, useRef } from "react";
import { changeVolume, changeWaveType } from '../libraries/webAudio';

const KeyboardController = () => {
  const [volume, setVolume] = useState(50);

  function formVolume(e){
    setVolume(e.target.value);
    changeVolume(e.target.value / 100);
  }
  function formWaveType(e){
    changeWaveType(e.target.id)
  }
  return (
    <div className='keyboard-controller'>
      <div className='slider-container'>
      {volume} <br />
      <input type="range" min="0" max="100" className='slider' onChange={formVolume}/>
      </div>

      
      <div>
        <input type="radio" id="sine" name="wave-type" value="sine" defaultChecked onChange={formWaveType} />
        <label htmlFor="sine">Sine</label><br />
        <input type="radio" id="triangle" name="wave-type" value="triangle" onChange={formWaveType}/>
        <label htmlFor="triangle">Triangle</label><br />
        <input type="radio" id="sawtooth" name="wave-type" value="sawtooth" onChange={formWaveType}/>
        <label htmlFor="sawtooth">Sawtooth</label><br />
        <input type="radio" id="square" name="wave-type" value="square" onChange={formWaveType}/>
        <label htmlFor="square">Square</label>

      </div>

    </div>
  )
}

export default KeyboardController