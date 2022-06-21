import React from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div id="daddyDiv" style={{ textAlign: "center", color: "#ffffff" }}>
      <div className="circle" style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div id="playPauseRestart">
        <button className="timerButton" onClick={isRunning ? pause : resume}>
          {isRunning ? "Pause" : "Start"}
        </button>
      
        <button className="timerButton"
          onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 60);
          restart(time, false);
        }}
        >
        Restart
        </button>
      </div>
    </div>
  );
}


/* <button id="addTime" onClick={() => {
          // Restarts to 5 minutes timer
          const time = expiryTimestamp;
          time.setSeconds(time.getSeconds() + 30);
          restart(time, false);
        }}>+30</button>
      <button id="subtractTime">-30</button> */
/*

Customisation plan:
1. remove the timer demo text ✅ 
2. remove the running/not running text ✅ 
3. collapse the start/pause buttons into one ✅
4. remove the days and hours numbers ✅ 
5. Style it- with the ring
6. Consistent number formatting: 2:09, not 2:9
Stretch: 
a. Change restart to reset (i.e. we want it to reset the timer, but not start it)
b. Give 2 reset options (+30s, +60s)



*/
