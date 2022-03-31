const HeaderNav = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
    {/* lg Nav */}
      <div className="text-white fixed lg:right-8 lg:top-[45%] lg:translate-y-[-50%] z-20 lg:block hidden">
        <ul className="flex flex-col gap-y-6 ">
          <li
            className={`transition-all duration-200 p-3 rounded-full cursor-pointer hover:bg-mainGreen dark:hover:bg-mainyellow ${
              selectedPage === "home" ? "dark:bg-mainyellow bg-mainGreen" : "dark:bg-[#3d3d3d] bg-[#7e7e7e]"
            }`}
            onClick={() => setSelectedPage("home")}
          >
            <div className="flex gap-x-3 ">
              <p className="hidden">Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ddd"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </li>
          <li
            className={`transition-all duration-200 p-3 rounded-full cursor-pointer hover:bg-mainGreen dark:hover:bg-mainyellow ${
              selectedPage === "about" ? "dark:bg-mainyellow bg-mainGreen" : "dark:bg-[#3d3d3d] bg-[#7e7e7e]"
            }`}
            onClick={() => setSelectedPage("about")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ddd"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </li>
          <li
            className={`transition-all duration-200 p-3 rounded-full cursor-pointer hover:bg-mainGreen dark:hover:bg-mainyellow ${
              selectedPage === "contact" ? "dark:bg-mainyellow bg-mainGreen" : "dark:bg-[#3d3d3d] bg-[#7e7e7e]"
            }`}
            onClick={() => setSelectedPage("contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ddd"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </li>
          
        </ul>
      </div>

      {/* sm Nav */}
      <div className="text-white fixed bottom-0 z-40 lg:hidden w-full">
        <ul className="flex flex-row-reverse justify-around p-2 bg-[#333]">
          <li
            className={`p-3 rounded-full cursor-pointer hover:bg-mainyellow ${
              selectedPage === "home" ? "bg-mainyellow" : "bg-[#444]"
            }`}
            onClick={() => setSelectedPage("home")}
          >
            <div className="flex gap-x-3">
              <p className="hidden">Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ddd"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </li>
          <li
            className={`p-3 rounded-full cursor-pointer hover:bg-mainyellow ${
              selectedPage === "about" ? "bg-mainyellow" : "bg-[#444]"
            }`}
            onClick={() => setSelectedPage("about")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ddd"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </li>
          <li
            className={`p-3 rounded-full cursor-pointer hover:bg-mainyellow ${
              selectedPage === "contact" ? "bg-mainyellow" : "bg-[#444]"
            }`}
            onClick={() => setSelectedPage("contact")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ddd"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </li>
         
        </ul>
      </div>
    </>
  );
};

export default HeaderNav;
