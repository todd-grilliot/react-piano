import React from "react";
import { useState, useEffect, useRef } from "react";
import { playNote, stopNote, stopAllNotes } from '../libraries/webAudio';
import KeyboardController from "./KeyboardController";
import KeyPair from "./KeyPair";

const KeyBoard = () => {
    const [keyboardLength, setKeyBoardLength] = useState(14);
    const [keyNameToggle, setKeyNameToggle] = useState(false);
    const [notesArePressed, setNotesArePressed] = useState(
        Array(keyboardLength).fill({ nat: false, sharp: false })
    );
    const keyComponentArray = [];

    useEffect(() => {

        if(prevNotesArePressed.current){
            for (let i = 0; i < notesArePressed.length; i++) {
                if (!notesArePressed[i].nat && prevNotesArePressed.current[i].nat){
                    stopNote(i, true);
                }
                if (!notesArePressed[i].sharp && prevNotesArePressed.current[i].sharp){
                    stopNote(i, false);
                }
            }
        }
        if(notesArePressed.every((value) => value.nat === false && value.sharp === false)){
            stopAllNotes();
        }

            for (let i = 0; i < notesArePressed.length; i++) {
                if (notesArePressed[i].nat && !prevNotesArePressed.current[i].nat){
                    playNote( i, true );
                }
                if (notesArePressed[i].sharp && !prevNotesArePressed.current[i].sharp){
                    playNote( i, false);
                }
            }
    }, [notesArePressed]);

    const prevNotesArePressed = useRef();
    useEffect(() => {
        prevNotesArePressed.current = notesArePressed;
    }, [notesArePressed]);

    function startNote(event, id, isNat) {
        setNotesArePressed(
            notesArePressed.map((value, index) => {
                return index === id ? (isNat ? {...value, nat: true} : {...value, sharp: true}) : value;
            })
        )
    }

    function endNote(event, id, isNat) {
        setNotesArePressed(
            notesArePressed.map((value, index) => {
                return index === id ? (isNat ? {...value, nat: false} : {...value, sharp: false}) : value;
            })
        )
    }

    function switchNotes(event, newNote, oldNote) {
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

    function toggleKeyName(){
        console.log('toggle key name');
        setKeyNameToggle(!keyNameToggle);
    }

    // #region keyHandler
    // keyHandler

    const keys = [
        {key: "a", id: 0, isNat: true},
        {key: "w", id: 0, isNat: false},
        {key: "s", id: 1, isNat: true},
        {key: "e", id: 1, isNat: false},
        {key: "d", id: 2, isNat: true},
        {key: "f", id: 3, isNat: true},
        {key: "t", id: 3, isNat: false},
        {key: "g", id: 4, isNat: true},
        {key: "y", id: 4, isNat: false},
        {key: "h", id: 5, isNat: true},
        {key: "u", id: 5, isNat: false},
        {key: "j", id: 6, isNat: true},
        {key: "k", id: 7, isNat: true},
        {key: "o", id: 7, isNat: false},
        {key: "l", id: 8, isNat: true},
        {key: "p", id: 8, isNat: false},
        {key: ";", id: 9, isNat: true},
        {key: "'", id: 10, isNat: true}
    ]

    document.onkeydown = (e) => {
        let ourKey = keys.find(obj => obj.key === e.key);
        if(e.repeat) return;
        if(ourKey){
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === ourKey.id ? (ourKey.isNat ? {...value, nat: true} : {...value, sharp: true}) : value;
                })
            );
        }
    }
    document.onkeyup = (e) => {
        let ourKey = keys.find(obj => obj.key === e.key);
        if(ourKey){
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === ourKey.id ? (ourKey.isNat ? {...value, nat: false} : {...value, sharp: false}) : value;
                })
            );
        }
    }

    // #endregion

    //building keyComponentArray for construction...
    for (let i = 0; i < keyboardLength; i++) {
        keyComponentArray.push({
            id: i,
            hasSharp: i % 7 !== 6 && i % 7 !== 2,
            notesArePressed: notesArePressed[i]
        });
    }

    return (
        <>
            <KeyboardController 
            toggleKeyName={toggleKeyName}
            />
            {keyComponentArray.map((value, index) => (
                <KeyPair
                    key={value.id}
                    keyNames={keys}
                    id={value.id}
                    hasSharp={value.hasSharp}
                    notesArePressed={value.notesArePressed}
                    startNote={startNote}
                    endNote={endNote}
                    switchNotes={switchNotes}
                    keyNameToggle={keyNameToggle}
                />
            ))}
        </>
    );
};

export default KeyBoard;
