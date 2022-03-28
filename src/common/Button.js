const Button = ({title,svg}) => {
  return (
    <div className="inline-block border mt-8 border-mainyellow rounded-full cursor-pointer hover:bg-mainyellow transition-all duration-200">
      <div className="flex items-center">
        <p className="uppercase pl-6 text-sm p-4">{title}</p>
        <div className="bg-mainyellow p-4 rounded-full">
         {svg}
        </div>
      </div>
    </div>
  );
};

export default Button;
