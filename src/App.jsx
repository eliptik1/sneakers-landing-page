import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="max-w-[1440px] m-auto bg-gradient-to-b from-[#FFFBEB] to-[#FFF]">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
