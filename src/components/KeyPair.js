import React from "react";
// import WhiteKey from "./WhiteKey";
// import BlackKey from "./BlackKey";
import Key from "./Key";

const KeyPair = ({
    hasSharp,
    id,
    keyNames,
    notesArePressed,
    startNote,
    endNote,
    switchNotes,
    keyNameToggle
}) => {
    return (
        <div className="keypair">
            <Key
                keyNames={keyNames}
                id={id}
                startNote={startNote}
                endNote={endNote}
                switchNotes={switchNotes}
                isNat={true}
                notesArePressed={notesArePressed}
                keyNameToggle={keyNameToggle}

            />

            {hasSharp && (
                <Key
                    keyNames={keyNames}
                    id={id}
                    startNote={startNote}
                    endNote={endNote}
                    switchNotes={switchNotes}
                    isNat={false}
                    notesArePressed={notesArePressed}
                    keyNameToggle={keyNameToggle}
                />
            )}
        </div>
    );
};

export default KeyPair;
