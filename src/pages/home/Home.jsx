import Banner from "../../components/banner/Banner";
import StatsBanner from "../../components/statsBanner/StatsBanner";

const Home = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-4 lg:mx-auto">
        <Banner />
      </div>
      <StatsBanner />
    </div>
  );
};

export default Home;
