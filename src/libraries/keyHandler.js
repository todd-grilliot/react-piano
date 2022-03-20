import { notesArePressed, setNotesArePressed } from "../components/KeyBoard"

// console.log(notesArePressed);

export function keyHandler(){
    document.onkeydown = (e) => {
        console.log('key');
        console.log(e);
    }
}