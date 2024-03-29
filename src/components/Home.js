import Image from "../assets/images/main-img1.jpg";

const aboutSvg = (
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
);

const Home = ({ setSelectedPage }) => {
  return (
    <section className="lg:overflow-hidden z-0">
      <div className="flex relative items-center">
        <div className="dark:bg-mainyellow bg-mainGreen h-[200%] -rotate-[15deg] absolute w-[30%] -left-[250px] hidden lg:block rounded-lg"></div>
        <div className="w-[30%] h-screen text-white z-20 hidden lg:flex items-center ml-6 relative">
          <img
            src={Image}
            alt="userImage"
            className="h-[calc(100vh-80px)] shadow-lg rounded-3xl z-10 hidden lg:flex object-cover w-full"
          />
        </div>
        <div className="lg:w-[60%] p-6 w-[100%] min-h-screen text-white z-20 flex flex-wrap items-center">
          <div className="xl:ml-28 lg:ml-12 lg:w-3/4 text-center lg:text-left">
            <div>
              <img
                className="rounded-full object-cover w-64 h-64 mb-5 m-auto border-4 dark:border-slate-800 border-mainGreen lg:hidden"
                src={Image}
                alt="mainImage"
              />
            </div>
            <div className="uppercase text-[29px] md:text-[38px] 2xl:text-[46px] xl:text-[40px] font-bold">
              <h1 className="dark:text-mainyellow text-mainGreen xl:before:content-[''] before:content-none before:absolute before:top-[42%] before:-left-[8%] before:rounded-lg before:dark:bg-mainyellow before:bg-mainGreen before:w-10 before:h-2 relative">
                I'm Mahziyar Gilanpour.
              </h1>
              <p className="dark:text-[#bebebe] text-[#666]">Front-End Developer</p>
            </div>
            <div className="mt-4 dark:text-[#bebebe] text-[#666] leading-8">
              I'm a Interested in Web Programming and Very Good Familiarity with
              Reactjs & Nextjs & Tailwindcss & Wordpress and Above all of them I
              am a Very Motivated and Hardworking Person that can add more
              Motivation to your Company , I am passionate about building
              excellent software that improves the lives of those around me.
            </div>
            <div>
              <div
                onClick={() => setSelectedPage("about")}
                className="mb-24 inline-block border mt-6 dark:border-mainyellow border-mainGreen rounded-full  cursor-pointer hover:dark:bg-mainyellow hover:bg-mainGreen transition-all duration-200"
              >
                <div className="flex items-center">
                  <p className="uppercase pl-6 text-sm p-4 dark:text-white text-[#666] font-bold hover:text-white">
                    more about me
                  </p>
                  <div className="dark:bg-mainyellow bg-mainGreen p-4 rounded-full">
                    {aboutSvg}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
