import React from "react";
import { useState, useEffect, useRef } from "react";
import { playNote, stopNote } from '../libraries/webAudio';
import KeyPair from "./KeyPair";
// import {keyHandler} from "../libraries/keyHandler"


// let switching = false;
const KeySet = () => {
    const [keyboardLength, setKeyBoardLength] = useState(14);
    const [notesArePressed, setNotesArePressed] = useState(
        Array(keyboardLength).fill({ nat: false, sharp: false })
    );
    const keyComponentArray = [];

    useEffect(() => {


        // i'm just tired and not thinking straight...
        // i think that only stopping a note when you aren't adding one might help...
        // but it might not.. lol
        // i was trying to check to see if i'm adding a note or taking one away when useEffect is called..
        // but i'm not really sure if that's the way to go...
        // anyway, you can't compare two arrays with ===
        // and you can't find the [] of something undefined or else the whole thing will crash.. pretty sure.
        // i'm going to rest now...

        //are we adding a note or taking away...?
        // console.log(notesArePressed)
        // console.log(prevNotesArePressed.current);

        //     if(JSON.stringify(prevNotesArePressed.current) === JSON.stringify(notesArePressed)){
        //         for (let i = 0; i < notesArePressed.length; i++) {
        //         console.log('i guess so');
        //         }
        //     }

            stopNote();
            // if (prevNotesArePressed.current === notesArePressed)

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
        console.log(`end note: ${id} ${isNat}`);
        setNotesArePressed(
            notesArePressed.map((value, index) => {
                return index === id ? (isNat ? {...value, nat: false} : {...value, sharp: false}) : value;
            })
        )
    }

    function switchNotes(event, newNote, oldNote) {
        console.log('switch notes function!');
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
        //keydown is being fired repeatedly until we let go
        //keyboard event repeat property... ???
        if(e.repeat) return;
        console.log(e);


        if(ourKey){
            setNotesArePressed(
                notesArePressed.map((value, index) => {
                    return index === ourKey.id ? (ourKey.isNat ? {...value, nat: true} : {...value, sharp: true}) : value;
                    // return index === id ? (isNat ? {...value, nat: true} : {...value, sharp: true}) : value;
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
                    // return index === id ? (isNat ? {...value, nat: true} : {...value, sharp: true}) : value;
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
            {keyComponentArray.map((value, index) => (
                <KeyPair
                    key={value.id}
                    id={value.id}
                    hasSharp={value.hasSharp}
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
