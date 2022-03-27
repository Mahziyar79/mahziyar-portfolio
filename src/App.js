import { useState } from "react";
import DarkModeBtn from "./components/DarkModeBtn";
import NavBar from "./components/NavBar";
import mainImage from "./assets/images/main-image.jpg";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [darkmode, setDarkMode] = useState(true);

  return (
    <div className="w-full min-h-screen bg-mainblack">
      <div>
        {/* Header */}
        <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        {/* DarkMode Btn */}
        <DarkModeBtn darkmode={darkmode} setDarkMode={setDarkMode} />
      </div>

      {/* Home Page */}
      <section className="lg:overflow-hidden z-0">
        <div className="flex relative items-center">
          <div className="bg-mainyellow h-[200%] -rotate-[15deg] absolute w-[30%] -left-[250px] hidden lg:block rounded-lg"></div>
          <div className="w-[30%] h-screen text-white z-20 hidden lg:flex items-center ml-6 relative">
            <img
              src={mainImage}
              alt="userImage"
              // rounded-full w-52 h-52 object-cover
              className="h-[calc(100vh-80px)] shadow-lg rounded-3xl z-10 hidden lg:flex object-cover"
            />
          </div>
          <div className="lg:w-[60%] p-6 w-[100%] h-screen text-white z-20 flex flex-wrap items-center">
            <div className="lg:ml-14 lg:w-3/4 text-center lg:text-left">
              <div className="uppercase text-[29px] md:text-[38px] xl:text-[46px] font-bold">
                <h1 className="text-mainyellow">I'm Mahziyar Gilanpour.</h1>
                <p>web Developer</p>
              </div>
              <div className="mt-6">
                I'm a Tunisian based web designer & front‑end developer focused
                on crafting clean & user‑friendly experiences, I am passionate
                about building excellent software that improves the lives of
                those around me.
              </div>
              <div>
                <div
                  className="inline-block border mt-8 border-mainyellow rounded-full cursor-pointer hover:bg-mainyellow transition-all duration-200"
                  onClick={() => setSelectedPage("about")}
                >
                  <div className="flex items-center">
                    <p className="uppercase pl-6 text-sm p-4">More about me</p>
                    <div className="bg-mainyellow p-4 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
