import React from 'react'
import { Howl } from 'howler';


const SoundButton = () => {
    const soundSrc = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3";

    const callMySound = (src) => {
        const sound = new Howl({
            src,
            html5: true,
        });
        sound.play()
    }

    return (
        <> 
        <button onClick = {() => callMySound(soundSrc)}>Click me to play sound</button>
        </>

    )
}

export default SoundButton;