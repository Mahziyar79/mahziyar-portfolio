const Button = ({title,svg}) => {
  return (
    <div className="inline-block border mt-8 dark:border-mainGreen hover:dark:bg-mainGreen border-mainyellow rounded-full cursor-pointer hover:bg-mainyellow transition-all duration-200">
      <div className="flex items-center">
        <p className="uppercase pl-6 text-sm p-4 hover:dark:text-white">{title}</p>
        <div className="bg-mainyellow dark:bg-mainGreen p-4 rounded-full dark:text-white">
         {svg}
        </div>
      </div>
    </div>
  );
};

export default Button;
