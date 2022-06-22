import React from "react";

//fetch request to get a quote to render in the quote component

const Quote = ({ quote }) => {
  return (
    <div class="blockquote-wrapper">
      <div class="blockquote">
        <h1>{quote}</h1>
      </div>
    </div>
  );
};

export default Quote;
