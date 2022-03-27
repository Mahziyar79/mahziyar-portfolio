import { useState } from "react";
import DarkModeBtn from "./components/DarkModeBtn";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [darkmode, setDarkMode] = useState(true);

  return (
    <div className="w-full min-h-screen bg-mainblack">
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        color="255, 180, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.2}
      />
      <div>
        {/* Header */}
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {/* DarkMode Btn */}
        <DarkModeBtn darkmode={darkmode} setDarkMode={setDarkMode} />
      </div>

      {selectedPage === "home" && <Home setSelectedPage={setSelectedPage} />}
      {/* Home Page */}

      {/* About Page */}
    </div>
  );
}

export default App;
