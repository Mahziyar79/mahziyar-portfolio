import Image from "../assets/images/image.jpg";

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
        <div className="bg-mainyellow h-[200%] -rotate-[15deg] absolute w-[30%] -left-[250px] hidden lg:block rounded-lg"></div>
        <div className="w-[30%] h-screen text-white z-20 hidden lg:flex items-center ml-6 relative">
          <img
            src={Image}
            alt="userImage"
            className="h-[calc(100vh-80px)] shadow-lg rounded-3xl z-10 hidden lg:flex object-cover"
          />
        </div>
        <div className="lg:w-[60%] p-6 w-[100%] h-screen text-white z-20 flex flex-wrap items-center">
          <div className="xl:ml-28 lg:ml-12 lg:w-3/4 text-center lg:text-left">
            <div>
              <img
                className="rounded-full object-cover w-64 h-64 mb-5 m-auto border-4 border-slate-800 lg:hidden"
                src={Image}
                alt="mainImage"
              />
            </div>
            <div className="uppercase text-[29px] md:text-[38px] 2xl:text-[46px] xl:text-[40px] font-bold">
              <h1 className="text-mainyellow xl:before:content-[''] before:content-none before:absolute before:top-[42%] before:-left-[8%] before:rounded-lg before:bg-mainyellow before:w-10 before:h-2 relative">
                I'm Mahziyar Gilanpour.
              </h1>
              <p>web Developer</p>
            </div>
            <div className="mt-6">
              I'm a Interested in Web Programming and Good Familiarity with
              Reactjs and doing all Kinds of Exercises such as Online store or
              personal site or even professional panel for the companies , I am
              passionate about building excellent software that improves the
              lives of those around me.
            </div>
            <div>
              <div
                onClick={() => setSelectedPage("about")}
                className="inline-block border mt-8 border-mainyellow rounded-full cursor-pointer hover:bg-mainyellow transition-all duration-200"
              >
                <div className="flex items-center">
                  <p className="uppercase pl-6 text-sm p-4">more about me</p>
                  <div className="bg-mainyellow p-4 rounded-full">
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
