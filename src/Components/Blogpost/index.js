import React from "react";
const Blogpost = (props) => {
  return (
    <div>
      <div className="blogpost">
        <header className="header">
          <h1 className="title">
            <i>{props.title}</i>
          </h1>
          <h2 className="article-author">By {props.author}</h2>
          <p className="date-posted">{props.datePosted}</p>
        </header>
        <article className="article">
          <p>{props.content}</p>
          <img
            className="picture"
            src="https://ouch-cdn2.icons8.com/FjDkinjPMOux0iZ04JaLe-8cQ28QLZXiLAEzL9J8Y_8/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTMv/ODI5ODk2MWItNzk0/Yi00MDkyLTkxMTIt/YTY1NmIwNGM0MTRi/LnN2Zw.png"
            width="600px"
            alt={"Photo of " + props.title}
          />
        </article>
      </div>
    </div>
  );
};
export default Blogpost;
