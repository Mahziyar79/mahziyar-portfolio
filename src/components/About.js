import mainImage from "../assets/images/image.jpg";
import Button from "../common/Button";
import resume from "../assets/docs/Resume.pdf";
import TimeLine from "./TimeLine";
import PieChart from "./PieChart";
import PersonalInfos from "./PersonalInfos";
import InfoNumbers from "./InfoNumbers";

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

const About = ({ darkmode }) => {
  return (
    <div className="px-5 max-w-7xl m-auto">
      <div className="pt-16 pb-8 text-[35px] font-bold uppercase lg:text-center lg:text-[55px] relative">
        <p className="dark:text-white text-[#606161] text-center">
          About <span className="dark:text-mainyellow text-mainGreen">ME</span>
        </p>
        <p className="hidden lg:block absolute text-[110px] top-1 right-[32%] dark:text-[hsla(0,0%,100%,.07)] text-[rgba(30,37,48,.07)]">
          RESUME
        </p>
      </div>
      <div className="text-white">
        <img
          className="md:hidden rounded-full object-cover w-64 h-64 mb-8 m-auto border-4 dark:border-slate-800 border-mainGreen lg:hidden"
          src={mainImage}
          alt="mainImage"
        />
        <div className="flex flex-col lg:flex-row items-center text-[#505050] dark:text-white">
          <div className="lg:w-[50%]">
            <PersonalInfos />
            <a href={resume} download alt="download resume">
              <Button title="download cv" svg={downloadSvg} />
            </a>
          </div>
          <div className="text-white lg:w-[50%] w-full">
            <InfoNumbers />
          </div>
        </div>
      </div>
      <PieChart darkmode={darkmode} />
      <div>
        <p className="pb-16 pt-28 dark:text-white text-[35px] font-bold uppercase lg:text-center relative text-[#666] text-center">
          Experience & Education
        </p>
        <TimeLine />
      </div>
    </div>
  );
};

export default About;
