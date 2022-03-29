import React from 'react'
import { useState, useEffect, useRef } from "react";
import { changeVolume, changeWaveType, changeAttack, changeDecay, changeSustain, changeRelease, changeOctave } from '../libraries/webAudio';
import KeyBoard from './KeyBoard';

const KeyboardController = ({toggleKeyName}) => {
  const [volume, setVolume] = useState(50);
  const [attack, setAttack] = useState(0);
  const [decay, setDecay] = useState(50);
  const [sustain, setSustain] = useState(30);
  const [release, setRelease] = useState(40);
  const [octave, setOctave] = useState(0);


  function handleVolume(e){
    setVolume(e.target.value);
    changeVolume((e.target.value / 100) ** 2 );
  }
  function handleAttack(e){
    setAttack(e.target.value);
    changeAttack((e.target.value / 100) ** 4);
  }
  function handleDecay(e){
    setDecay(e.target.value);
    changeDecay(e.target.value / 100 * 2);
  }
  function handleSustain(e){
    setSustain(e.target.value);
    changeSustain((e.target.value / 100) ** 2);
  }
  function handleRelease(e){
    setRelease(e.target.value);
    changeRelease((e.target.value / 100) ** 2);
  }
  function handleWaveType(e){
    changeWaveType(e.target.value)
  }
  function toggleKeyNames(e){
    toggleKeyName();
  }
  function handleDownOctave(e){
    if(octave > -2){
      changeOctave(octave - 1);
      setOctave(octave - 1);
    } 
  }
  function handleUpOctave(e){
    if(octave < 3){
      changeOctave(octave + 1);
      setOctave(octave + 1);
    } 
  }
  return (
    <div className='keyboard-controller'>
      <div className='slider-container'>
      {volume} <br />
      <input type="range" min="0" max="100" className='slider' onChange={handleVolume}/>
      </div>

      
      <div>
        <input type="radio" id="sine" name="wave-type" value="sine" defaultChecked onChange={handleWaveType} />
        <label htmlFor="sine">Sine</label><br />
        <input type="radio" id="triangle" name="wave-type" value="triangle" onChange={handleWaveType}/>
        <label htmlFor="triangle">Triangle</label><br />
        <input type="radio" id="sawtooth" name="wave-type" value="sawtooth" onChange={handleWaveType}/>
        <label htmlFor="sawtooth">Sawtooth</label><br />
        <input type="radio" id="square" name="wave-type" value="square" onChange={handleWaveType}/>
        <label htmlFor="square">Square</label>
      </div>
      <button className='btn' onClick={toggleKeyNames}>Toggle Key Names</button>

      <div className='slider-container'>
      {attack} <br />
      <input type="range" min="0" max="100" className='slider' defaultValue={0} onChange={handleAttack}/> <br />
      Attack
      </div>
      <div className='slider-container'>
      {decay} <br />
      <input type="range" min="0" max="100" className='slider' defaultValue={50} onChange={handleDecay}/> <br />
      Decay
      </div>
      <div className='slider-container'>
      {sustain} <br />
      <input type="range" min="0" max="100" className='slider' defaultValue={30} onChange={handleSustain}/> <br />
      Sustain
      </div>
      <div className='slider-container'>
      {release} <br />
      <input type="range" min="0" max="100" className='slider' defaultValue={40} onChange={handleRelease}/> <br />
      Release
      </div>
      <div className='octave-container'>
        Octave
        <div>
          <button className='btn' onClick={handleDownOctave}>Down</button>
          {octave}
          <button className='btn' onClick={handleUpOctave}>Up</button>
        </div>
      </div>
    </div>
  )
}

export default KeyboardController