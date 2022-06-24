import React from "react";
import { useTimer } from "react-timer-hook";
import { Howl } from "howler";

const sound = new Howl({
  src: ["https://audio.jukehost.co.uk/SVYsiy5dhtvfsx41xbrNCR1QbR6egZ9l"],
  html5: true,
  // https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3
});

export default function MyTimer({ expiryTimestamp }) {
  const { autoStart, seconds, minutes, isRunning, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
      autoStart: false,
    });

  //Storing a sound file in source

  // function togglePlay() {
  //   return sound.playing() ? sound.pause() : sound.play();
  // }

  return (
    <div id="daddyDiv" style={{ textAlign: "center", color: "#FFFFFF" }}>
      <div className="circle" style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div id="playPauseRestart">
        <button
          className="timerButton"
          id="startPauseButton"
          aria-label="startPauseButton"
          onClick={isRunning ? pause : resume}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="timerButton"
          id="resetButton"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time, false);
          }}
        >
          Reset
        </button>
        <button
          className="sound-button"
          onClick={() => (sound.playing() ? sound.pause() : sound.play())}
        >
          Music
        </button>
      </div>
    </div>
  );
}
