import bannerImage from "./../../assets/banner-img.png";
import bannerBg from "./../../assets/banner-frame-1.png";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
        {/* div 1 */}
        <div
          className="relative bg-contain bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <img src={bannerImage} className="ml-5" />

          {/* div 2 */}
          <div className="absolute top-24 -left-10 md:-left-20 bg-white border-[1px] shadow-md border-slate-200 w-max p-3 rounded-lg">
            <div className=" flex -space-x-3 justify-center">
              <div className="tooltip hover:z-40" data-tip="name1">
                <img
                  className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
                  src="https://readymadeui.com/team-1.webp"
                  alt="avatar"
                />
              </div>
              <div className="tooltip hover:z-40" data-tip="name2">
                <img
                  className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
                  src="https://readymadeui.com/team-2.webp"
                  alt="avatar"
                />
              </div>
              <div className="tooltip hover:z-40" data-tip="name3">
                <img
                  className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
                  src="https://readymadeui.com/team-3.webp"
                  alt="avatar"
                />
              </div>
              <div className="tooltip hover:z-40" data-tip="name4">
                <img
                  className="h-10 w-10 rounded-full hover:ring-2 hover:ring-slate-400 inline-block"
                  src="https://readymadeui.com/team-4.webp"
                  alt="avatar"
                />
              </div>
            </div>
            <p className="text-sm leading-4 mt-2">
              Join our community <br /> of 1200+ Students
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            Unlock Your Potential <br /> with Studyify
          </h1>
          <p className="py-6">
            Welcome to Studyify, where learning knows no bounds. We believe that{" "}
            <br />
            education is the key to personal and professional growth, and we are
            here to <br /> guide you on your journey to success.
          </p>
          <button className="btn btn-primary">
            Start your instructor journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
