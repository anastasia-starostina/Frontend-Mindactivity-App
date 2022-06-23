import React from "react";
import { Howl } from "howler";
const SoundButton = () => {
  const sound = new Howl({
    src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"],
    html5: true,
  });
  return (
    <>
      <button className="round-button" onClick={() => sound.play()}>
        play
      </button>
      <button onClick={() => sound.pause()}>Pause</button>
    </>
  );
};
export default SoundButton;
