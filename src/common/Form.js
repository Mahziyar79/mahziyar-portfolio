const Form = () => {
    return ( 
        <form className="flex flex-wrap gap-5">
        <div className="flex flex-col md:flex-row justify-between w-full gap-x-2 gap-y-3 md:gap-y-0">
          <input
            className="w-full flex-1 dark:bg-[#333] bg-[#eee] border-[#ccc] border dark:border-[#111] py-3 px-7 rounded-full dark:text-white text-[#333] outline-none"
            placeholder="YOUR NAME"
          />
          <input
            className="w-full flex-1 dark:bg-[#333] bg-[#eee] border-[#ccc] border dark:border-[#111] py-3 px-7 rounded-full dark:text-white text-[#333] outline-none"
            placeholder="YOUR EMAIL"
          />
        </div>
        <input
          className="w-full dark:bg-[#333] bg-[#eee] border-[#ccc] border dark:border-[#111] py-3 px-7 rounded-full dark:text-white text-[#333] outline-none"
          placeholder="YOUR SUBJECT"
        />
        <textarea
          className="w-full dark:bg-[#333] bg-[#eee] border-[#ccc] border dark:border-[#111] py-3 px-7 rounded-[30px] dark:text-white text-[#333] outline-none"
          placeholder="YOUR MESSAGE"
          rows="5"
        ></textarea>
        <div className="inline-block border mt-3 dark:border-mainyellow border-mainGreen rounded-full cursor-pointer dark:hover:bg-mainyellow hover:bg-mainGreen transition-all duration-200">
          <div className="flex items-center">
            <button className="uppercase pl-6 text-sm p-4 dark:text-white text-[#666] hover:text-white">
              send message
            </button>
            <div className="dark:bg-mainyellow bg-[#72b626] p-4 rounded-full">
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
     );
}
 
export default Form;