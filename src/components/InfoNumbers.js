const InfoNumbers = () => {
    return ( 
        <div className="grid grid-cols-2 grid-rows-2 gap-4 uppercase mt-5">
              <div className="col-span-1">
                <div className="p-5 border border-[#535353] dark:bg-[#333] rounded-md ">
                  <h3 className="font-bold relative text-[50px] dark:text-mainyellow text-mainGreen after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    2
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#f5f5f5] text-[#666] dark:before:bg-mainyellow before:bg-mainGreen before:w-5 before:h-1">
                    years of <span className="block">experience</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#535353] dark:bg-[#333] rounded-md ">
                  <h3 className="font-bold inline-block relative text-[50px] dark:text-mainyellow text-mainGreen after:content-['+'] after:absolute after:-top-2 after:left-[100%]">
                    20
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#f5f5f5] text-[#666] dark:before:bg-mainyellow before:bg-mainGreen before:w-5 before:h-1">
                    completed <span className="block">projects</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#535353] dark:bg-[#333] rounded-md ">
                  <h3 className="font-bold relative text-[50px] dark:text-mainyellow text-mainGreen after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    12
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#f5f5f5] text-[#666] dark:before:bg-mainyellow before:bg-mainGreen before:w-5 before:h-1">
                    Happy <span className="block">customers</span>
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-5 border border-[#535353] dark:bg-[#333] rounded-md ">
                  <h3 className="font-bold relative text-[50px] dark:text-mainyellow text-mainGreen after:content-['+'] after:absolute after:-top-2 inline-block after:left-[100%]">
                    20
                  </h3>
                  <p className="pl-10 relative before:content-[''] before:absolute before:top-[50%] before:left-[0%] before:rounded-lg dark:text-[#f5f5f5] text-[#666] dark:before:bg-mainyellow before:bg-mainGreen before:w-5 before:h-1">
                    Website <span className="block">Design</span>
                  </p>
                </div>
              </div>
            </div>
     );
}
 
export default InfoNumbers;