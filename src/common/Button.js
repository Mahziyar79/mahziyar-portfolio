const Button = ({title,svg}) => {
  return (
    <div className="inline-block border mt-8 border-mainGreen hover:bg-mainGreen dark:border-mainyellow rounded-full cursor-pointer hover:dark:bg-mainyellow transition-all duration-200">
      <div className="flex items-center">
        <p className="uppercase pl-6 text-sm p-4 hover:text-white">{title}</p>
        <div className="dark:bg-mainyellow bg-mainGreen p-4 rounded-full text-white">
         {svg}
        </div>
      </div>
    </div>
  );
};

export default Button;
