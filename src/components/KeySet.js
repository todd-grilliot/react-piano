import React from 'react'
import {useState} from 'react'
import WhiteKey from "../components/WhiteKey";
import App from "../App";
import { testAudio } from '../libraries/webAudio';


const KeySet = () => {
    const [keyboardLength, setKeyBoardLength] = useState(14);
    const keyArray = [];

    for(let i = 0; i < keyboardLength; i++){
        keyArray.push({
            id: i, 
            hasSharp: i % 7 !== 6 && i % 7 !== 2
        })
    }

    // useState pls - for the uh, keypressed sharp and natural stuff
    // maybe an object of all the keys and their state of either pressed or not pressed?
    //then we could use that object to render all of them? would that be easier?

  const keyStroke = (event, id) => {
    if(event.target.classList.contains('black-key')){
      console.log(`${id} sharp`);
    }else{
      console.log(`${id}`);
      console.log('test');
      testAudio();
      //needs to pass in keyUp, and note values...
      
    }
  }

  return (
    <>
        {keyArray.map((value, index) => <WhiteKey key={value.id} hasSharp={value.hasSharp}/>)}
    </>
  )
}

export default KeySet

//used to be 'keyArray.js'