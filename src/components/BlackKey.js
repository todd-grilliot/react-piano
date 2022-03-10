
// const BlackKey = ({ id, startNote, endNote }) => {
//   const isSharp = true;

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
//     <div className="key black-key" 
//     onMouseDown={onMouseDown} 
//     onMouseEnter={onMouseEnter}
//     onMouseUp={onMouseUp} 
//     onMouseLeave={onMouseLeave}>B</div>
//   )
// }

// export default BlackKey