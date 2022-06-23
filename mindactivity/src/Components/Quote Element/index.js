import React from "react";

const newIndex = Math.floor(Math.random() * 100); //UU ID
console.log(newIndex);

const Quote = (props) => {
  return (
    <div className="blockquote-wrapper" id="#effect-shine">
      <div className="blockquote">
        <p role="note">{props.quote}</p>
      </div>
    </div>
  );
};

export default Quote;
