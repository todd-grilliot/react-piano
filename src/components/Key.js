import React from "react";
import { useState, useEffect, useRef } from "react";

const Key = ({
    keyNames,
    id,
    isNat,
    notesArePressed,
    startNote,
    endNote,
    switchNotes,
    keyNameToggle
}) => {

    function findKeyName(array){
        let name;
        array.forEach(element => {
            if (element.id === id && element.isNat === isNat){
                name = element.key;
            }
        });
        return name;
    }
    let keyName = findKeyName(keyNames);

    const onMouseDown = (e) => {
        startNote(e, id, isNat);
    };
    const onMouseEnter = (e) => {
        //check to see if the mouse button is being held...
        if (e.buttons === 1) {
            // check to see if he's coming in from another key...
            if (e.relatedTarget.classList.contains("key")) {
                let note1 = {
                    id: id,
                    isNat: isNat,
                };
                let note2 = {
                    id: Number(e.relatedTarget.id),
                    isNat: e.relatedTarget.classList.contains("white-key"),
                };
                switchNotes(e, note1, note2);
            } else {
                startNote(e, id, isNat);
            }
        }
    };
    const onMouseUp = (e) => {
        endNote(e, id, isNat);
    };
    const onMouseLeave = (e) => {
        // check if holding mouse down AND also not entering another key..
        if (e.buttons === 1 && !e.relatedTarget.classList.contains("key")) {
            endNote(e, id, isNat);
        }
    };

    return (
        <div
            className={
                isNat
                    ? notesArePressed.nat
                        ? "key white-key key-pressed"
                        : "key white-key"
                    : notesArePressed.sharp
                    ? "key black-key key-pressed"
                    : "key black-key"
            }
            id={id}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onMouseEnter={onMouseEnter}
        >
            {keyNameToggle && keyName}
        </div>
    );
};

export default Key;
