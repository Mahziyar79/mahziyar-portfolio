import mainImage from "../assets/images/main-image.jpg";
import Button from "../common/Button";
import resume from "../assets/docs/Resume.pdf";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const downloadSvg = (
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
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const About = () => {
  return (
    <div className="px-5 max-w-7xl m-auto">
      <div className="py-16 text-[35px] font-bold uppercase lg:text-center lg:text-[55px] relative">
        <p className="text-white">
          About <span className="text-mainyellow">ME</span>
        </p>
        <p className="hidden lg:block absolute text-[110px] top-5 right-[32%] text-[hsla(0,0%,100%,.07)]">
          RESUME
        </p>
      </div>
      <div className="text-white">
        <img
          className="md:hidden rounded-full object-cover w-64 h-64 my-5 m-auto border-4 border-slate-800 lg:hidden"
          src={mainImage}
          alt="mainImage"
        />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-[50%]">
            <h2 className="text-[28px] uppercase mb-7">personal infos</h2>
            <div>
              <ul className="flex flex-wrap gap-y-5 flex-1">
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">First Name : </p>
                  <p>Mahziyar</p>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">Age : </p>
                  <p>21</p>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">Open to Work : </p>
                  <p>Available</p>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">GitHub : </p>
                  <a
                    href="https://github.com/Mahziyar79"
                    target={"_blank"}
                    rel="noreferrer"
                    className="text-sm"
                  >
                    github.com/Mahziyar79
                  </a>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">Last Name : </p>
                  <p>Gilanpour</p>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">Email : </p>
                  <a href="mailto:mgillanpour79@gmail.com" className="text-sm">
                    mgillanpour79@gmail.com
                  </a>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">City : </p>
                  <p>Tehran</p>
                </li>
                <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
                  <p className="text-gray-400">Phone : </p>
                  <a href="tel:09385818976">09385818976</a>
                </li>
              </ul>
            </div>
            <a href={resume} alt="download resume">
              {" "}
              <Button title="download cv" svg={downloadSvg} />
            </a>
          </div>
          <div className="text-white lg:w-[50%] w-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 uppercase mt-5">
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold relative text-[50px] text-mainyellow after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    1
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg before:bg-mainyellow before:w-5 before:h-1">
                    years of <span className="block">experience</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold inline-block relative text-[50px] text-mainyellow after:content-['+'] after:absolute after:-top-2 after:left-[100%]">
                    14
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg before:bg-mainyellow before:w-5 before:h-1">
                    completed <span className="block">projects</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold relative text-[50px] text-mainyellow after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    8
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg before:bg-mainyellow before:w-5 before:h-1">
                    Happy <span className="block">customers</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold relative text-[50px] text-mainyellow after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    10
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg before:bg-mainyellow before:w-5 before:h-1">
                    Website <span className="block">Design</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pb-16 pt-28 text-white text-[35px] font-bold uppercase lg:text-center relative">
          My <span className="text-mainyellow">Skills</span>
        </p>
        <div className="flex flex-wrap justify-between gap-y-10">
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={85}
                text={`${85}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">HTML</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={85}
                text={`${85}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">CSS</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">JavaScript</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">React Js</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={90}
                text={`${90}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">WordPress</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={80}
                text={`${80}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">Tailwind Css</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={80}
                text={`${80}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">GitHub</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={60}
                text={`${60}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#2b2a2a",
                  textColor: "#fff",
                  pathColor: "#ffb400",
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4">Sass</p>
          </div>
        </div>
      </div>
      <div>
        <p className="pb-16 pt-28 text-white text-[35px] font-bold uppercase lg:text-center relative">
          Experience & Education
        </p>
        <div className="flex flex-col md:flex-row pb-10">
          <div className="flex flex-col w-full md:w-1/2 gap-y-10">
            <div className="flex gap-x-3 ">
              <div>
                <div className="bg-mainyellow p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:rounded-lg before:bg-mainyellow before:w-[2px] before:h-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <span>
                  <span className="bg-[#252525] text-gray-300 rounded-full text-sm px-3 py-1">2018 - Present</span>
                </span>
                <h3 className="text-[20px] text-white">Web Developer - Envato</h3>
                <p className="text-white text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div>
                <div className="bg-mainyellow p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:rounded-lg before:bg-mainyellow before:w-[2px] before:h-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <span>
                  <span className="bg-[#252525] text-gray-300 rounded-full text-sm px-3 py-1">2018 - Present</span>
                </span>
                <h3 className="text-[20px] text-white">Web Developer - Envato</h3>
                <p className="text-white text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div>
                <div className="bg-mainyellow p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:rounded-lg before:bg-mainyellow before:w-[2px] before:h-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <span>
                  <span className="bg-[#252525] text-gray-300 rounded-full text-sm px-3 py-1">2018 - Present</span>
                </span>
                <h3 className="text-[20px] text-white">Web Developer - Envato</h3>
                <p className="text-white text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 gap-y-10 ml-12">
            <div className="flex gap-x-3 ">
              <div>
                <div className="bg-mainyellow p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:rounded-lg before:bg-mainyellow before:w-[2px] before:h-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <span>
                  <span className="bg-[#252525] text-gray-300 rounded-full text-sm px-3 py-1">2019 - Present</span>
                </span>
                <h3 className="text-[20px] text-white">Managment</h3>
                <p className="text-white text-sm font-light">
                  I Study Managment in Shahid Beheshti university
                </p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div>
                <div className="bg-mainyellow p-2 rounded-full relative before:content-[''] before:absolute before:top-[100%] before:left-[50%] before:rounded-lg before:bg-mainyellow before:w-[2px] before:h-20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <span>
                  <span className="bg-[#252525] text-gray-300 rounded-full text-sm px-3 py-1">2018 - Present</span>
                </span>
                <h3 className="text-[20px] text-white">Web Developer - Envato</h3>
                <p className="text-white text-sm font-light">
                  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut
                  labore adipisicing elit
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
