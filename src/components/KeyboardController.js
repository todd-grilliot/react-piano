import React from 'react'
import { useState, useEffect, useRef } from "react";
import { changeVolume, changeWaveType } from '../libraries/webAudio';
import KeyBoard from './KeyBoard';

const KeyboardController = ({toggleKeyName}) => {
  const [volume, setVolume] = useState(50);

  function formVolume(e){
    setVolume(e.target.value);
    changeVolume(e.target.value / 100);
  }
  function formWaveType(e){
    changeWaveType(e.target.id)
  }
  function toggleKeyNames(e){
    toggleKeyName();
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
      <button className='btn' onClick={toggleKeyNames}>Toggle Key Names</button>

    </div>
  )
}

export default KeyboardController