const HeaderNav = ({ selectedPage, setSelectedPage }) => {
  return (
    <>
    {/* lg Nav */}
      <div className="text-white absolute lg:right-8 lg:top-[45%] lg:translate-y-[-50%] z-20 lg:block hidden">
        <ul className="flex flex-col gap-y-6">
          <li
            className={`p-3 rounded-full cursor-pointer hover:bg-mainyellow ${
              selectedPage === "home" ? "bg-mainyellow" : "bg-[#2b2b2b]"
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
              selectedPage === "about" ? "bg-mainyellow" : "bg-[#2b2b2b]"
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
              selectedPage === "contact" ? "bg-mainyellow" : "bg-[#2b2b2b]"
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
          <li
            className={`p-3 rounded-full cursor-pointer hover:bg-mainyellow ${
              selectedPage === "portfolio" ? "bg-mainyellow" : "bg-[#2b2b2b]"
            }`}
            onClick={() => setSelectedPage("portfolio")}
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </li>
        </ul>
      </div>

      {/* sm Nav */}
      <div className="text-white fixed bottom-0 z-40 lg:hidden w-full">
        <ul className="flex flex-row-reverse justify-around p-3 bg-[#2b2a2a]">
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
          <li
            className={`p-3 rounded-full cursor-pointer hover:bg-mainyellow ${
              selectedPage === "portfolio" ? "bg-mainyellow" : "bg-[#444]"
            }`}
            onClick={() => setSelectedPage("portfolio")}
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderNav;
