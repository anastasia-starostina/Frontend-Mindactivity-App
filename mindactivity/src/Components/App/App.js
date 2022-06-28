import Particle from "../ParticleBackground/Particle";
import "./App.css";
import React from "react";
import MyTimer from "../Timer";
import Quote from "../Quote Element";
import Blogpost from "../Blogpost/index";

/*
- Rename firstBlog and currentItem to currentBlog and currentIte ✅ 
- Refactor Blogpost component to <BlogPost props={firstBlog} /> ✅ 
- Add conditional rendering to the image 
- git ignore -- node modules ✅
- Refactor Timer Buttons and put in separate components ✅
- Howler is imported twice in index.js in Button and Timer
- delete hard coded blog ✅
- Refactor folder structure at root level (e.g. we don't need 2 gitignores or package.json- pay attention to howler) ✅
- REmove React React favicon and some other default React files and put our own  ✅*/

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

  let currentItem = { ...affirmations[randomIndex] };

  let currentBlog = { ...blogs[randomBlogIndex] };
  console.log(currentBlog);
  console.log(currentBlog.imgageSrc);



  return (
    <>
      <Particle />
      <div className="page-container">
        <div className="Mindactivity-container">
          <h1 className="App">Mindactivity</h1>
          <MyTimer expiryTimestamp={time} />
          <Quote quote={currentItem.content} />
        </div>
        <div className="blogpost-container">
          <Blogpost {...currentBlog} />
        </div>
      </div>
    </>
  );
}

export default App;
