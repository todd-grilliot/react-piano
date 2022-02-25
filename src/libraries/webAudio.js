let audioContext = new AudioContext;

if (audioContext.state === 'suspended') {
    audioContext.resume();
}

export function testAudio(){
    console.log('testing audio');

    let osc = audioContext.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, audioContext.currentTime); // value in hertz
    osc.connect(audioContext.destination);
    osc.start();

}