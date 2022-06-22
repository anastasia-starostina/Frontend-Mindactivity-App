import Particle from "../ParticleBackground/Particle";
import "./App.css";
import React from "react";
import MyTimer from "../Timer";
import Quote from "../Quote Element/Quote";
import Blogpost from '../Blogpost/index'


function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);

  const [affirmations, setAffirmations] = React.useState([
    { content: undefined },
  ]);

  React.useEffect(() => {
    fetchAffirmations();
  }, []);

  const fetchAffirmations = async () => {
    const response = await fetch("http://localhost:3001/mindactivity");
    const data = await response.json();
    // console.log(`this is data: ${data}`);
    setAffirmations([...data.payload]);
  };

  const randomIndex = Math.floor(Math.random() * 50);
  console.log(randomIndex);
  let firstItem = { ...affirmations[randomIndex] };
  // console.log(firstItem.content);

  return (
    <>
      <Particle />
      <div>
        <h1 className="App">✨Mindactivity✨</h1>
        <MyTimer expiryTimestamp={time} />
        <Quote quote={firstItem.content} />
        <Blogpost/>
      </div>
    </>
  );
}

export default App;
