import BlackKey from "./components/BlackKey";
import WhiteKey from "./components/WhiteKey";
import KeyboardController from "./components/KeyboardController";
import { keyArray } from "./libraries/keyArray";
import KeySet from "./components/KeySet";

function App() {

  return (
    <div className="App">
      App
      <div className="keyboard">
        <KeyboardController />
        {/* {keyArray} */}
        <KeySet/>

        
      </div>
    </div>
  );
}

export default App;

//I guess the black keys should be made into absolute positioning and then transformed somehow... humm hum
//I saved some codepens