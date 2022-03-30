import Form from "../common/Form";
import SocialLinks from "../common/SocialLinks";

const Contact = ({darkmode}) => {
  return (
    <div className="px-5 max-w-7xl m-auto">
      <div className="py-16 text-[35px] font-bold uppercase lg:text-center lg:text-[55px] relative">
        <p className="dark:text-white text-[#666]">
          GET IN <span className="dark:text-mainyellow text-mainGreen">TOUCH</span>
        </p>
        <p className="hidden lg:block absolute text-[110px] top-1 right-[27%] dark:text-[hsla(0,0%,100%,.07)] text-[rgba(30,37,48,.07)]">
          CONTACT
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%] w-full text-[#666] flex flex-col gap-y-7 mb-10 md:mb-0">
          <h3 className="text-3xl font-bold dark:text-white">Tell Everything you Want!</h3>
          <p className="font-light mr-20 dark:text-white">
            To start cooperation or to contact me, you can apply through the
            following addresses
          </p>
          <div className="flex flex-col gap-y-6 dark:text-white">
            <div className="flex gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11"
                  fill={`${darkmode ? "#ffb400" : "#72b626"}`}
                  viewBox="0 0 24 24"
                  stroke="#333"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                  />
                </svg>
              </div>
              <div>
                <p className="uppercase">mail me</p>
                <p>mgillanpour79@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11"
                  fill={`${darkmode ? "#ffb400" : "#72b626"}`}
                  viewBox="0 0 24 24"
                  stroke="#333"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="uppercase">call me</p>
                <p>09385818976</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-2">
          <SocialLinks />
          </div>
        </div>
        <div className="md:w-[60%] w-full mb-24 md:mb-0">
         <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
