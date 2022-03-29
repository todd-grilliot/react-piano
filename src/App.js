import { useState, useEffect } from "react";
import Header from "./components/Header";
import KeyBoard from "./components/KeyBoard";
import HelpModal from "./components/HelpModal";

function App() {
    const [keyNameToggle, setKeyNameToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    function toggleKeyNames(){
        setKeyNameToggle(!keyNameToggle);
    }
    function toggleModal(e){
        if(!showModal) setShowModal(!showModal);
        else if(e.target.className.includes("close-modal")) setShowModal(!showModal);
    }
    return (
        <div className="App">
            <Header 
            toggleKeyNames={toggleKeyNames}
            toggleModal={toggleModal}
            />
            <div className="keyboard">
                <KeyBoard keyNameToggle={keyNameToggle}/>  
            </div>
            {showModal && 
            <HelpModal 
            toggleModal={toggleModal}
            />}
        </div>
    );
}

export default App;

