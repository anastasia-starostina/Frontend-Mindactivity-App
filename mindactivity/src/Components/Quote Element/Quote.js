import React from "react";

      const newIndex = Math.floor(Math.random() * 100) //UU ID
      console.log(newIndex);

const Quote = (props) => {
  return (
    <div class="blockquote-wrapper" id='#effect-shine'>
      <div class="blockquote">
        <p>{props.quote}</p>
      </div>
    </div>
  );
};

export default Quote;
