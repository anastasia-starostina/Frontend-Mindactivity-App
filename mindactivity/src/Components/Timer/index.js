import React from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, isRunning, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div id="daddyDiv" style={{ textAlign: "center", color: "#ffffff" }}>
      <div className="circle" style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div id="playPauseRestart">
        <button
          className="timerButton"
          id="startPauseButton"
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
      </div>
    </div>
  );
}
