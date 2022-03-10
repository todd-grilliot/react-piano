// import React from "react";
// import BlackKey from "./BlackKey"
// import {useState} from 'react';

// const WhiteKey = ({ id, startNote, endNote }) => {
//   //const [pressed, setPressed] = useState(false);
//   //const [pressedSharp, setPressedSharp] = useState(false);
//   const isSharp = false;

//   const onMouseDown = (e) => {
//     startNote(e, id);
//   }
//   const onMouseEnter = (e) => {
//     //check to see if the mouse button is being held...
//     if(e.buttons === 1){
//       startNote(e, id);
//     }
//   }
//   const onMouseUp = (e) => {
//     console.log('mouse up');
//     endNote(e, id);
//   }
//   const onMouseLeave = (e) => {
//     console.log('mouse leave');
//     endNote(e, id);
//   }



//   return (
//     <div className="key white-key" 
//     onMouseDown={onMouseDown} 
//     onMouseUp={onMouseUp} 
//     onMouseLeave={onMouseLeave}
//     onMouseEnter={onMouseEnter}
//     >
 
//       W
//     </div>
//   )
// }

// export default WhiteKey