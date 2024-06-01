import bannerImage from "./../../assets/banner-img.png";
import bannerBg from "./../../assets/banner-frame-1.png";
import BannerFrameTopLeft from "./BannerFrameTopLeft";
import BannerFrameBottomLeft from "./BannerFrameBottomLeft";

const Banner = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center flex-col lg:flex-row-reverse">
        {/* main img */}
        <div
          className="relative bg-contain bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <img src={bannerImage} className="ml-5" />

          {/* img top left part  */}

          <BannerFrameTopLeft />

          {/* img bottom left */}
          <BannerFrameBottomLeft />
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            Unlock Your Potential <br /> with Studyify
          </h1>
          <p className="py-6">
            Welcome to Studyify, where learning knows no bounds. We believe that
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
