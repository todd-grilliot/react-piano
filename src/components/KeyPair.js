import React from "react";
import WhiteKey from "./WhiteKey";
import BlackKey from "./BlackKey";
import Key from "./Key";

const KeyPair = ({
    hasSharp,
    id,
    // natIsPressed,
    // sharpIsPressed,
    notesArePressed,
    startNote,
    endNote,
    switchNotes,
}) => {
    return (
        <div className="keypair">
            <Key
                id={id}
                startNote={startNote}
                endNote={endNote}
                switchNotes={switchNotes}
                isNat={true}
                // natIsPressed={natIsPressed}
                notesArePressed={notesArePressed}
            />

            {hasSharp && (
                <Key
                    id={id}
                    startNote={startNote}
                    endNote={endNote}
                    switchNotes={switchNotes}
                    isNat={false}
                    // sharpIsPressed={sharpIsPressed}
                    notesArePressed={notesArePressed}
                />
            )}
        </div>
    );
};

export default KeyPair;
