// import WhiteKey from "../components/WhiteKey";
// import App from "../App";
// import { testAudio } from "./webAudio";


// export const keyArray = [];
// const keyboardLength = 14;

// const keyStroke = (event, id) => {
//   if(event.target.classList.contains('black-key')){
//     console.log(`${id} sharp`);
//   }else{
//     console.log(`${id}`);
//     console.log('test');
//     testAudio();
//     //needs to pass in keyUp, and note values...
    
//   }
// }

// function constructKeyArray(length, array){
//   for (let i = 1; i < length + 1; i++) {
//     let hasSharp = true;
//     if (i % 7 === 0 || i % 7 === 3)
//       hasSharp = false;
      
//     array.push(<WhiteKey hasSharp={hasSharp} id={i} keyStroke={keyStroke} key={i}/>)
//   }
// }
// constructKeyArray(keyboardLength, keyArray);
