
let audioContext = new AudioContext;

const primaryGain = audioContext.createGain();
primaryGain.gain.value = 0.99;
primaryGain.connect(audioContext.destination);

let osc;
let oscGain;

export function playNote(id, isNat){
    console.log(`starting note: ${id} ${isNat}`);
    let hertz = convertToHertz(id, isNat);
    osc = audioContext.createOscillator();
    oscGain = audioContext.createGain();
    oscGain.gain.value = 1;
    oscGain.connect(primaryGain);


    osc.type = 'sine'
    osc.frequency.setValueAtTime(hertz, audioContext.currentTime); // value in hertz
    //osc.connect(audioContext.destination);
    osc.connect(oscGain);

    
    osc.start();

    oscGain.gain.exponentialRampToValueAtTime(0.8, audioContext.currentTime + 3);
    oscGain.gain.setTargetAtTime(0, audioContext.currentTime + 3, 0.15);
    osc.stop(audioContext.currentTime + 5);

}

export function stopNote(id, isNat){
    // console.log('stopping note!');
    // console.log(oscGain.gain);
    if (osc){
        oscGain.gain.cancelAndHoldAtTime(audioContext.currentTime);
        oscGain.gain.setTargetAtTime(0, audioContext.currentTime, 0.15);
        osc.stop(audioContext.currentTime + 1);
    } else console.log('err, nothing to stop');

}

function convertToHertz(id, isNat){
    // let hertz = 0;
    let a2 = 110;
    let stepConst = Math.pow(2, (1/12));
    //define steps from middle A as a number... -2 could be how many times we divide, +2 how many times we multiply
    // 6 nat is middle A for me... but it might change with the keyboard length... then we just add an octave or whatever..
    let halfStepsSoFar = (Math.floor(id / 7) + Math.floor((id + 4) / 7)); // i think so...
    let plusOneForSharp = (isNat ? 0 : 1)
    // console.log('nuof half steps: ' + halfStepsSoFar)
    const hertzId = id * 2 + plusOneForSharp - halfStepsSoFar;
    // console.log(`hertz id: ${hertzId}`);

    //take the hertz id and convert it into hertz...
    // A is 9... equal to 440. lets start there.

    return a2 * Math.pow(stepConst, hertzId + 9);
}