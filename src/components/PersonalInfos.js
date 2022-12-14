const PersonalInfos = () => {
  return (
    <>
      <h2 className="text-[28px] uppercase mb-7">personal infos</h2>
      <div>
        <ul className="flex flex-wrap gap-y-5 flex-1">
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">First Name : </p>
            <p>Mahziyar</p>
          </li>
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">Last Name : </p>
            <p>Gilanpour</p>
          </li>
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">Age : </p>
            <p>22</p>
          </li>
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">Email : </p>
            <a href="mailto:mgillanpour79@gmail.com" className="lg:text-base text-[13px] cursor-pointer">
              mgillanpour79@gmail.com
            </a>
          </li>
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">Open to Work : </p>
            <p>Available</p>
          </li>
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">GitHub : </p>
            <a
              href="https://github.com/Mahziyar79"
              target={"_blank"}
              rel="noreferrer"
              className="text-sm lg:text-base cursor-pointer"
            >
              github.com/Mahziyar79
            </a>
          </li>

          
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%]">
            <p className="dark:text-gray-400 text-gray-600">City : </p>
            <p>Tehran</p>
          </li>
          <li className="flex flex-col xl:flex-row gap-x-2 w-[50%] cursor-pointer">
            <p className="dark:text-gray-400 text-gray-600">Phone : </p>
            <a href="tel:09385818976">09385818976</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PersonalInfos;
