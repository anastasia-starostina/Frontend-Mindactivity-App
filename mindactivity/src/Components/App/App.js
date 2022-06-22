import Particle from "../ParticleBackground/Particle";
import "./App.css";
import MyTimer from "../Timer";
import Quote from "../Quote Element/Quote";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 300);
  return (
    <>
      <Particle />
      <div>
        <h1 className="App">Mindactivity</h1>
        <MyTimer expiryTimestamp={time} />
        <Quote />
      </div></>
  );
}

export default App;
