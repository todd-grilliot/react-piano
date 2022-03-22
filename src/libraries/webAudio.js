
let audioContext = new AudioContext;

const primaryGain = audioContext.createGain();
primaryGain.gain.value = 1;

const limiterNode = audioContext.createDynamicsCompressor();
limiterNode.threshold.setValueAtTime(-5.0, audioContext.currentTime); // In Decibels
limiterNode.knee.setValueAtTime(0, audioContext.currentTime); // In Decibels
limiterNode.ratio.setValueAtTime(40.0, audioContext.currentTime);  // In Decibels
limiterNode.attack.setValueAtTime(0.001, audioContext.currentTime); // Time is seconds
limiterNode.release.setValueAtTime(0.1, audioContext.currentTime); // Time is seconds

// primaryGain.connect(audioContext.destination);
primaryGain.connect(limiterNode);
limiterNode.connect(audioContext.destination)

let oscArray = [];
let oscGainArray = [];
let osc;
let oscGain;
let waveType = "sine";

export function changeVolume(volume){
    primaryGain.gain.value = volume;
}
export function changeWaveType(type){
    waveType = type;
}

export function playNote(id, isNat){
    let hertz = convertToHertz(id, isNat);
    osc = audioContext.createOscillator();
    oscArray.push(osc);

    oscGain = audioContext.createGain();
    oscGainArray.push(oscGain);

    oscGain.gain.value = 1;
    oscGain.connect(primaryGain);

    osc.type = waveType;
    osc.frequency.setValueAtTime(hertz, audioContext.currentTime); // value in hertz
    osc.connect(oscGain);



    oscArray[oscArray.length -1].start();


    oscGain.gain.exponentialRampToValueAtTime(0.8, audioContext.currentTime + 3);
    oscGain.gain.setTargetAtTime(0, audioContext.currentTime + 10, 0.15);
    osc.stop(audioContext.currentTime + 11);

}

export function stopNote(id, isNat, isAll){
    let hertz = convertToHertz(id, isNat);

    for (let i = 0; i < oscArray.length; i++) {
        if(Math.floor(hertz) == Math.floor(oscArray[i].frequency.value) ){
            oscGainArray[i].gain.cancelAndHoldAtTime(audioContext.currentTime);
            oscGainArray[i].gain.setTargetAtTime(0, audioContext.currentTime, 0.15);
            oscArray[i].stop(audioContext.currentTime + 1);

            oscArray.splice(i, 1);
            oscGainArray.splice(i, 1);
        }
    }

}
export function stopAllNotes(){
    for (let i = 0; i < oscArray.length; i++) {
        oscGainArray[i].gain.cancelAndHoldAtTime(audioContext.currentTime);
        oscGainArray[i].gain.setTargetAtTime(0, audioContext.currentTime, 0.15);
        oscArray[i].stop(audioContext.currentTime + 1);
    }
    while(oscArray.length + oscGainArray.length > 0){
        oscArray.pop();
        oscGainArray.pop();
    }
}

function convertToHertz(id, isNat){
    let a2 = 110;
    let stepConst = Math.pow(2, (1/12));

    let halfStepsSoFar = (Math.floor(id / 7) + Math.floor((id + 4) / 7));
    let plusOneForSharp = (isNat ? 0 : 1)
    const hertzId = id * 2 + plusOneForSharp - halfStepsSoFar;

    return a2 * Math.pow(stepConst, hertzId + 9);
}