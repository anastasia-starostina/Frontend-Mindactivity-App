import React from "react";
import { useTimer } from "react-timer-hook";
import TimerButton from "../TimerButton";
import musicFunctionality from "../Sound";

export default function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
    autoStart: false,
  });

  return (
    <div id="global-timer-div">
      <div className="circle">
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div id="buttons-div">
        <TimerButton
          id="startPauseButton"
          ariaLabel="startPauseButton"
          onClick={isRunning ? pause : resume}
        >
          {isRunning ? "Pause" : "Start"}
        </TimerButton>
        <TimerButton
          id="resetButton"
          onClick={() => {
            // Restarts to 5 minutes timer
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time, false);
          }}
        >
          Reset
        </TimerButton>

        <TimerButton id="sound-button" onClick={musicFunctionality}>
          Music
        </TimerButton>
      </div>
    </div>
  );
}
