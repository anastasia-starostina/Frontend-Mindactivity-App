import Particle from "../ParticleBackground/Particle";
import "./App.css";
import MyTimer from "../Timer";

function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);
  return (
    <>
      <Particle />
      <div>
        <h1 className="App">Mindactivity</h1>
        <MyTimer expiryTimestamp={time} />
      </div>
    </>
  );
}

export default App;
