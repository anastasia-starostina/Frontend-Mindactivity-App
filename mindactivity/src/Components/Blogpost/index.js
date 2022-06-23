import React from "react";
const blog = {
  title: "Tips to Avoid Coding Bootcamp Burnout",
  author: "Bethanny Parker",
  datePosted: "August 26, 2021",
  content:
    "Coding bootcamp burnout can happen to anyone, even the most resilient of students. The best way to avoid burning out during a bootcamp is to prepare ahead of time. Getting a good night's sleep every night can reduce stress and burnout. Because students must learn so many new things in such a short amount of time, coding bootcamps can be very challenging. Students encounter new material every day, and there is almost always homework, which may keep them up late into the night. Additionally, most bootcamps maintain a rigorous schedule that makes it extremely difficult to catch up if you fall behind. This stressful environment can lead some students to develop mental exhaustion, also known as burnout. You may think that as a strong student this won't apply to you. But coding bootcamp burnout can happen to anyone.",
  imageSrc:
    "https://ouch-cdn2.icons8.com/FjDkinjPMOux0iZ04JaLe-8cQ28QLZXiLAEzL9J8Y_8/rs:fit:456:456/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTMv/ODI5ODk2MWItNzk0/Yi00MDkyLTkxMTIt/YTY1NmIwNGM0MTRi/LnN2Zw.png",
  imageAlt: "Some text",
  comments: [1, 2, 3],
};
const Blogpost = () => {
  return (
    <div>
      <div className="blogpost">
        <header className="header">
          <h1 className="title">
            <i>{blog.title}</i>
          </h1>
          <h2 className="article-author">By {blog.author}</h2>
          <p className="date-posted">{blog.datePosted}</p>
        </header>
        <article className="article">
          <p>{blog.content}</p>
          <img
            className="picture"
            src={blog.imageSrc}
            width="600px"
            alt={"Photo of" + blog.title}
          />
        </article>
      </div>
    </div>
  );
};
export default Blogpost;
