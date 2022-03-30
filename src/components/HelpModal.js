import React from "react";

const HelpModal = ({ toggleModal }) => {
    return (
        <div className="modal close-modal" onClick={toggleModal}>
            <div className="modal-content">
                <span className="close-modal" onClick={toggleModal}>
                    {" "}
                    &times;{" "}
                </span>
                <h2>Help</h2>
                <p>
                    Welcome! This synth was made by{" "}
                    <a target="_blank" href="https://toddgrilliot.space/">
                        Todd Grilliot
                    </a>{" "}
                    using React and the Web Audio API. You can play the keys
                    with your mouse or with your keyboard. Go ahead and play
                    with of the settings and have fun!
                    <br />
                    <br />
                    P.S. If you wanted to see which keys on your keyboard play
                    which notes, the asterisk in the top left corner turns that
                    setting on and off.
                </p>
                <h3>Waveshapes Explained</h3>
                <p>
                    {" "}
                    The waveshapes (sine, square, triangle, sawtooth) are
                    different types of sound waves that are common in synths. If
                    frequency is how fast a sound wave cycles, then waveshape is
                    the shape of the wave. Check out{" "}
                    <a
                        target="_blank"
                        href="https://www.perfectcircuit.com/signal/difference-between-waveforms"
                    >
                        this link
                    </a>{" "}
                    for more info on waveshapes.
                </p>
                <h3>The ADSR Envelope Explained</h3>
                <p>
                    The ADSR settings define how the note plays. Sort of like
                    the difference between burning a log and burning gasoline.
                    Your ADSR envelope controls the type of 'burn' that your
                    note is going to make.
                    <br />
                    <br />
                    Attack - how quickly the note begins playing
                    <br />
                    Decay - how quickly the note moves back to the sustain level
                    <br />
                    Sustain - the Volume level of a note being held for a while
                    <br />
                    Release - how long it takes for the note to stop after you
                    have released the key
                    <br />
                    <br />
                    <a
                        target="_blank"
                        href="https://blog.landr.com/adsr-envelopes-infographic/"
                    >
                        Here
                    </a>{" "}
                    is a helpful link on ADSR envelopes. And{" "}
                    <a
                        target="_blank"
                        href="https://github.com/yankeehotelfoxtrot51/react-piano"
                    >
                        Here's one
                    </a>{" "}
                    to the Github Repository for this project.
                </p>
            </div>
        </div>
    );
};

export default HelpModal;
