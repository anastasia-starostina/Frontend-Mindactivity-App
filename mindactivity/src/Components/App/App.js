import Particle from "../ParticleBackground/Particle";
import "./App.css";
import React from "react";
import MyTimer from "../Timer";
import Quote from "../Quote Element";
import Blogpost from "../Blogpost/index";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  const [affirmations, setAffirmations] = React.useState([
    { content: undefined },
  ]);
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetchAffirmations();
    fetchBlogs();
  }, []);

  const fetchAffirmations = async () => {
    const response = await fetch("http://localhost:3001/mindactivity");
    const data = await response.json();
    // console.log(`this is data: ${data}`);
    setAffirmations([...data.payload]);
  };

  const fetchBlogs = async () => {
    const response = await fetch("http://localhost:3001/blogs");
    const data = await response.json();
    setBlogs([...data.payload]);
  };

  const randomIndex = Math.floor(Math.random() * 50);
  console.log(randomIndex);

  const randomBlogIndex = Math.floor(Math.random() * 3);
  console.log(randomBlogIndex);

  let firstItem = { ...affirmations[randomIndex] };

  let firstBlog = { ...blogs[randomBlogIndex] };
  console.log(firstBlog);
  console.log(firstBlog.imgageSrc);

  return (
    <>
      <Particle />
      <div className="page-container">
        <div className="Mindactivity-container">
          <h1 className="App">Mindactivity</h1>
          <MyTimer expiryTimestamp={time} />
          <Quote quote={firstItem.content} />
        </div>
        <div className="blogpost-container">
          <Blogpost
            title={firstBlog.title}
            author={firstBlog.author}
            date={firstBlog.date}
            content={firstBlog.content}
            alt={firstBlog.title}
          />
        </div>
      </div>
    </>
  );
}

export default App;
