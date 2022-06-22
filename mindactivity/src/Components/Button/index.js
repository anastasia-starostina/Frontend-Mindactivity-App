import React from "react";
import { Howl } from "howler";

function PlayButton() {
  const sound = new Howl({
    src: ["https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"],
    html5: true,
  });
  return (
    <div>
      <button onClick={() => sound.play()}>music on</button>
    </div>
  );
}

//test comment
export default PlayButton;
