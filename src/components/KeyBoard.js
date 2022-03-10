import React from "react";
import { useState, useEffect } from "react";
//import WhiteKey from "./WhiteKey";
//import App from "../App";
//import { testAudio } from '../libraries/webAudio';
import KeyPair from "./KeyPair";

const KeySet = () => {
    const [keyboardLength, setKeyBoardLength] = useState(14);
    // const [natsArePressed, setNatsArePressed] = useState(
    //     Array(keyboardLength).fill(false)
    // );
    // const [sharpsArePressed, setSharpsArePressed] = useState(
    //     Array(keyboardLength).fill(false)
    // );
    const [notesArePressed, setNotesArePressed] = useState(
        Array(keyboardLength).fill({ nat: false, sharp: false })
    );
    const keyComponentArray = [];

    useEffect(() => {
        //console.log("notes are pressed useEffect~!");
        //console.log(notesArePressed);
    }, [notesArePressed]);

    function startNote(event, id, isNat) {
        //console.log(`start note ${id} isNat: ${isNat}`);

        if (isNat) {
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === id ? { ...value, nat: true } : value;
                })
            );
        } else {
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === id ? { ...value, sharp: true } : value;
                })
            );
        }
    }

    function endNote(event, id, isNat) {

        if (isNat) {
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === id ? { ...value, nat: false } : value;
                    })
            );
        } else {
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === id ? { ...value, sharp: false } : value;
                })
            );        
        }
    }

    function switchNotes(event, newNote, oldNote) {
        //console.log("switch notes");

        setNotesArePressed(
            notesArePressed
                .map((value, index) => {
                    //stop oldNote
                    return index === oldNote.id && oldNote.isNat
                        ? { ...value, nat: false }
                        : index === oldNote.id && !oldNote.isNat
                        ? { ...value, sharp: false }
                        : value;
                })
                .map((value, index) => {
                    //start newNote
                    return index === newNote.id && newNote.isNat
                    ? { ...value, nat: true }
                    : index === newNote.id && !newNote.isNat
                    ? { ...value, sharp: true }
                    : value;
                })
        );
    }

    //building keyComponentArray for construction...
    for (let i = 0; i < keyboardLength; i++) {
        keyComponentArray.push({
            id: i,
            hasSharp: i % 7 !== 6 && i % 7 !== 2,
            // natIsPressed: natsArePressed[i],
            // sharpIsPressed: sharpsArePressed[i],
            notesArePressed: notesArePressed[i]
        });
    }

    return (
        <>
            {keyComponentArray.map((value, index) => (
                <KeyPair
                    key={value.id}
                    id={value.id}
                    hasSharp={value.hasSharp}
                    // natIsPressed={value.natIsPressed}
                    // sharpIsPressed={value.sharpIsPressed}
                    notesArePressed={value.notesArePressed}
                    startNote={startNote}
                    endNote={endNote}
                    switchNotes={switchNotes}
                />
            ))}
        </>
    );
};

export default KeySet;

//used to be 'keyComponentArray.js'
