const Contact = ({darkmode}) => {
  return (
    <div className="px-5 max-w-7xl m-auto">
      <div className="py-16 text-[35px] font-bold uppercase lg:text-center lg:text-[55px] relative">
        <p className="text-white dark:text-[#666]">
          GET IN <span className="text-mainyellow dark:text-mainGreen">TOUCH</span>
        </p>
        <p className="hidden lg:block absolute text-[110px] top-1 right-[27%] text-[hsla(0,0%,100%,.07)] dark:text-[rgba(30,37,48,.07)]">
          CONTACT
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%] w-full text-white flex flex-col gap-y-5 mb-10 md:mb-0">
          <h3 className="text-3xl font-bold dark:text-[#666]">Tell Everything you Want!</h3>
          <p className="font-light mr-20 dark:text-[#666]">
            To start cooperation or to contact me, you can apply through the
            following addresses
          </p>
          <div className="flex flex-col gap-y-6 dark:text-[#666]">
            <div className="flex gap-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11"
                  fill={`${darkmode ? "#72b626" : "#ffb400"}`}
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
                  fill={`${darkmode ? "#72b626" : "#ffb400"}`}
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
            <a
              href="https://github.com/Mahziyar79"
              target="_blank"
              rel="noreferrer"
              className="bg-btnBack dark:bg-[#72b626] p-2 hover:bg-mainyellow rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/mahziyar.79/"
              target="_blank"
              rel="noreferrer"
              className="bg-btnBack dark:bg-[#72b626] p-2 hover:bg-mainyellow rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 256 256"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mahziyar-gilanpour/"
              target="_blank"
              rel="noreferrer"
              className="bg-btnBack dark:bg-[#72b626] p-2 hover:bg-mainyellow rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="md:w-[60%] w-full mb-24 md:mb-0">
          <form className="flex flex-wrap gap-5">
            <div className="flex flex-col md:flex-row justify-between w-full gap-x-2 gap-y-3 md:gap-y-0">
              <input
                className="w-full flex-1 bg-[#252525] dark:bg-[#eee] dark:border-[#ccc] border border-[#111] py-3 px-7 rounded-full text-white dark:text-[#333] outline-none"
                placeholder="YOUR NAME"
              />
              <input
                className="w-full flex-1 bg-[#252525] dark:bg-[#eee] dark:border-[#ccc] border border-[#111] py-3 px-7 rounded-full text-white dark:text-[#333] outline-none"
                placeholder="YOUR EMAIL"
              />
            </div>
            <input
              className="w-full bg-[#252525] dark:bg-[#eee] dark:border-[#ccc] border border-[#111] py-3 px-7 rounded-full text-white dark:text-[#333] outline-none"
              placeholder="YOUR SUBJECT"
            />
            <textarea
              className="w-full bg-[#252525] dark:bg-[#eee] dark:border-[#ccc] border border-[#111] py-3 px-7 rounded-[30px] text-white dark:text-[#333] outline-none"
              placeholder="YOUR MESSAGE"
              rows="5"
            ></textarea>
            <div className="inline-block border mt-3 border-mainyellow dark:border-mainGreen rounded-full cursor-pointer hover:bg-mainyellow dark:hover:bg-mainGreen transition-all duration-200">
              <div className="flex items-center">
                <button className="uppercase pl-6 text-sm p-4 text-white dark:text-[#666] hover:dark:text-white">
                  send message
                </button>
                <div className="bg-mainyellow dark:bg-[#72b626] p-4 rounded-full">
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
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
