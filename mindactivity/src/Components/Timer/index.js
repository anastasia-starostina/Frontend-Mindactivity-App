import React from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
    autoStart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center", color: "#ffffff" }}>
      <div className="circle" style={{ fontSize: "100px" }}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      <button onClick={isRunning ? pause : resume}>
        {isRunning ? "Pause" : "Start"}
      </button>
      {/* <button onClick={pause}>Pause</button> */}
      {/* <button onClick={resume}>Resume</button> */}
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 300);
          restart(time, false);
        }}
      >
        Restart
      </button>
    </div>
  );
}

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
