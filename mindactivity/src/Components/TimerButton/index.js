import React from 'react'

const TimerButton = (props) => {
  return (
      <button
        className="timerButton"
        id = {props.id}
        onClick = {props.onClick} > {props.children}
      </button>
  )
}

export default TimerButton

