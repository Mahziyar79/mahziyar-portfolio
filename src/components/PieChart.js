import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const PieChart = ({darkmode}) => {
    return ( 
        <div>
        <p className="pb-16 pt-28 text-white text-[35px] font-bold uppercase lg:text-center relative dark:text-[#666]">
          My <span className="text-mainyellow dark:text-mainGreen">Skills</span>
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
                  backgroundColor:  `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4  dark:text-[#666]">HTML</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={85}
                text={`${85}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">CSS</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">JavaScript</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={75}
                text={`${75}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">React Js</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={90}
                text={`${90}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">WordPress</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={80}
                text={`${80}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">Tailwind Css</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={80}
                text={`${80}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">GitHub</p>
          </div>
          <div className="lg:w-[25%] md:w-1/3 w-1/2 flex flex-col items-center">
            <div className="md:w-48 md:h-48 w-32 h-32">
              <CircularProgressbar
                value={60}
                text={`${60}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: `${darkmode ? "rgb(51, 64, 48)" : "#2b2a2a"}`,
                  textColor: "#fff",
                  pathColor: `${darkmode ? "#72b626" : "#ffb400"}`,
                  trailColor: "transparent",
                })}
              />
            </div>
            <p className="text-white text-center text-xl mt-4 dark:text-[#666]">Sass</p>
          </div>
        </div>
      </div>
     );
}
 
export default PieChart;