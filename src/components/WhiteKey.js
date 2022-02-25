import React from "react";
import BlackKey from "./BlackKey"
import {useState} from 'react';

const WhiteKey = ({ hasSharp, id, keyStroke }) => {
  const [pressed, setPressed] = useState(false);
  const [pressedSharp, setPressedSharp] = useState(false);

  const onClick = (e) => {
    keyStroke(e, id);
  }

  return (
    <div className="key white-key" onClick={onClick} >
      W
    {hasSharp && <BlackKey />}
    {hasSharp ? <p>has</p> : <p>no</p>}
    </div>
  )
}

export default WhiteKey