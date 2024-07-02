import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { JoinUs } from "./components/JoinUs";

function App() {
  return (
    <div className="m-auto bg-gradient-to-b from-[#FFFBEB] to-[#FFF] overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <JoinUs />
    </div>
  );
}

export default App;
