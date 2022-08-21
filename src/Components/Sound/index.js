import { Howl } from "howler";

const sound = new Howl({
  src: ["https://audio.jukehost.co.uk/SVYsiy5dhtvfsx41xbrNCR1QbR6egZ9l"],
  html5: true,
});

let musicFunctionality = () => (sound.playing() ? sound.pause() : sound.play());
export default musicFunctionality;
