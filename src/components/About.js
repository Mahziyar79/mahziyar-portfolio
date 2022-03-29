import mainImage from "../assets/images/image.jpg";
import Button from "../common/Button";
import resume from "../assets/docs/Resume.pdf";
import TimeLine from './TimeLine'
import PieChart from "./PieChart";

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

const About = ({darkmode}) => {
  return (
    <div className="px-5 max-w-7xl m-auto">
      <div className="py-16 text-[35px] font-bold uppercase lg:text-center lg:text-[55px] relative">
        <p className="text-white dark:text-[#606161]">
          About <span className="text-mainyellow dark:text-mainGreen">ME</span>
        </p>
        <p className="hidden lg:block absolute text-[110px] top-1 right-[32%] text-[hsla(0,0%,100%,.07)] dark:text-[rgba(30,37,48,.07)]">
          RESUME
        </p>
      </div>
      <div className="text-white">
        <img
          className="md:hidden rounded-full object-cover w-64 h-64 my-5 m-auto border-4 border-slate-800 lg:hidden"
          src={mainImage}
          alt="mainImage"
        />
        <div className="flex flex-col lg:flex-row items-center dark:text-[#505050]">
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
                  <h3 className="font-bold relative text-[50px] text-mainyellow dark:text-mainGreen after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    1
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#666] before:bg-mainyellow dark:before:bg-mainGreen before:w-5 before:h-1">
                    years of <span className="block">experience</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold inline-block relative text-[50px] text-mainyellow dark:text-mainGreen after:content-['+'] after:absolute after:-top-2 after:left-[100%]">
                    14
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#666] before:bg-mainyellow dark:before:bg-mainGreen before:w-5 before:h-1">
                    completed <span className="block">projects</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold relative text-[50px] text-mainyellow dark:text-mainGreen after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    8
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#666] before:bg-mainyellow dark:before:bg-mainGreen before:w-5 before:h-1">
                    Happy <span className="block">customers</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#252525] rounded-md ">
                  <h3 className="font-bold relative text-[50px] text-mainyellow dark:text-mainGreen after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    10
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#666] before:bg-mainyellow dark:before:bg-mainGreen before:w-5 before:h-1">
                    Website <span className="block">Design</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PieChart darkmode={darkmode}/>
      <div>
        <p className="pb-16 pt-28 text-white text-[35px] font-bold uppercase lg:text-center relative dark:text-[#666]">
          Experience & Education
        </p>
        <TimeLine />
      </div>
    </div>
  );
};

export default About;
