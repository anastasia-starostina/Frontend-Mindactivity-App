import Particle from "../ParticleBackground/Particle";
import "./App.css";
import React from "react";
import MyTimer from "../Timer";
import Quote from "../Quote Element/Quote";

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

  console.log(affirmations[0].content);

  return (
    <>
      <Particle />
      <div>
        <h1 className="App">Mindactivity</h1>
        <MyTimer expiryTimestamp={time} />
        <Quote quote={affirmations[3].content} />
      </div>
    </>
  );
}

export default App;

// function App() {
//   const [affirmations, setAffirmations] = React.useState([]);

//   React.useEffect(() => {
//     fetchAffirmations();
//   }, []);

//   const fetchAffirmations = async () => {
//     const response = await fetch("http://localhost:3001/mindactivity");
//     const data = await response.json();
//     setAffirmations(data.payload);
//   };

//   // wrapping affirmations into an anon function stops "affirmations.app is not a function" errors

//   return (
//     <div className="App">
//       {affirmations.map((t) => {
//         return <div key={t.id}>{t.content}</div>;
//       })}
//       <h1>Hello world</h1>
//     </div>
//   );
// }
