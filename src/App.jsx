import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { JoinUs } from "./components/JoinUs";
import { Reviews } from "./components/Reviews";
import { Collection } from "./components/Collection";
import { WorldMap } from "./components/WorldMap";

function App() {
  return (
    <div className="m-auto bg-gradient-to-b from-[#FFFBEB] to-[#FFF] overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <JoinUs />
      <Reviews />
      <Collection />
      <WorldMap />
    </div>
  );
}

export default App;
