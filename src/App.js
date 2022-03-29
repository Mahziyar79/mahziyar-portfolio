import { useState } from "react";
import DarkModeBtn from "./components/DarkModeBtn";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AnimatedCursor from "react-animated-cursor";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [darkmode, setDarkMode] = useState("");

  return (
    <div className={`${darkmode ? "dark" : ""}`}>
      <div className="w-full min-h-screen bg-mainblack dark:bg-[#f5f5f5]">
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
          <NavBar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          {/* DarkMode Btn */}
          <DarkModeBtn darkmode={darkmode} setDarkMode={setDarkMode} />
        </div>

        {/* Home Page */}
        {selectedPage === "home" && <Home setSelectedPage={setSelectedPage} />}
        {/* About Page */}
        {selectedPage === "about" && <About darkmode={darkmode}/>}
        {/* Contact Page */}
        {selectedPage === "contact" && <Contact darkmode={darkmode}/>}
      </div>
    </div>
  );
}

export default App;
