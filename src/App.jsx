import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
function App() {
  return (
    <div className="max-w-[1440px] m-auto bg-gradient-to-b from-[#FFFBEB] to-[#FFF]">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
