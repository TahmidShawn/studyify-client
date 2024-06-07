const BannerFrameTopRight = () => {
  const progressValue = 70;
  return (
    <div className=" absolute -top-2 -right-4 md:-right-12 bg-white border-[1px] shadow-md border-slate-200 p-4 w-1/2 md:w-max mx-auto rounded-lg ">
      <div
        className="radial-progress text-[#93C5FD] ml-5"
        style={{ "--value": progressValue }}
        role="progressbar"
      >
        <span className="text-black font-bold">{progressValue}%</span>
      </div>
      <p className="text-xs text-center font-bold mt-2">
        Completion rate of our <br className="hidden md:inline-block"/> courses
      </p>
    </div>
  );
};

export default BannerFrameTopRight;
